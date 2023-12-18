import axios from "axios";
import { useQuery, useQueryClient } from "react-query";

const fetchSuperHeroDetails = (heroId) => {
  return axios.get(`http://localhost:4000/superheroes/${heroId}`);
};

const useSuperheroData = (heroId) => {
  const queryClient = useQueryClient();
  return useQuery(["super-hero", heroId], () => fetchSuperHeroDetails(heroId), {
    initialData: () => {
      const hero = queryClient
        .getQueryData("super-heros")
        ?.data?.data?.find((hero) => hero.id === parseInt(heroId));
      if (hero) {
        return { data: hero };
      } else {
        return undefined;
      }
    },
  });
};

export { useSuperheroData };
