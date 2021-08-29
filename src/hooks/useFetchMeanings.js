import { useEffect, useState } from "react";
import { getMeanings } from "../API";

const initialState = {
  lema: "",
  arti: [],
};

const useFetchMeanings = () => {
  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [searchWord, setSearchWord] = useState("");

  useEffect(() => {
    const fetchMeanings = async () => {
      if (!searchWord) {
        setState(initialState);
        setLoading(false);
        setError("");
        return;
      }
      setLoading(true);
      setError("");
      try {
        const datas = await getMeanings(searchWord);
        setState(datas);
        setLoading(false);
        setError("");
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchMeanings();
  }, [searchWord]);

  return { state, loading, error, setSearchWord };
};

export default useFetchMeanings;
