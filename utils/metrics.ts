export type Size = "sm" | "md" | "lg" | string;

interface IMetrics {
  padding: IPadding;
}

interface IPadding {
  [key: Size]: string;
}

const metrics: IMetrics = {
  padding: {
    sm: "8px",
    md: "16px",
    lg: "32px",
  },
};

export default metrics;
