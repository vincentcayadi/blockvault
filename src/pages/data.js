import { fileHashed } from './upload';
import { imageKeyHash } from './imagekey';

var CryptoJS = require( 'crypto-js' );
var imageKey = imageKeyHash;
const dete = [];

if (fileHashed) {
    console.log((document.cookie).length);
    for (let i = 0; i < (document.cookie).length; i++) {
      let cookie = {
        image : '',
        name : '',
        format : '',
        size : '',
      };
    
      let x = document.cookie;
      console.log(x);
      let xa = x.split(";");
      
      let y = xa[i];
      
      while (y.charAt(0) !== '=') {
        y = y.substring(1);
      }
      y = y.substring(1);
    
      y = CryptoJS.AES.decrypt(y, imageKey).toString(CryptoJS.enc.Utf8);
    
      let ya = y.split(",");
    
      console.log(ya);
    
      cookie.image = ya[0];
      cookie.name = ya[1];
      cookie.format = ya[2];
      cookie.size = ya[3];
      
      console.log(cookie);
      dete.push(cookie);
    }

}
else {
    console.log("No file has been uploaded");
}


export { dete };

export default[
    {
        image: 'https://ipfs.moralis.io:2053/ipfs/QmRCd2cEUvLw3HnVUg3MHnNsJEGRN9r2MR3iT5S2nWC29R',
        name: "Cat",
        format: "JPEG",
        size: "2.4 MB",
    },
    {
        image: 'https://ipfs.moralis.io:2053/ipfs/QmRCd2cEUvLw3HnVUg3MHnNsJEGRN9r2MR3iT5S2nWC29R',
        name: "English Essay",
        format: "DOCX",
        size: "237KB",
    },
    {
        image: 'https://ipfs.moralis.io:2053/ipfs/QmRCd2cEUvLw3HnVUg3MHnNsJEGRN9r2MR3iT5S2nWC29R',
        name: "Python Turtle Game",
        format: "PY",
        size: "437 B",
    },
    {
        image: 'https://ipfs.moralis.io:2053/ipfs/QmRCd2cEUvLw3HnVUg3MHnNsJEGRN9r2MR3iT5S2nWC29R',
        name: "Math Assignment",
        format: "PDF",
        size: "338 KB",
    },
]