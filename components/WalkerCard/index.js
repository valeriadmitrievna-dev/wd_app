import React from "react";
import WalkerCardLayout from "./index.layout";

export default function WalkerCard({ walker, margin, navigation }) {
  const showWalker = () => {
    navigation.navigate("Walker", walker);
  };
  return (
    <WalkerCardLayout walker={walker} margin={margin} showWalker={showWalker} />
  );
}
