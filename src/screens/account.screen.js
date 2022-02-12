import React from "react";

import {
  AccountBackground,
  AccountContainer,
  AccountCover,
  AuthButton,
  Title,
} from "../styles/account.styles";
import { Spacer } from "../components/spacer.component";

export const AccountScreen = ({ navigation }) => {
  return (
    <AccountBackground>
      <AccountCover />
      <Title>Food Findr</Title>
      <AccountContainer>
        <AuthButton
          icon="lock-open"
          mode="contained"
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          Login
        </AuthButton>
        <Spacer size="large" />
        <AuthButton
          icon="email"
          mode="contained"
          onPress={() => {
            navigation.navigate("Register");
          }}
        >
          Register
        </AuthButton>
      </AccountContainer>
    </AccountBackground>
  );
};
