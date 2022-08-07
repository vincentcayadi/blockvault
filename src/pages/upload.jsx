import React from 'react';
import { useState } from 'react';
import { useMoralisFile } from 'react-moralis';
import { useMoralis } from 'react-moralis';
import { FileUploader } from 'react-drag-drop-files';
import sha512 from 'crypto-js/sha512';

import { AiFillCloseCircle } from 'react-icons/ai';

const fileTypes = ['JPEG', 'PNG', 'GIF'];

// var sha512 = require('js-sha512');


const Upload = (props) => {
  const { Moralis } = useMoralis();

  
  const [file] = useState(null);
  
  var fileInput, hashFileInput; 
  
  function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  
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

    let y = document.cookie;
    let ya = y.split(";");
    
    let num = ya.length;
    
    let cookieName = "fileHash" + num;
    console.log(cookieName);
    setCookie(cookieName, file.ipfs(), 1);

    console.log("----------------------------------------------------");
    
    getData("fileHash1");
    
  }

  function getData(cname) {
      if (cname !== "fileHash1") {
        cname = "fileHash1";
        
      }
      console.log("getCookie");
      let x = document.cookie;
      let ca = x.split(';');
      for (let i = 0; i < ca.length; i++) {
        console.log(cname)
        let c = ca[i];

        while (c.charAt(0) === ' ') {
          c = c.substring(1);
        }
        if (c.indexOf(cname) == 0) {
          let url = c.substring(cname.length + 1, c.length);
          console.log("getCookie:" + url);
          window.open(url, '_blank');
        }
      
      }
  }
  
  const handleHashFileChange = (hashFile) => {
    console.log("handleHashFileChange");
      hashFileInput = hashFile;
    }
  
  function fileHashing () {
    console.log("fileHashing");
    let fileReader = new FileReader();
    fileReader.readAsDataURL(hashFileInput);
    
    fileReader.onload = function() {
      let output = fileReader.result
      
        
      while (output.charAt(0) !== ',') {
        output = output.substring(1);
      }
      
      output = output.substring(1);
      console.log(hashFileInput.name);
      console.log(output)
      
      var hash = (sha512(output)).toString();
      console.log(hash)
    };
  }

  return (props.trigger) ? (
    <div className="fixed top-0 left-0 w-full h-screen bg-nord5 flex justify-center items-center z-10">
        <div className="relative p-8 w-full max-w-2xl bg-nord4">
          <AiFillCloseCircle className="absolute top-0 right-0 cursor-pointer" onClick={() => props.setTrigger(false)} />
          <form>
            <FileUploader
              label="Drag and drop your file here"
              multiple={false}
              name="files"
              types={fileTypes} 
              handleChange={handleChange}
            />
            <div className="flex w-full">
              <button type="button" id="upload_file_button" onClick={upload} className="content-center w-1/2 p-2 m-2 mx-auto duration-300 rounded-md shadow-md bg-nord4 hover:shadow-xl">
                Upload
              </button>
              
            </div>
           
          <button type="button" onClick={getData} className="content-center w-1/2 p-2 m-2 mx-auto duration-300 rounded-md shadow-md bg-nord4 hover:shadow-xl">
            Output Data
          </button>
          <div>
          <FileUploader
              label="File for hashing"
              multiple={false}
              name="hashFile"
              types={fileTypes} 
              handleChange={handleHashFileChange}
            />
          </div>
          
          <div>
          <button type="button" id="upload_file_button" onClick={fileHashing} className="content-center w-1/2 p-2 m-2 mx-auto duration-300 rounded-md shadow-md bg-nord4 hover:shadow-xl">
            Hash File
          </button>
          </div>
          </form>

        </div>
      </div>
  ) : "";
};

export default Upload;
