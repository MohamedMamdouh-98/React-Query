import axios from "axios";
import { useMutation, useQuery } from "react-query";
const fetchSuperHeroes = () => {
  return axios.get("http://localhost:4000/superheroes");
};

//Post Data || Add Super Hero
const addSuperHero = (hero) => {
  axios.post("http://localhost:4000/superheroes", hero);
};

const useSuperheroesData = (onSuccess, onError) => {
  return useQuery("super-heroes", fetchSuperHeroes, {
    // cacheTime: 5000
    // staleTime: 30000
    // refetchOnMount: true
    // refetchOnWindowFocus: true
    // refetchInterval: 2000,
    // refetchIntervalInBackground: true
    enabled: false,
    onSuccess,
    onError,
  });
};

const useAddSuperHero = () => {
  return useMutation(addSuperHero);
};

export { useSuperheroesData, useAddSuperHero };
