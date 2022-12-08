import styled from "@emotion/styled";
import metrics from "utils/metrics";

export const Button = styled.button`
  font-family: "Roboto";
  font-weight: bold;

  padding: ${metrics.padding.sm} ${metrics.padding.md};
  margin: 0;

  border-radius: ${metrics.padding.sm};
  border: 0;

  cursor: pointer;
`;
