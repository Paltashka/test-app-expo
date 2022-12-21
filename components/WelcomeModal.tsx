import React from "react";
import { Image, StyleSheet, Text, View, Modal } from "react-native";
import { Button } from "./Button/Button";
import LogoModal from "../assets/images/Vector.png";
import { useNavigation } from "@react-navigation/native";

const WelcomeModal = ({ goToNextStep }: any) => {
  const navigation = useNavigation();
  return (
    <Modal visible={true} transparent={true}>
      <View style={styles.backdrop}></View>
      <View style={styles.modalLogo}>
        <Image source={LogoModal} />
      </View>
      <View style={styles.modalContent}>
        <Text style={styles.modalTitle}>Welcome to Play Ember!</Text>
        <Text style={styles.modalText}>
          Get cool rewards for playing games, let's choose together what types
          of rewards you like and get you going!
        </Text>
        <Button
          text="Get Started  »"
          type="play"
          onClick={() => {
            navigation.navigate("BrandsYouLike", {
              next: goToNextStep,
            });
            goToNextStep();
          }}
        />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: "#000000",
    opacity: 0.64,
  },
  modalContent: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    height: 260,
    width: "90%",
    borderRadius: 24,
    position: "absolute",
    top: "30%",
    left: "5%",
  },
  modalTitle: {
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 22,
    lineHeight: 27,
    textAlign: "center",
    letterSpacing: -0.3,
    color: "#170A4B",
    marginTop: 24,
    marginBottom: 16,
  },
  modalText: {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    textAlign: "center",
    color: "#170A4B",
    marginTop: 16,
    marginBottom: 24,
    width: 250,
  },
  modalLogo: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    left: "40%",
    top: "25%",
    width: "20%",
    height: "10%",
    zIndex: 2,
    borderRadius: 16,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    backgroundColor: "white",
    padding: 10,
  },
});

export default WelcomeModal;
