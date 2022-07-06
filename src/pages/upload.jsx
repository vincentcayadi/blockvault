import React from 'react';
import { useState } from 'react';
import { useMoralisFile } from 'react-moralis';
import { useMoralis } from 'react-moralis';
import { FileUploader } from 'react-drag-drop-files';

const fileTypes = ['JPEG', 'PNG', 'GIF'];

const Upload = () => {
  const { Moralis } = useMoralis();

  
  const [file] = useState(null);
  
  var fileInput; 
  
  const handleChange = (files) => {
    console.log("handleChange");
      fileInput = files;
    }
      
  async function upload() {
    console.log(fileInput);
    const data = fileInput;
    const file = new Moralis.File(data.name, data);
    console.log(file);
    await file.saveIPFS({ useMasterKey: true });
    console.log(file.hash());
    console.log(file.ipfs());
  }

  return (
    <>
      <div className="grid w-screen h-screen place-items-center">
        <div>
          <form>
            <FileUploader
              label="Drag and drop your file here"
              multiple={false}
              name="files"
              types={fileTypes} 
              handleChange={handleChange}
            />
            {/* <p>
              {file ? `File name: ${file[0].name}` : 'No files uploaded yet'}
            </p> */}
            {/* Can decide on whether to show the file name or not / let users choose their own file name using the Box textfield at Line 54 */}
            
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
