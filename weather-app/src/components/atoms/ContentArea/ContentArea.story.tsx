import { ContentArea } from "./ContentArea";

const definition = {
  title: "Atoms/ContentArea",
  component: ContentArea,
};

export default definition;

export const ContentAreaNormal = () => <ContentArea bgColor="some">Hello</ContentArea>;