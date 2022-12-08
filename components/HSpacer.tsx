import styled from "@emotion/styled";
import metrics, { Size } from "utils/metrics";

const getSize = (size: Size) => metrics.padding[size];

interface ISpacer {
  size?: Size;
}

export const HSpacer = styled.div<ISpacer>`
  width: ${(props) => (props.size ? getSize(props.size) : metrics.padding.lg)};
  height: 100%;
`;
