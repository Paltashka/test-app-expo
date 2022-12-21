import React from "react";
import { Image, StyleSheet, Text, View, Modal } from "react-native";
import { Button } from "../components/Button/Button";
import LogoModal from "../assets/images/Vector.png";
import { useNavigation } from "@react-navigation/native";
import bannerImg from "../assets/images/banner_logos.png";
import logoImg from "../assets/images/logo_white.png";

import {
  ImageBackground,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
} from "react-native";

import CloseIcon from "../assets/images/close.png";
import { ButtonRegistrtion } from "../components/Registration-button/ButtonRegistrtion";

const styles2 = StyleSheet.create({
  container: {
    backgroundColor: "#131781",
    width: "100%",
    height: 1200,
  },
  bannerStyle: {
    width: 430,
    height: 180,
    position: "relative",
  },
  logoStyle: {
    position: "absolute",
    bottom: -90,
    left: "40%",
  },
  title: {
    fontSize: 47,
    fontWeight: "bold",
  },
  bodyStyle: {
    marginHorizontal: 24,
    alignItems: "center",
  },
  continueStyle: {
    textAlign: "center",
    marginTop: 24,
    color: "#616691",
  },
  closeIcon: {
    position: "absolute",
    right: -10,
    top: -20,
  },
});

const WelcomeScreen = ({ route }: any) => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles2.container}>
      <View style={[styles2.bodyStyle, { marginTop: 80 }]}>
        <Image source={logoImg} style={styles2.logoStyle} />
      </View>

      <View style={styles2.bodyStyle}>
        <Text style={[styles2.title, { color: "white" }, { marginTop: 120 }]}>
          Play, reward,
        </Text>
        <Text style={[styles2.title, { color: "#67CBB5" }]}>repeat.</Text>
      </View>
      <View style={styles2.bodyStyle}>
        <ImageBackground
          source={bannerImg}
          style={[styles2.bannerStyle, { marginTop: 60 }]}
          resizeMode="cover"
        ></ImageBackground>
      </View>
      <View style={[styles2.bodyStyle, { marginTop: 32 }]}>
        <ButtonRegistrtion
          text="Continue with Apple"
          type="apple"
          logIn={() => console.log()}
        />
        <ButtonRegistrtion
          text="Continue with Google"
          type="google"
          logIn={() => console.log()}
        />

        <Button
          text="Start as a guest"
          type="play"
          onClick={() => {
            route.params.goToNextStep();
            navigation.navigate("TabHomeScreen", { next: () => {} });
          }}
        />
      </View>
      <Text
        style={styles2.continueStyle}
        onPress={() => navigation.navigate("Registration")}
      >
        Continue with Email
      </Text>
    </SafeAreaView>
  );
};

export default WelcomeScreen;
