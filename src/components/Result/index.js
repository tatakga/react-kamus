import { Wrapper, Meaning, Content } from "./Result.styles";

const Result = ({ meanings, loading, error }) => {
  if (loading)
    return (
      <Wrapper>
        <Content>Loading .....</Content>
      </Wrapper>
    );
  if (error)
    return (
      <Wrapper>
        <Content>{error}</Content>
      </Wrapper>
    );
  return (
    <Wrapper>
      <Content>{meanings.lema ? meanings.arti.map((meaning, index) => <Meaning key={index}>{meaning}</Meaning>) : <h2>Cari kata</h2>}</Content>
    </Wrapper>
  );
};

export default Result;
