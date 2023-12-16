import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./components/Home";
import SuperHeroes from "./components/SuperHeroes";
import RQSuperHeroes from "./components/RQSuperHeroes";
//Devtools React Query
import { ReactQueryDevtools } from 'react-query/devtools'
import RqSuperhero from "./components/RqSuperhero";
import ParallelQueries from "./components/ParallelQueries";
import DynamicParallel from "./components/DynamicParallel";

const App = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/super-heroes">Traditional Super Heroes</Link>
          </li>
          <li>
            <Link to="/rq-super-heroes">RQ Super Heroes</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rq-super-heroes" element={<RQSuperHeroes />} />
        <Route path="/super-heroes" element={<SuperHeroes />} />
        <Route path="/rq-super-hero/:heroId" element={<RqSuperhero/>}/>
        <Route path="/rq-parall" element={<ParallelQueries/>}/>
        <Route path="/rq-dynamic-parallel" element={<DynamicParallel heroIds={[1,3]}/>}/>
        <Route path="*" element={<Home />} />
      </Routes>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right"/>
    </>
  );
};

export default App;
