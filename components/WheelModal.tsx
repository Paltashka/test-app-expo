import React from "react";
import { Image, StyleSheet, Text, View, Modal } from "react-native";
import { Button } from "./Button/Button";
import Gift from "../assets/images/gift.png";
import spinnigwheel from "../assets/images/spinningwheel.png";

const WheelModal = ({ goToNextStep }: any) => {
  return (
    <Modal visible={true} transparent={true}>
      <View style={styles.backdrop}></View>
      <View style={styles.modalLogo}>
        <Image source={Gift} />
      </View>
      <View style={styles.modalContent}>
        <Text style={styles.modalTitle}>
          Turn the wheel, get your first reward
        </Text>
        <Text style={styles.modalText}>for free!</Text>
        <Image source={spinnigwheel} />
        <View style={styles.modalButton}>
          <Button
            text="Spin the Fortune Wheel  »"
            type="play"
            onClick={() => goToNextStep()}
          />
        </View>
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
    height: 540,
    width: "90%",
    borderRadius: 24,
    position: "absolute",
    top: "20%",
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
    width: 200,
  },
  modalText: {
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 22,
    textAlign: "center",
    color: "#310CE3",
    marginBottom: 10,
  },
  modalLogo: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    left: "40%",
    top: "15%",
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
  modalButton: {
    marginTop: 25,
  },
});

export default WheelModal;
