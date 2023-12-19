import axios from "axios";
import { useInfiniteQuery } from "react-query";

const fetchColor = ({ pageParam = 1 }) => {
  return axios.get(`http://localhost:4000/colors?_limit=2&_page=${pageParam}`);
};
const InfinitedPages = () => {
  const { data, isLoading, hasNextPage, fetchNextPage } = useInfiniteQuery(
    ["color"],
    fetchColor,
    {
      getNextPageParam: (_lastPage, pages) => {
        if (pages.length < 4) {
          return pages.length + 1;
        } else {
          return undefined;
        }
      },
    }
  );

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div className="container">
      <h2>Infinited Pages</h2>
      {data?.pages.map((el, i) => (
        <div key={i}>
          {el?.data.map((item) => (
            <p key={item.id}> {item.label} </p>
          ))}
        </div>
      ))}
      <button disabled={!hasNextPage} onClick={fetchNextPage}>
        lern more
      </button>
    </div>
  );
};

export default InfinitedPages;
