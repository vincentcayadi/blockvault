import React from 'react';
import { useState } from 'react';
import { useMoralisFile } from 'react-moralis';
import { useMoralis } from 'react-moralis';
import { FileUploader } from 'react-drag-drop-files';

const fileTypes = ['JPEG', 'PNG', 'GIF'];

const Upload = () => {
  const { Moralis } = useMoralis();

  const [value, setValue] = useState('');

  const [setFileTarget] = useState('');

  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);
  };

  // const fileInput = (e) => {
  //   setFileTarget(e.target.files[0]);
  // }

  // function fileInputs(e) {
  //   const fileInput = e.target.files[0];
  // }

  // const { saveFile } = useMoralisFile();
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   const fileName = data.get('fileName');
  //   console.log({
  //     "fileName": fileName
  //   });

  //   saveFile(fileName, fileTarget, {
  //     type: "text/plain", onSuccess: (result) => console.log(result),
  //     onError: (error) => console.log(error)
  //   });

  // };

  var fileInput = '';

  // function getFile() {
  //   fileInput = document.getElementById('fileInput').files[0];
  //   console.log('Get File: ', fileInput);
  // }
  // function readFile(input) {
  //   const reader = new FileReader();
  //   var fileData = reader.readAsDataURL(fileInput);
  //   console.log(fileData);
  // }

  async function upload() {
    const fileInput = document.getElementById('fileInput');
    const data = fileInput.files[0];
    const file = new Moralis.File(data.name, data);
    console.log(file);
    await file.saveIPFS({ useMasterKey: true });
    console.log(file.hash());
    console.log(file.ipfs());
  }

  // const handleSubmit = async event => {
  //   event.preventDefault();
  //   console.log("handleSubmit");
  //   console.log("event target: ", event.currentTarget);

  //   // const fileName = value;
  //   // console.log({
  //   //   "fileName": fileName
  //   // });

  //   console.log("---")

  //   getFile();

  //   console.log(fileInput);

  //   readFile(fileInput);

  //   const file = fileInput.files[0];

  //   const uploadFile = new Moralis.File(file.name, file);
  //   await uploadFile.saveIPFS({useMasterKey:true});
  //   console.log(uploadFile.ipfs(),uploadFile.hash())
  // }

  return (
    <>
      <div className="grid w-screen h-screen place-items-center">
        <div>
          <form>
            <FileUploader
              label="Drag and drop your file here"
              multiple={false}
              handleChange={upload}
              name="files"
              types={fileTypes}
            />
            {console.log(file)}
            <p>
              {file ? `File name: ${file[0].name}` : 'No files uploaded yet'}
            </p>
            <button type="button" id="upload_file_button" onClick={upload}>
              Upload
            </button>
          </form>
          {/* <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="fileName"
              label="File Name"
              name="fileName"
              autoFocus
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
              }}
            />
        </Box> */}
        </div>
      </div>
    </>
  );
};

export default Upload;
