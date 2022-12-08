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
