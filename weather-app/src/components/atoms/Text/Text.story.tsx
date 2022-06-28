import { Text } from "./Text";

const definition = {
  title: "Atoms/Text",
  component: Text,
};

export default definition;

export const TextSmall = () => <Text value="Hello" size="small" />;

export const TextMedium = () => <Text value="Hello" size="medium" />;

export const TextLarge = () => <Text value="Hello" size="large" />;