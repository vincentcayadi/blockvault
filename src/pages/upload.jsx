import React from 'react';
import { useState, useMemo } from 'react';
import { useMoralisFile } from 'react-moralis';
import { useMoralis } from 'react-moralis';
import { FileUploader } from 'react-drag-drop-files';
import './upload.css';
import { useDropzone } from 'react-dropzone';

import { dete } from './data';
import { imageKeyHash } from './imagekey';
import { AiFillCloseCircle } from 'react-icons/ai';

const fileTypes = ['JPEG', 'PNG', 'GIF'];
var fileHashed = false;
// var sha512 = require('js-sha512');
var CryptoJS = require('crypto-js');
export { fileHashed };

const Upload = (props) => {
  var fileInput, hashFileInput;

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  const files = acceptedFiles.map((file) => (fileInput = file));

  const { Moralis } = useMoralis();

  const [file] = useState(null);

  function setCookie(cname, cvalue, cformat, csize, exdays, imageKeyHash) {
    const d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    let expires = 'expires=' + d.toUTCString();

    cvalue = cvalue + ',' + cformat + ',' + csize;

    var cookieKey = CryptoJS.RIPEMD160(imageKeyHash).toString();

    var encryptedCookie = CryptoJS.AES.encrypt(cvalue, cookieKey).toString();

    console.log(encryptedCookie);

    document.cookie = cname + '=' + encryptedCookie + ';' + expires + ';path=/';
    return cookieKey;
  }

  const handleChange = (files) => {
    console.log('handleChange');
    fileInput = files;
  };

  async function upload() {
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

    var cookieKey = setCookie(
      cookieName,
      file.ipfs(),
      data.type,
      csize,
      1,
      imageKeyHash
    );

    console.log('----------------------------------------------------');

    getData('fileHash1', cookieKey);
  }

  // function decryptCookie(encryptedCookie, cookieKey) {
  //   console.log("decryptCookie function called")
  //   var decryptedCookie = CryptoJS.AES.decrypt(encryptedCookie, cookieKey).toString(CryptoJS.enc.Utf8);
  //   return decryptedCookie;
  // }

  function getData(cname, cookieKey) {
    if (cname !== 'fileHash1') {
      cname = 'fileHash1';
    }

    console.log('getData function called');

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
      var decryptedCookie = CryptoJS.AES.decrypt(c, cookieKey).toString(
        CryptoJS.enc.Utf8
      );
      console.log(decryptedCookie);
      let n = 0;
      while (decryptedCookie.charAt(n) !== ',') {
        n = n + 1;
      }

      let cfileLink = decryptedCookie.substring(0, n);

      let m = n + 1;

      while (decryptedCookie.charAt(m) !== ',') {
        m = m + 1;
      }

      let cformat = decryptedCookie.substring(n + 1, m);

      let csize = decryptedCookie.substring(m + 1);

      console.log(cname + ':' + cfileLink + ',' + cformat + ',' + csize);
      console.log(dete);
      window.open(cfileLink, '_blank');

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
  
  return props.trigger ? (
    <div className="fixed top-0 left-0 z-10 flex items-center justify-center w-full h-screen bg-black-rgba">
      <div className="relative w-full max-w-2xl bg-nord6 rounded-md">
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

          <section className="flex flex-col items-center p-5 border-2 rounded-lg border-dashed border-nord3 text-nord1 bg-nord5 mb-8 mx-8">
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
              className="content-center w-1/2 p-2 mb-8 mx-auto duration-300 rounded-md shadow-md bg-nord4 hover:shadow-xl text-nord1"
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
