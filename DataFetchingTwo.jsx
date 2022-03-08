import { useReducer, useEffect } from "react";
import axios from "axios";

export default function DataFetchingTwo() {
  const initialState = {
    loading: true,
    error: "",
    post: {}
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "FETCH_SUCCESS":
        return { loading: false, error: "", post: action.payload };
      case "FETCH_ERROR":
        return { loading: false, error: "Something Wrong!", post: {} };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    (async function () {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts/1"
        );
        const data = response.data;

        dispatch({ type: "FETCH_SUCCESS", payload: data });
      } catch (err) {
        dispatch({ type: "FETCH_ERROR" });
      }
    })();
  }, []);

  return (
    <div>
      {state.loading ? "Loading" : state.post.title}
      {state.error ? state.error : null}
    </div>
  );
}
