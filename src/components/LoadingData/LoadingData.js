import { useState, useEffect, useCallback } from "react";
import axios from "axios";

function LoadingData(page ) {

  const [loading, setLoading] = useState(true);
  const [list, setList] = useState([]);

  const sendQuery = useCallback(async () => {
    try {
        setLoading(true);
        // setError(false);
      const res = await axios.get(
        `http://localhost:3000/Products.json?page=${page}`
        // `https://jsonplaceholder.typicode.com/photos?page=${page}&_limit=20`
      );
      
      setList((prev) => [
        ...new Set([...prev, ...res.data.map((d) => 
            <div>
                <h2>{d.name}</h2>
                <img alt='' src={d.images} />
            </div>
        )])
    ]);
    // console.log(res.data)
      setLoading(false);
    } catch (err) {
    //   setError(err);
    }
  }, [ page]);

  useEffect(() => {
    sendQuery(page);
  }, [ sendQuery, page]);

//   console.info(query,"qu")

  return { loading,list };
}

export default LoadingData;
