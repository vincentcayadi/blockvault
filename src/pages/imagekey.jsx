import React from 'react';
import { useState } from 'react';
import { useMoralisFile } from 'react-moralis';
import { useMoralis } from 'react-moralis';
import { FileUploader } from 'react-drag-drop-files';
import { dete } from './data';
import { Link } from 'react-router-dom';
import { AiFillCloseCircle } from 'react-icons/ai';
import { useDropzone } from 'react-dropzone';

const fileTypes = ['JPEG', 'PNG', 'GIF'];
var fileHashed = false;

var CryptoJS = require('crypto-js');
export { fileHashed };
var imageKeyHash;
export { imageKeyHash };

const ImageKey = (props) => {
  const { Moralis } = useMoralis();

  const [file] = useState(null);

  var fileInput, hashFileInput;

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  const files = acceptedFiles.map((file) => (hashFileInput = file));

  const handleHashFileChange = (hashFile) => {
    console.log('handleHashFileChange');
    hashFileInput = hashFile;
  };

  function fileHashing() {
    console.log('fileHashing');
    let fileReader = new FileReader();
    fileReader.readAsDataURL(hashFileInput);

    fileReader.onload = function () {
      let output = fileReader.result;

      while (output.charAt(0) !== ',') {
        output = output.substring(1);
      }

      output = output.substring(1);
      // console.log(hashFileInput.name);
      // console.log(output)

      imageKeyHash = CryptoJS.SHA512(output).toString();
      // console.log(hash)
      fileHashed = true;

      console.log(imageKeyHash);
    };
  }

  return props.trigger ? (
    <div className="fixed top-0 left-0 z-10 flex items-center justify-center w-full h-screen bg-black-rgba">
      <div className="relative w-full max-w-2xl bg-nord6 rounded-md">
        <AiFillCloseCircle
          className="absolute top-0 right-0 cursor-pointer w-6 h-6 m-4 text-nord1"
          onClick={() => props.setTrigger(false)}
        />
        <h1 className="flex content-start self-start p-8 text-2xl font-bold text-nord1">Hash File</h1>
        <form>
          {/* <div>
          <FileUploader
              label="Submit file for Hashing"
              multiple={false}
              name="hashFile"
              handleChange={handleHashFileChange}
            />
          </div> */}
          <section className="flex flex-col items-center p-5 border-2 rounded-lg border-dashed border-nord3 text-nord1 bg-nord5 mb-8 mx-8">
            <div {...getRootProps({ className: 'dropzone' })}>
              <input {...getInputProps()} />
              <p className="p-20">
                Drag and drop some files here, or click to select files
              </p>
            </div>
          </section>

          <div className="flex w-full">
            <Link exact to="/dashboard" className="flex w-full">
              <button
                type="button"
                id="upload_file_button"
                onClick={fileHashing}
                className="content-center w-1/2 p-2 mb-8 mx-auto duration-300 rounded-md shadow-md bg-nord4 hover:shadow-xl text-nord1"
              >
                Hash File
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  ) : (
    ''
  );
};

export default ImageKey;
