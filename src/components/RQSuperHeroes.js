import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
const fetchSuperHeroes = () => {
  return axios.get("http://localhost:4000/superheroes");
};
const RQSuperHeroes = () => {
  const { isLoading, data, isError, error, isFetching, refetch } = useQuery(
    "super-heroes",
    fetchSuperHeroes,
    {
      // cacheTime: 5000
      // staleTime: 30000
      // refetchOnMount: true
      // refetchOnWindowFocus: true
      // refetchInterval: 2000,
      // refetchIntervalInBackground: true
      enabled: false,
    }
  );
  console.log({ isLoading, isFetching });
  if (isLoading || isFetching) {
    return <h2>Loading...</h2>;
  }
  //error
  if (isError) {
    return <h2>{error.message}</h2>;
  }
  return (
    <>
      <h2>RQ Super Heroes</h2>
      <button style={{
        border:"none",
        background: "#ff4154",
        color:"white",
        padding:"10px",
        cursor:"pointer"
      }} onClick={refetch}>show data</button>
      {data?.data.map((el) => (
        <p key={el.id}>{el.name}</p>
      ))}
    </>
  );
};

export default RQSuperHeroes;
