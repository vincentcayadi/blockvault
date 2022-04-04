import React, { useState, useEffect } from "react";


function loader() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 8000); // Use fetch to get data from API or render the website https://www.youtube.com/watch?v=SR8755C0bME
  }, []);
}

export default loader;
