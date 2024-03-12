import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import { useCallback, useMemo, useState } from "react";
import { Auth0Provider } from "@auth0/auth0-react";
import { Suffix } from "./Suffix";
import { customer } from "./src/constants";
import { LoginButton } from "./src/LoginButton";
import { domain, clientId } from "./src/auth_config.json";

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
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <View style={styles.container}>
        <LoginButton />
        <Text>Klas Open up App.tsx to start working on your app!</Text>
        <Text>Customer: {customer}</Text>
        <StatusBar style="auto" />
        <Button
          onPress={handleIncrementClick}
          title="Increment state in main method"
        />
        <Text>{state}</Text>
        <Text>{subComponentState}</Text>
        <Suffix options={options} handleClick={handleSubComponentClick} />
      </View>
    </Auth0Provider>
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
