import axios from "axios";
import React from "react";
import { useQuery } from "react-query";

const RQSuperHeroes = () => {
  const { isLoading, data, isError, error } = useQuery("super-heroes", () => {
    return axios.get("http://localhost:4000/superheroes");
  });
  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  //error
  if (isError) {
    return <h2>{error.message}</h2>;
  }
  return (
    <>
      <h2>RQ Super Heroes</h2>
      {data?.data.map((el) => (
        <p key={el.id}>{el.name}</p>
      ))}
    </>
  );
};

export default RQSuperHeroes;
