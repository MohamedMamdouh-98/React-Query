import axios from "axios";
import { useQuery } from "react-query";
const fetchSuperHeroes = () => {
  return axios.get("http://localhost:4000/superheroes");
};

const fetchFriends = () => {
  return axios.get("http://localhost:4000/friends");
};

const ParallelQueries = () => {
  const { data: SuperHeroesData, isFetching:loadingSuperHeroes } = useQuery("super-heroes", fetchSuperHeroes);
  const { data: friendsData, isFetching:loadingFriends } = useQuery("friends", fetchFriends);
  if (loadingSuperHeroes || loadingFriends) {
    return <h2>Loading...</h2>
  }
  return (
    <div className="container">
      {friendsData?.data.map((el) => (
        <p key={el.id}> {el.name} </p>
      ))}
    </div>
  );
};

export default ParallelQueries;
