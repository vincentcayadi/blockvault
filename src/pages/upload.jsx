import React from 'react';
import Navbar from '../components/Navbar';
import { useState } from 'react';
import { useMoralisFile } from 'react-moralis';
import { TextField } from '@mui/material';
import Box from '@mui/material/Box';


const Upload = () => {
  
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const fileName = data.get('fileName');
    console.log({
      "fileName": fileName
    });
    
    saveFile(fileName, fileTarget, {
      type: "text/plain", onSuccess: (result) => console.log(result), 
      onError: (error) => console.log(error)
    });
    
  };

  
  const inputFile = (e) => setFileTarget(e.target.files[0]);
  
  const [fileTarget, setFileTarget] = useState("");
  const { saveFile } = useMoralisFile();
  
  
  return (
    <>
      <Navbar />
      <body className="container">
        <div>Hello</div>
        <div>Wassa</div>
        <div>cock kim balls</div>
        <input type="file" onChange={inputFile} />
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="fileName"
              label="File Name"
              name="fileName"
              autoFocus
            />
        </Box>
      </body>
    </>
  );
}
export default Upload;

