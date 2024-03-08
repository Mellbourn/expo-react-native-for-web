import { memo } from "react";
import { Button, Text } from "react-native";

export const Suffix = memo(function suffix({
  options: { subComponentState: num },
  handleClick,
}: {
  options: {
    subComponentState: number;
  };
  handleClick: () => void;
}) {
  console.log("Suffix rendered");
  return (
    <>
      <Button onPress={handleClick} title="SubComponent state" />
      <Text>Number: {num}</Text>
    </>
  );
});
