import React from 'react';
import { useState } from 'react';
import { useMoralisFile } from 'react-moralis';
import { useMoralis } from 'react-moralis';
import { FileUploader } from 'react-drag-drop-files';
import { dete } from './data';
import { Link } from 'react-router-dom';
import { AiFillCloseCircle } from 'react-icons/ai';

const fileTypes = ['JPEG', 'PNG', 'GIF'];
var fileHashed = false;

var CryptoJS = require( 'crypto-js' );
export { fileHashed };
var imageKeyHash;
export { imageKeyHash };

const ImageKey = (props) => {
  const { Moralis } = useMoralis();

  
  const [file] = useState(null);
  
  var fileInput, hashFileInput; 
  
 
  
  const handleHashFileChange = (hashFile) => {
    console.log("handleHashFileChange");
      hashFileInput = hashFile;
    }
  
  function fileHashing() {
    
    console.log("fileHashing");
    let fileReader = new FileReader();
    fileReader.readAsDataURL(hashFileInput);
    
    fileReader.onload = function() {
      let output = fileReader.result
      
        
      while (output.charAt(0) !== ',') {
        output = output.substring(1);
      }
      
      output = output.substring(1);
      // console.log(hashFileInput.name);
      // console.log(output)
      
      imageKeyHash = (CryptoJS.SHA512(output)).toString();
      // console.log(hash)
    fileHashed = true;
      
      
    console.log(imageKeyHash);
    };

  
    
    
  }

  return (props.trigger) ? (
    <div className="fixed top-0 left-0 z-10 flex items-center justify-center w-full h-screen bg-black-rgba">
        <div className="relative w-full max-w-2xl p-8 bg-nord4">
          <AiFillCloseCircle className="absolute top-0 right-0 cursor-pointer" onClick={() => props.setTrigger(false)} />
          <form>
          <div>
          <FileUploader
              label="Submit file for Hashing"
              multiple={false}
              name="hashFile"
              handleChange={handleHashFileChange}
            />
          </div>
          
          <div>
          
          <Link exact to="/dashboard">
            <button type="button" id="upload_file_button" onClick={fileHashing} className="content-center w-1/2 p-2 m-2 mx-auto duration-300 rounded-md shadow-md bg-nord4 hover:shadow-xl">
            Hash File
            </button>
          </Link>
          </div>
          </form>

        </div>
      </div>
  ) : "";
};

export default ImageKey;
