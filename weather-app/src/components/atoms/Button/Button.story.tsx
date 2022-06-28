import { Button } from "./Button";

const definition = {
  title: "Atoms/Button",
  component: Button,
};

export default definition;


export const NormalButton = () => {
    return (
        <Button text="Search" />
    )
}