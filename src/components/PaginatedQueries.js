import axios from "axios";
import React, { useState } from "react";
import { useQuery } from "react-query";

const fethColors = (pageNumber) => {
  return axios.get(`http://localhost:4000/colors?_limit=2&_page=${pageNumber}`);
};

const PaginatedQueries = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const { data, isLoading, isError, error } = useQuery(
    ["colors", pageNumber],
    () => fethColors(pageNumber),
    {
      keepPreviousData: true,
    }
  );
  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <div className="container">
      <h2>PaginatedQueries</h2>
      {data?.data.map((el) => (
        <p key={el.id}>
          {el.id}. {el.label}
        </p>
      ))}
      <div
        style={{
          display: "flex",
          gap: "10px",
          marginTop:"20px"
        }}
      >
        <button
          onClick={() => setPageNumber((page) => page - 1)}
          disabled={pageNumber === 1}
          style={{
          border: "none",
          background: "#ff4154",
          color: "white",
          padding: "10px",
          cursor: "pointer",
        }}
        >
          prev
        </button>
        <button
          onClick={() => setPageNumber((page) => page + 1)}
          disabled={pageNumber === 4}
          style={{
          border: "none",
          background: "#ff4154",
          color: "white",
          padding: "10px",
          cursor: "pointer",
        }}
        >
          next
        </button>
      </div>
    </div>
  );
};

export default PaginatedQueries;
