import axios from "axios";
import React from "react";
import { useQuery } from "react-query";

const fetchUserByEmail = (email) => {
  return axios.get(`http://localhost:4000/users/${email}`);
};

const fetchCoursesByChannelsId = (channelsId) => {
  return axios.get(`http://localhost:4000/channels/${channelsId}`);
};

const DependentQueries = ({ email }) => {
  const { data: user } = useQuery(["user", email], () =>
    fetchUserByEmail(email)
  );
  const channelsId = user?.data.channelsId;
  const { data: courses, refetch } = useQuery(
    ["courses", channelsId],
    () => fetchCoursesByChannelsId(channelsId),
    {
      enabled: !!channelsId,
    }
  );
  return (
    <div className="container">
      <h2>DependentQueries</h2>
      <button
        style={{
          border: "none",
          background: "#ff4154",
          color: "white",
          padding: "10px",
          cursor: "pointer",
        }}
        onClick={refetch}
      >
        show courses
      </button>
      {courses?.data.map((el) => (
        <p key={el}>{el}</p>
      ))}
    </div>
  );
};

export default DependentQueries;
