import { Spacer } from "components/Spacer";
import { Text } from "components/Text";
import { Title } from "components/Title";
import { Container } from "components/Container";
import React, { useState, useContext } from "react";
import { GetServerSideProps, GetServerSidePropsContext } from "next";

interface IDetailsView {
  details: IDrink;
}

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${context.query.id}`;
  const config = {
    method: "get",
    headers: {
      Accept: "application/json",
    },
  };

  try {
    const details = await fetch(url, config)
      .then(async (res) => {
        try {
          const json: ISearch = await res.json();
          if (json === null || json.drinks.length === 0) {
            return {};
          } else {
            return json.drinks[0];
          }
        } catch (error) {
          throw "Error: Something went wrong. " + error;
        }
      })
      .catch((error) => {
        throw "Error: Something went wrong. " + error;
      });
    return {
      props: { details },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

const Details = (props: IDetailsView) => {
  return (
    <Container>
      <Title>Details</Title>
      <Spacer size="sm" />
      <Text>{props.details.strDrink}</Text>
    </Container>
  );
};

export default Details;
