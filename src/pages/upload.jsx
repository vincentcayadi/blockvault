import React from 'react';
import { useState, useMemo } from 'react';
import { useMoralisFile } from 'react-moralis';
import { useMoralis } from 'react-moralis';
import { FileUploader } from 'react-drag-drop-files';
import './upload.css';
import { useDropzone } from 'react-dropzone';
import { fileHashed } from './imagekey';
// import { dete } from './data';
import { imageKeyHash } from './imagekey';
import { AiFillCloseCircle } from 'react-icons/ai';

export const dete = [];

const fileTypes = ['JPEG', 'PNG', 'GIF'];


var CryptoJS = require('crypto-js');



const Upload = (props) => {
  var fileInput, hashFileInput;

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  const files = acceptedFiles.map((file) => (fileInput = file));

  const { Moralis } = useMoralis();

  const [file] = useState(null);

  
  function setCookie(cname, cvalue, cformat, csize, exdays, imageKeyHash, fileName) {
    console.log("-----------------setCookie-----------------");
    const d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    let expires = 'expires=' + d.toUTCString();

    cvalue = cvalue + ',' + fileName + ',' + cformat + ',' + csize + ',' + 'NotUpdated';

    var cookieKey = CryptoJS.RIPEMD160(imageKeyHash).toString();

    var encryptedCookie = CryptoJS.AES.encrypt(cvalue, cookieKey).toString();

    console.log(encryptedCookie);

    document.cookie = cname + '=' + encryptedCookie + ';' + expires + ';path=/';
    updateData(imageKeyHash);
    return cookieKey;
  }

  const handleChange = (files) => {
    console.log('handleChange');
    fileInput = files;
  };

  async function upload() {
    updateData(imageKeyHash);
    console.log("-----------------upload-----------------");
    console.log(fileInput);
    const data = fileInput;
    const file = new Moralis.File(data.name, data);
    // console.log(file);
    await file.saveIPFS({ useMasterKey: true });
    // console.log(file.hash());
    console.log(file.ipfs());

    let y = document.cookie;
    let ya = y.split(';');

    let num = ya.length;

    let cookieName = 'fileHash' + num;
    // console.log(cookieName);

    let csize;

    if (data.size >= 1000000000) {
      csize = (data.size / 1000000000).toFixed(2) + ' GB';
    } else if (data.size >= 1000000) {
      csize = (data.size / 1000000).toFixed(2) + ' MB';
    } else if (data.size >= 1000) {
      csize = (data.size / 1000).toFixed(2) + ' KB';
    } else {
      csize = data.size + ' B';
    }

    console.log("Cookie Name: " + cookieName);
    console.log("Cookie Link: " + file.ipfs());
    // console.log("Cookie type: " + data.type);``
    console.log("Cookie Size: " + csize);
    console.log("Cookie Hash: " + imageKeyHash);

    var cookieKey = setCookie(cookieName, file.ipfs(), data.type, csize, 1, imageKeyHash, data.name);

    

    getData(cookieName, cookieKey);
  }

  // function decryptCookie(encryptedCookie, cookieKey) {
  //   console.log("decryptCookie function called")
  //   var decryptedCookie = CryptoJS.AES.decrypt(encryptedCookie, cookieKey).toString(CryptoJS.enc.Utf8);
  //   return decryptedCookie;
  // }

  function getData(cname, cookieKey) {
    

    console.log("-----------------getData-----------------");

    let x = document.cookie;
    let ca = x.split(';');

    console.log(ca);
    console.log(cname);
    for (let i = 0; i < ca.length; i++) {
      // let c = ca[i];

      // while (c.charAt(0) !== '=') {
      //   c = c.substring(1);
      // }
      // c = c.substring(1);


      let c = ca[i];
      let e = 0;
      while (c.charAt(e) !== '=') {
        e++;
      }
      console.log(c.substring(1, e));
      
      if (c.substring(1, e) === cname ) {
        console.log('cookie found');
        console.log(c);
        console.log(cookieKey);
        
        let cD = c.substring(e + 1);
        console.log(cD);
        var decryptedCookie = CryptoJS.AES.decrypt(cD, cookieKey).toString(CryptoJS.enc.Utf8);
        
        console.log(decryptedCookie);
        
        
        // let n = 0;
        // while (decryptedCookie.charAt(n) !== ',') {                   // get file link
        //   n = n + 1;
        // }
        // let cfileLink = decryptedCookie.substring(0, n);

        
        // let m = n + 1;
        // while (decryptedCookie.charAt(m) !== ',') {                   // get file name
        //   m = m + 1;
        // }
        // let fileName = decryptedCookie.substring(n + 1, m);

        // let o = m + 1;
        // while (decryptedCookie.charAt(o) !== ',') {                   // get file format
        //   o = o + 1;
        // }
        // let cformat = decryptedCookie.substring(m + 1, o);


        let dCD = decryptedCookie.split(',');
        
        let cfileLink = dCD[0];
        let fileName = dCD[1];
        let cformat = dCD[2];
        let csize = dCD[3];
        let cstatus = dCD[4];
        
        
        
        console.log(cname + ':' + cfileLink + ',' + fileName + ',' + cformat + ',' + csize + ',' + cstatus);
        console.log(dete);
        window.open(cfileLink, '_blank');
      }
      
      else {
        console.log('cookie not found');
      }
    }
  }

  // const handleHashFileChange = (hashFile) => {
  //   console.log("handleHashFileChange");
  //     hashFileInput = hashFile;
  //   }

  // function fileHashing() {

  //   console.log("fileHashing");
  //   let fileReader = new FileReader();
  //   fileReader.readAsDataURL(hashFileInput);

  //   fileReader.onload = function() {
  //     let output = fileReader.result

  //     while (output.charAt(0) !== ',') {
  //       output = output.substring(1);
  //     }

  //     output = output.substring(1);
  //     // console.log(hashFileInput.name);
  //     // console.log(output)

  //     var imageKeyHash = (CryptoJS.SHA512(output)).toString();
  //     // console.log(hash)
  //     fileHashed = true;
  //     return imageKeyHash;

  //   };

  // }
  
  function updateData(imageKeyHash) {
    console.log("-----------------updateData-----------------");
    if (fileHashed) {
      
      let x = document.cookie;
      
      let xa = x.split(";");
      console.log(xa.length);
      
      for (let i = 0; i < xa.length; i++) {
        
        let c = xa[i];
        let e = 0;
        while (c.charAt(e) !== '=') {
          e++;
        }
        console.log(c.substring(0, e));
        
        if (c.substring(e + 1) !== imageKeyHash) {
          console.log("Not ImageKeyHash");
          let cookie = {
            image : '',
            name : '',
            format : '',
            size : '',
          };
        
          
          let y = xa[i];
          console.log(y);
          while (y.charAt(0) !== '=') {
            y = y.substring(1);
          }
          y = y.substring(1);
          let cookieKey = CryptoJS.RIPEMD160(imageKeyHash).toString();
          console.log(y);
          console.log(cookieKey);
          y = CryptoJS.AES.decrypt(y, cookieKey).toString(CryptoJS.enc.Utf8);
        
          let ya = y.split(",");
        
          console.log(ya);
          
          if (ya[4] === "NotUpdated") {
            cookie.image = ya[0];
            cookie.name = ya[1];
            cookie.format = ya[2];
            cookie.size = ya[3];
            
            console.log(cookie);
            dete.push(cookie);
            
            let updatedCookieData = ya[0] + ',' + ya[1] + ',' + ya[2] + ',' + ya[3] + ',' + 'Updated';
            updatedCookieData = CryptoJS.AES.encrypt(updatedCookieData, cookieKey).toString();
            console.log(updatedCookieData);
            const d = new Date();
            d.setTime(d.getTime() + 1 * 24 * 60 * 60 * 1000);
            let expires = 'expires=' + d.toUTCString();
            document.cookie = c.substring(0, e) + '=' + updatedCookieData + ";" + expires + ';path=/';
        }
      else {
        console.log("ImageKeyHash");
        }
      }
  
    }
  }
  else {
      console.log("No file has been uploaded");
    }
    
  }


  return props.trigger ? (
    <div className="fixed top-0 left-0 z-10 flex items-center justify-center w-full h-screen bg-black-rgba">
      <div className="relative w-full max-w-2xl rounded-md bg-nord6">
        <AiFillCloseCircle
          className="absolute top-0 right-0 w-6 h-6 m-4 cursor-pointer text-nord1"
          onClick={() => props.setTrigger(false)}
        />
        <h1 className="flex content-start self-start p-8 text-2xl font-bold text-nord1">
          Upload Files
        </h1>

        <form>
          {/* <div className="h-24 px-8 py-2 color-nord1">
            <FileUploader
              label="Drag and drop your file here"
              multiple={false}
              name="files"
              // types={fileTypes}
              handleChange={handleChange}
            />
          </div> */}

          <section className="flex flex-col items-center p-5 mx-8 mb-8 border-2 border-dashed rounded-lg border-nord3 text-nord1 bg-nord5">
            <div {...getRootProps({className:"dropzone"})}>
              <input {...getInputProps()} />
              <p className="p-20">Drag and drop some files here, or click to select files</p>
            </div>
          </section>

          <div className="flex w-full">
            <button
              type="button"
              id="upload_file_button"
              onClick={upload}
              className="content-center w-1/2 p-2 mx-auto mb-8 duration-300 rounded-md shadow-md bg-nord4 hover:shadow-xl text-nord1"
            >
              Upload
            </button>
          </div>

          {/* <button type="button" onClick={getData} className="content-center w-1/2 p-2 m-2 mx-auto duration-300 rounded-md shadow-md bg-nord4 hover:shadow-xl">
            Output Data
          </button>
          
          <div>
          <FileUploader
              label="File for hashing"
              multiple={false}
              name="hashFile"
              // types={fileTypes} 
              handleChange={handleHashFileChange}
            />
          </div> */}

          <div>
            {/* <button type="button" id="upload_file_button" onClick={fileHashing} className="content-center w-1/2 p-2 m-2 mx-auto duration-300 rounded-md shadow-md bg-nord4 hover:shadow-xl">
            Hash File
          </button> */}
          </div>
        </form>
      </div>
    </div>
  ) : (
    ''
  );
};

export default Upload;
