import React from "react";
import { useParams } from "react-router-dom";
import { useSuperheroData } from "../hooks/useSuperheroData";

const RqSuperhero = () => {
  const { heroId } = useParams();
  const { data, isLoading, isError, error } = useSuperheroData(heroId);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <div className="container">
      <h2>Hero Details</h2>
      <p>
        {data?.data.name} -- {data?.data.alterEgo}{" "}
      </p>
    </div>
  );
};

export default RqSuperhero;
