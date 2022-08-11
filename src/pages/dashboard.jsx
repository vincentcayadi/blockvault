import React from 'react';
import { useState } from 'react';
import Footer from '../components/Footer';
import { FiClock, FiUpload, FiHome } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import logo from '../graphics/icontext/black-icontext.png';
import cat from '../images/cat-image.jpeg';
import essay from '../images/essay.png';
import mathass from '../images/mathass.png';
import ic from '../images/ic.png';
import report from '../images/report.png';
import monkeytype from '../images/monkeytype.png';
import elecbill from '../images/elecbill.png';
import bankreceipt from '../images/bankreceipt.png';
// import { imageKeyHash } from './imagekey';
import data from './data.js';
import { dete } from './upload.jsx';
import Upload from './upload.jsx';
import { fileHashed } from './imagekey';

export default function Dashboard() {
  const [buttonPopup, setButtonPopup] = useState(false);
  console.log(fileHashed);
  console.log(dete);

  // console.log(imageKeyHash);
  // create new data here by reading cookies
  // and then use the data to create the dashboard

  // const dete = [];

  // for (let i = 0; i < (document.cookie).length; i++) {
  //   let cookie = {
  //     image : '',
  //     name : '',
  //     format : '',
  //     size : '',
  //   };

  //   let x = document.cookie;
  //   let xa = x.split(";");

  //   let y = xa[i];
  //   let ya = y.split(",");

  //   console.log(ya);

  //   cookie.image = ya[0];
  //   cookie.name = ya[1];
  //   cookie.format = ya[2];
  //   cookie.size = ya[3];

  //   dete.push(cookie);
  // }

  const truncate = (input) =>
    input?.length > 25 ? `${input.substring(0, 22)}...` : input;

  return (
    <>
      <div className="w-full px-4 text-center bg-nord4">
        <div className="flex items-center px-8 py-3">
          <Link exact to="/" className="w-1/6">
            <img className="w-3/4" src={logo} alt="logo" />
          </Link>
          <form className="w-3/4">
            <div>
              <input
                className="w-3/4 px-4 leading-tight text-gray-700 duration-300 bg-gray-200 border rounded appearance-none mx-autoblock focus:outline-none focus:bg-white hover:border-nord1"
                id="grid-first-name"
                type="text"
                placeholder="Search"
              />
            </div>
          </form>
        </div>
      </div>

      <div className="flex h-screen text-center">
        <div className="w-1/5 bg-nord4">
          <div className="w-1/2 h-screen mx-auto my-8">
            <div className="px-2 py-4 bg-white border-white border-solid rounded-md drop-shadow-xl">
              <p className="pb-1 text-3xl font-bold">907</p>
              <p className="text-sm font-light">Files</p>
            </div>
            <div className="grid w-full grid-cols-2 gap-4 mt-12 text-center gird-rows-2 justify-items-center">
              <Link exact to="/dashboard">
                <div className="grid w-12 h-12 p-2 mx-auto duration-200 rounded-md shadow-lg bg-nord6 place-items-center hover:drop-shadow-xl">
                  <div>
                    <FiHome className="mx-auto" />
                  </div>
                </div>
                <p className="mt-2 text-center font-sm">Home</p>
              </Link>
              <Link exact to="/transactions">
                <div className="grid w-12 h-12 p-2 mx-auto duration-200 rounded-md shadow-lg bg-nord6 place-items-center hover:drop-shadow-xl">
                  <FiClock className="mx-auto" />
                </div>
                <p className="mt-2 text-center font-sm">History</p>
              </Link>

              {/* <Link exact to="/upload">
                <div className="grid w-12 h-12 p-2 mx-auto duration-200 rounded-md shadow-lg bg-nord6 place-items-center hover:drop-shadow-xl">
                  <div>
                    <FiUpload className="mx-auto" />
                  </div>
                </div>
                <p className="mt-2 text-center font-sm">Upload</p>
              </Link> */}
              <div>
                <div
                  className="grid w-12 h-12 p-2 mx-auto duration-200 rounded-md shadow-lg bg-nord6 place-items-center hover:drop-shadow-xl"
                  onClick={() => setButtonPopup(true)}
                >
                  <div>
                    <FiUpload className="mx-auto" />
                  </div>
                </div>
                <p className="mt-2 text-center font-sm">Upload</p>
                <Upload
                  trigger={buttonPopup}
                  setTrigger={setButtonPopup}
                ></Upload>
              </div>

              <Link exact to="Transactions">
                <div className="grid w-12 h-12 p-2 mx-auto duration-200 rounded-md shadow-lg bg-nord6 place-items-center hover:drop-shadow-xl">
                  <FiClock className="mx-auto" />
                </div>
                <p className="mt-2 text-center font-sm">History</p>
              </Link>
            </div>
          </div>
        </div>
        <div className="z-0 w-full h-full bg-nord5">
          <div className="my-4">
            <p className="mx-4 my-2 text-lg font-semibold text-left text-nord1 ">
              Folders
            </p>
            <div className="w-full flex items-center justify-center text-center h-40 text-2xl font-bold text-nord5 bg-nord3 rounded-md">
              Coming Soon
            </div>
            {/* <div className="grid grid-cols-4 drop-shadow-lg">
              <div className="w-auto mx-8 bg-white rounded-md h-36 color">
                <div className="w-6 h-6 bg-blue-300 rounded-full mt-7 ml-7"></div>
                <div className="w-full py-4 text-left px-7 text-nord1">
                  Documents
                </div>
                <div className="flex justify-between">
                  <div className="pb-4 text-sm px-7 text-nord1">17 files</div>
                  <div className="pb-4 text-sm px-7 text-nord1">12 GB</div>
                </div>
              </div>
              <div className="w-auto mx-8 bg-white rounded-md h-36 color">
                <div className="w-6 h-6 bg-green-300 rounded-full mt-7 ml-7"></div>
                <div className="w-full py-4 text-left px-7 text-nord1">
                  Images
                </div>
                <div className="flex justify-between">
                  <div className="pb-4 text-sm px-7 text-nord1">17 files</div>
                  <div className="pb-4 text-sm px-7 text-nord1">12 GB</div>
                </div>
              </div>
              <div className="w-auto mx-8 bg-white rounded-md h-36 color">
                <div className="w-6 h-6 bg-yellow-300 rounded-full mt-7 ml-7"></div>
                <div className="w-full py-4 text-left px-7 text-nord1">
                  Music
                </div>
                <div className="flex justify-between">
                  <div className="pb-4 text-sm px-7 text-nord1">17 files</div>
                  <div className="pb-4 text-sm px-7 text-nord1">12 GB</div>
                </div>
              </div>
              <div className="w-auto mx-8 bg-white rounded-md h-36 color">
                <div className="w-6 h-6 bg-red-300 rounded-full mt-7 ml-7"></div>
                <div className="w-full py-4 text-left px-7 text-nord1">
                  Videos
                </div>
                <div className="flex justify-between">
                  <div className="pb-4 text-sm px-7 text-nord1">17 files</div>
                  <div className="pb-4 text-sm px-7 text-nord1">12 GB</div>
                </div>
              </div>
            </div> */}
          </div>

          <p className="mx-4 my-2 text-lg font-semibold text-left text-nord1">
            Files
          </p>
          <div className="grid grid-flow-row grid-cols-4 grid-rows-3 drop-shadow-lg">
            {dete.map((dete) => {
              return (
                <a href={dete.image} target="_blank">
                  <div className="w-auto mx-8 bg-white rounded-md h-40 color">
                    <img
                      className="w-full border-2 rounded-md h-1/3 border-gray-00"
                      src={dete.image}
                    />
                    <div className="w-full py-4 text-left px-7 text-nord1">
                      {truncate(dete.name)}
                    </div>
                    <div className="flex justify-between">
                      <div className="pb-4 text-sm px-7 text-nord1">
                        {dete.format}
                      </div>
                      <div className="pb-4 text-sm px-7 text-nord1">
                        {dete.size}
                      </div>
                    </div>
                  </div>
                </a>
                
              );
            })}
            {/* <div className="w-auto mx-8 mb-8 bg-white rounded-md h-36">
              <img
                className="w-full border-2 rounded-md h-1/3 border-gray-00"
                src={cat}
              />
              <div className="w-full py-4 text-left px-7 text-nord1">Cat</div>
              <div className="flex justify-between">
                <div className="pb-4 text-sm px-7 text-nord1">JPEG</div>
                <div className="pb-4 text-sm px-7 text-nord1">2.4 MB</div>
              </div>
            </div> */}
            {/* <div className="w-auto mx-8 mb-8 bg-white rounded-md h-36">
              <img
                className="w-full border-2 border-gray-500 rounded-md h-1/3"
                src={essay}
              />
              <div className="w-full py-4 text-left px-7 text-nord1">
                English Essay
              </div>
              <div className="flex justify-between">
                <div className="pb-4 text-sm px-7 text-nord1">DOCX</div>
                <div className="pb-4 text-sm px-7 text-nord1">237 KB</div>
              </div>
            </div>
            <div className="w-auto mx-8 mb-8 bg-white rounded-md h-36">
              <div className="w-full pt-2 text-center border-2 border-gray-500 rounded-md h-1/3 text-nord1 bg-nord5">
                game.py
              </div>
              <div className="w-full py-4 text-left px-7 text-nord1">
                Python Turtle Game
              </div>
              <div className="flex justify-between">
                <div className="pb-4 text-sm px-7 text-nord1">PY</div>
                <div className="pb-4 text-sm px-7 text-nord1">437 B</div>
              </div>
            </div>
            <div className="w-auto mx-8 mb-8 bg-white rounded-md h-36">
              <img
                className="w-full border-2 border-gray-500 rounded-md h-1/3"
                src={mathass}
              />
              <div className="w-full py-4 text-left px-7 text-nord1">
                Math Assignment
              </div>
              <div className="flex justify-between">
                <div className="pb-4 text-sm px-7 text-nord1">PDF</div>
                <div className="pb-4 text-sm px-7 text-nord1">338 KB</div>
              </div>
            </div>
            <div className="w-auto mx-8 mb-8 bg-white rounded-md h-36">
              <img
                className="w-full border-2 border-gray-500 rounded-md h-1/3"
                src={ic}
              />
              <div className="w-full py-4 text-left px-7 text-nord1">
                Passport
              </div>
              <div className="flex justify-between">
                <div className="pb-4 text-sm px-7 text-nord1">JPEG</div>
                <div className="pb-4 text-sm px-7 text-nord1">208 KB</div>
              </div>
            </div>
            <div className="w-auto mx-8 mb-8 bg-white rounded-md h-36">
              <div className="w-full pt-2 text-center border-2 border-gray-500 rounded-md h-1/3 text-nord1 bg-nord5">
                ethansinging.mp3
              </div>
              <div className="w-full py-4 text-left px-7 text-nord1">
                Ethan Singing
              </div>
              <div className="flex justify-between">
                <div className="pb-4 text-sm px-7 text-nord1">MP3</div>
                <div className="pb-4 text-sm px-7 text-nord1">5.03 MB</div>
              </div>
            </div>
            <div className="w-auto mx-8 mb-8 bg-white rounded-md h-36">
              <img
                className="w-full border-2 border-gray-500 rounded-md h-1/3"
                src={report}
              />
              <div className="w-full py-4 text-left px-7 text-nord1">
                Year End Report
              </div>
              <div className="flex justify-between">
                <div className="pb-4 text-sm px-7 text-nord1">PDF</div>
                <div className="pb-4 text-sm px-7 text-nord1">86 KB</div>
              </div>
            </div>
            <div className="w-auto mx-8 mb-8 bg-white rounded-md h-36">
              <img
                className="w-full border-2 border-gray-500 rounded-md h-1/3"
                src={monkeytype}
              />
              <div className="w-full py-4 text-left px-7 text-nord1">
                MonkeyType Highscore
              </div>
              <div className="flex justify-between">
                <div className="pb-4 text-sm px-7 text-nord1">PNG</div>
                <div className="pb-4 text-sm px-7 text-nord1">202 KB</div>
              </div>
            </div>
            <div className="w-auto mx-8 mb-8 bg-white rounded-md h-36">
              <div className="w-full pt-2 text-center border-2 border-gray-500 rounded-md h-1/3 text-nord1 bg-nord5">
                passwords.csv
              </div>
              <div className="w-full py-4 text-left px-7 text-nord1">
                Passwords
              </div>
              <div className="flex justify-between">
                <div className="pb-4 text-sm px-7 text-nord1">CSV</div>
                <div className="pb-4 text-sm px-7 text-nord1">7.09 KB</div>
              </div>
            </div>
            <div className="w-auto mx-8 mb-8 bg-white rounded-md h-36">
              <div className="w-full pt-2 text-center border-2 border-gray-500 rounded-md h-1/3 text-nord1 bg-nord5">
                verificationcodes.txt
              </div>
              <div className="w-full py-4 text-left px-7 text-nord1">
                Verification Codes
              </div>
              <div className="flex justify-between">
                <div className="pb-4 text-sm px-7 text-nord1">TXT</div>
                <div className="pb-4 text-sm px-7 text-nord1">34 B</div>
              </div>
            </div>
            <div className="w-auto mx-8 mb-8 bg-white rounded-md h-36">
              <img
                className="w-full border-2 border-gray-500 rounded-md h-1/3"
                src={elecbill}
              />
              <div className="w-full py-4 text-left px-7 text-nord1">
                Electricity Bill JUNE
              </div>
              <div className="flex justify-between">
                <div className="pb-4 text-sm px-7 text-nord1">PDF</div>
                <div className="pb-4 text-sm px-7 text-nord1">22 KB</div>
              </div>
            </div>
            <div className="w-auto mx-8 mb-8 bg-white rounded-md h-36">
              <img
                className="w-full border-2 border-gray-500 rounded-md h-1/3"
                src={bankreceipt}
              />
              <div className="w-full py-4 text-left px-7 text-nord1">
                Bank Receipt
              </div>
              <div className="flex justify-between">
                <div className="pb-4 text-sm px-7 text-nord1">PDF</div>
                <div className="pb-4 text-sm px-7 text-nord1">40 KB</div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
