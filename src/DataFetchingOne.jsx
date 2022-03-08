import axios from "axios";
import { useEffect, useState } from "react";

function DataFetchingOne() {
  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState({});
  const [error, setError] = useState("");

  useEffect(() => {
    (async function () {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts/1"
        );

        const data = response.data;
        setLoading(false);
        setPost(data);
      } catch (err) {
        setLoading(false);
        setPost({});
        setError("something went wrong!");
      }
    })();
  }, []);

  return (
    <div>
      {loading ? "loading" : post.title}
      {error ? error : null}
    </div>
  );
}

export default DataFetchingOne;
