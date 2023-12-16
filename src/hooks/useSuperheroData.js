import axios from "axios";
import { useQuery } from "react-query";

const fetchSuperHeroDetails = (heroId) => {
  return axios.get(`http://localhost:4000/superheroes/${heroId}`);
};

const useSuperheroData = (heroId) => {
  return useQuery(["super-hero", heroId], () => fetchSuperHeroDetails(heroId));
};

export { useSuperheroData };
