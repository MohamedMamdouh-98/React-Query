import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import HomePage from "./components/Home.page";
import RQSuperHeroesPage from "./components/RQSuperHeroes.page";
import SuperHeroesPage from "./components/SuperHeroes.page";
import { ReactQueryDevtools } from 'react-query/devtools'
import "./index.css";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/super-heroes">Traditional Super Heroes</Link>{" "}
          </li>
          <li>
            <Link to="/rq-super-heroes">RQ Super Heroes</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/rq-super-heroes" element={<RQSuperHeroesPage />} />
        <Route path="/super-heroes" element={<SuperHeroesPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
      <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
    </QueryClientProvider>
  );
};

export default App;
