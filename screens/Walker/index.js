import React from "react";
import WalkerLayout from "./index.layout";

export default function Walker({ route, navigation }) {
  const closeWalker = () => {
    navigation.goBack();
  };
  return <WalkerLayout walker={route.params} closeWalker={closeWalker} />;
}
