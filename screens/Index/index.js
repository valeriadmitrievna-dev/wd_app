import React from "react";
import IndexLayout from "./index.layout";

export default function Index({ navigation }) {
  const toSignUp = () => {
    navigation.navigate("SignUp");
  };
  const toSignIn = () => {
    navigation.navigate("SignIn");
  };
  return <IndexLayout toSignUp={toSignUp} toSignIn={toSignIn} />;
}
