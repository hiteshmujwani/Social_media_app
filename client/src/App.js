import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [data, setdata] = useState();
  const con = async () => {
    const res = await axios.get("/home");
    setdata(res.data);
  };
  useEffect(() => {
    con();
    // eslint-disable-next-line
  }, []);

  return <h1>{data}</h1>;
}

export default App;
