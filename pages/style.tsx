import styled from "@emotion/styled";
import { Text } from "components/Text";
import colors from "utils/colors";
import metrics from "utils/metrics";

export const Background = styled.div`
  background-color: ${colors.primary.dark};
`;

export const LightText = styled(Text)`
  color: ${colors.primary.lighter};
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: ${metrics.padding.lg};
`;

export const Item = styled.div`
  position: relative;
  cursor: pointer;
`;
