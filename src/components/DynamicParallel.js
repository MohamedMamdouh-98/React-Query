import React from "react";
import axios from "axios";
import { useQueries } from "react-query";

const fetchSuperHeroDetails = (heroId) => {
  return axios.get(`http://localhost:4000/superheroes/${heroId}`);
};

const DynamicParallel = ({ heroIds }) => {
  const queryResults = useQueries(
    heroIds.map((id) => {
      return {
        queryKey: ["super-hero", id],
        queryFn: () => fetchSuperHeroDetails(id),
      };
    })
  );
  console.log({queryResults})
  return <div className="container">DynamicParallel</div>;
};

export default DynamicParallel;
