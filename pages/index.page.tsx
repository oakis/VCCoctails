import { Input } from "components/Input";
import { Spacer } from "components/Spacer";
import { Text } from "components/Text";
import { Title } from "components/Title";
import { useRouter } from "next/router";
import React, { useState, useContext } from "react";
import { Container } from "components/Container";
import { SearchContext } from "contexts/SearchContext";
import { Button } from "components/Button";
import { Background, Column, Grid, Item, LightText, Row } from "./style";
import { HSpacer } from "components/HSpacer";
import { Image } from "components/Image";

interface IHomeView {}

const Home = (props: IHomeView) => {
  const [search, setSearch] = useState("");

  const router = useRouter();

  const { results, searchCocktail } = useContext(SearchContext);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onSearch();
    }
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
              <Title>VCCocktails</Title>
              <Spacer size="sm" />
              <LightText>Search for cocktails.</LightText>
            </Column>
            <HSpacer size="lg" />
            <Column>
              <Row>
                <Input onChange={onChange} onKeyDown={onKeyDown} />
                <HSpacer size="sm" />
                <Button onClick={onSearch}>Sök</Button>
              </Row>
            </Column>
          </Row>
        </Container>
      </Background>
      <Container>
        <Grid>
          {results.map((result) => (
            <Item
              key={result.idDrink}
              onClick={() => navigateToDetails(result.idDrink)}
            >
              {result.strDrinkThumb && (
                <Image
                  src={result.strDrinkThumb}
                  alt={result.strDrinkAlternate ?? ""}
                />
              )}
              <Text>{result.strDrink}</Text>
            </Item>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Home;
