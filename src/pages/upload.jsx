import React from 'react';
import { useState } from 'react';
import { useMoralisFile } from 'react-moralis';
import { useMoralis } from 'react-moralis';
import { FileUploader } from 'react-drag-drop-files';


const fileTypes = ['JPEG', 'PNG', 'GIF'];

// var sha512 = require('js-sha512');
var CryptoJS = require( 'crypto-js' );

const Upload = () => {
  const { Moralis } = useMoralis();

  
  const [file] = useState(null);
  
  var fileInput, hashFileInput; 
  
  function setCookie(cname, cvalue, exdays, imageKeyHash) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();

    var cookieKey = CryptoJS.RIPEMD160(imageKeyHash).toString();  
    
    var encryptedCookie = CryptoJS.AES.encrypt(cvalue, cookieKey).toString();
    
    console.log(encryptedCookie)
    // var yeet = CryptoJS.AES.decrypt(encryptedCookie, cookieKey).toString(CryptoJS.enc.Utf8);
    // console.log(yeet);
    document.cookie = cname + "=" + encryptedCookie + ";" + expires + ";path=/";
    return cookieKey; 
  }
  
  const handleChange = (files) => {
    console.log("handleChange");
      fileInput = files;
    }
      
  async function upload() {
    // console.log(fileInput);
    const data = fileInput;
    const file = new Moralis.File(data.name, data);
    // console.log(file);
    await file.saveIPFS({ useMasterKey: true });
    // console.log(file.hash());
    console.log(file.ipfs());

    let y = document.cookie;
    let ya = y.split(";");
    
    let num = ya.length;
    
    let cookieName = "fileHash" + num;
    // console.log(cookieName);

    
    var cookieKey = setCookie(cookieName, file.ipfs(), 1, fileHashing());

    console.log("----------------------------------------------------");
    
    getData("fileHash1", cookieKey);
    
  }


  // function decryptCookie(encryptedCookie, cookieKey) {
  //   console.log("decryptCookie function called")
  //   var decryptedCookie = CryptoJS.AES.decrypt(encryptedCookie, cookieKey).toString(CryptoJS.enc.Utf8);
  //   return decryptedCookie;
  // }
  
  function getData(cname, cookieKey) {
      if (cname !== "fileHash1") {
        cname = "fileHash1";
      }

      console.log("getData function called");
      
      let x = document.cookie;
      let ca = x.split(';');

      console.log(ca);
      for (let i = 0; i < ca.length; i++) {
        
        let c = ca[i];

        while (c.charAt(0) !== '=') {
          c = c.substring(1);
        }
        c = c.substring(1);

        
        console.log(c);
        console.log(cookieKey);
        var decryptedCookie = CryptoJS.AES.decrypt(c, cookieKey).toString(CryptoJS.enc.Utf8);
        console.log(cname + ":" + decryptedCookie);
        window.open(decryptedCookie, '_blank');
        
        
        // while (c.charAt(0) === ' ') {
        //   c = c.substring(1);
        // }
        // if (c.indexOf(cname) == 0) {
        //   let url = c.substring(cname.length + 1, c.length);
        //   console.log("getCookie:" + url);
        //   window.open(url, '_blank');
        // }
      
      }
  }
  
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
      
      var imageKeyHash = (CryptoJS.SHA512(output)).toString();
      // console.log(hash)
      return imageKeyHash;
    };

  
    
    
  }

  return (
    <>
      <div className="grid content-center w-screen h-screen place-items-center">
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
          {/* <button type="button" id="upload_file_button" onClick={fileHashing} className="content-center w-1/2 p-2 m-2 mx-auto duration-300 rounded-md shadow-md bg-nord4 hover:shadow-xl">
            Hash File
          </button> */}
          </div>
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
