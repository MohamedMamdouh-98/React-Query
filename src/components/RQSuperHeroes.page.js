import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

const RQSuperHeroesPage = () => {
  const { isLoading, data, isError, error, isFetching } = useQuery("super-heroes", () => {
    return axios.get("http://localhost:3009/superheroes");
  }, {staleTime: 3000});
  
  console.log({isLoading, isFetching})
  
  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if(isError){
  return <h2>{error.message}</h2>;
  }
  return (
    <>
      <h2>RQSuperHeroesPage</h2>
      {data?.data.map((hero) => {
        return <div key={hero.name}>{hero.name}</div>;
      })}
    </>
  );
};

export default RQSuperHeroesPage;
