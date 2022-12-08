import { Input } from "components/Input";
import { Spacer } from "components/Spacer";
import { Text } from "components/Text";
import { Title } from "components/Title";
import { useRouter } from "next/router";
import React, { useState, useContext } from "react";
import { Container } from "components/Container";
import { SearchContext } from "contexts/SearchContext";
import { Button } from "components/Button";
import { Background, Column, LightText, Row } from "./style";
import { HSpacer } from "components/HSpacer";

interface IHomeView {}

const Home = (props: IHomeView) => {
  const [search, setSearch] = useState("");

  const router = useRouter();

  const { results, searchCocktail } = useContext(SearchContext);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const onSearch = () => {
    searchCocktail(search);
  };

  const navigateToDetails = (id: string) => {
    router.push(`/details/${id}`);
  };

  return (
    <>
      <Background>
        <Container>
          <Row>
            <Column>
              <Title>VCCoctails</Title>
              <Spacer size="sm" />
              <LightText>Search for cocktails.</LightText>
            </Column>
            <HSpacer size="lg" />
            <Column>
              <Row>
                <Input onChange={onChange} />
                <HSpacer size="sm" />
                <Button onClick={onSearch}>Sök</Button>
              </Row>
            </Column>
          </Row>
        </Container>
      </Background>
      <Container>
        {results.map((results) => (
          <Text
            key={results.idDrink}
            onClick={() => navigateToDetails(results.idDrink)}
          >
            {results.strDrink}
          </Text>
        ))}
      </Container>
    </>
  );
};

export default Home;
