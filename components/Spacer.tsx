import styled from "@emotion/styled";
import metrics, { Size } from "utils/metrics";

const getSize = (size: Size) => metrics.padding[size];

interface ISpacer {
  size?: Size;
}

export const Spacer = styled.div<ISpacer>`
  height: ${(props) => (props.size ? getSize(props.size) : metrics.padding.lg)};
  width: 100%;
`;
