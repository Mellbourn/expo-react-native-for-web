import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import { memo, useCallback, useMemo, useState } from "react";

export default function App() {
  const [state, setState] = useState(0);
  const [subComponentState, setSubComponentState] = useState(0);
  // necessary useMemo to avoid unnecessary rerenders, since options would otherwise be a new object every time
  const options = useMemo(() => ({ subComponentState }), [subComponentState]);

  const handleIncrementClick = () => {
    setState((prev) => prev + 1);
  };

  // this useCallback is necessary to avoid unnecessary rerenders
  const handleSubComponentClick = useCallback(() => {
    setSubComponentState(subComponentState + 1); // smarter implementation: (prev) => prev + 1
  }, [subComponentState]);

  console.log("Index rendered");

  return (
    <View style={styles.container}>
      <Text>Klas Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
      <Button
        onPress={handleIncrementClick}
        title="Increment state in main method"
      />
      <Text>{state}</Text>
      <Text>{subComponentState}</Text>
      <Suffix options={options} handleClick={handleSubComponentClick} />
      {/*
      <div>
        <h2>Prefix</h2>
        <Suffix options={options} handleClick={handleSubComponentClick} />
      </div> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

const Suffix = memo(function suffix({
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
