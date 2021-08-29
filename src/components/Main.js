import useFetchMeanings from "../hooks/useFetchMeanings";
import Result from "./Result";
import SearchInput from "./SearchInput";

const Main = () => {
  const { state: meanings, loading, error, setSearchWord } = useFetchMeanings();

  return (
    <section style={{ width: "100%" }}>
      <SearchInput callback={setSearchWord} />
      <Result meanings={meanings} loading={loading} error={error} />
    </section>
  );
};

export default Main;
