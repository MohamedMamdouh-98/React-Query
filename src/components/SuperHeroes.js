import axios from "axios";
import React, { useEffect, useState } from "react";

const SuperHeroes = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:4000/superheroes")
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  }, []);
  if (isLoading) {
    return <h2>Loading....</h2>;
  }
  if (error) {
    return <h2>{error}</h2>
  }
  return (
    <>
      <h2>Super Heroes</h2>
      {data.map((el) => (
        <p key={el.id}>{el.name}</p>
      ))}
    </>
  );
};

export default SuperHeroes;
