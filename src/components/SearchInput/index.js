import { useEffect, useRef, useState } from "react";
import { Content, Wrapper } from "./SearchInput.styles";

const SearchInput = ({ callback }) => {
  const [search, setSearch] = useState("");
  const initial = useRef(true);

  useEffect(() => {
    if (initial.current) {
      initial.current = false;
      return;
    }

    const timer = setTimeout(() => {
      callback(search);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [callback, search]);

  return (
    <Wrapper>
      <Content>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
      </Content>
    </Wrapper>
  );
};

export default SearchInput;
