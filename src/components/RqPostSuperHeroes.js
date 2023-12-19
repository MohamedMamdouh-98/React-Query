import React, { useState } from "react";
import {
  useAddSuperHero,
  useSuperheroesData,
} from "../hooks/useSuperheroesData";

const RqPostSuperHeroes = () => {
  const [name, setName] = useState("");
  const [alterEgo, setAlterEgo] = useState("");
  const { data, isLoading, refetch } = useSuperheroesData();
  const { mutate } = useAddSuperHero();
  const handleAddHero = () => {
    const hero = { name, alterEgo };
    mutate(hero);
  };

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="container">
      <h2>Post Super Heroes</h2>
      <div
        style={{
          display: "flex",
          gap: "20px",
        }}
      >
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ padding: "5px" }}
        />
        <input
          type="text"
          value={alterEgo}
          onChange={(e) => setAlterEgo(e.target.value)}
          style={{ padding: "5px" }}
        />
        <button onClick={handleAddHero}>Add Hero</button>
      </div>
      <div>
        <button onClick={refetch}>Fetch Super Hero</button>
        {data?.data.map((el) => (
          <p key={el.id}> {el.name} </p>
        ))}
      </div>
    </div>
  );
};

export default RqPostSuperHeroes;
