import React from "react";
import { Image, StyleSheet, Text, View, Modal } from "react-native";
import { Button } from "./Button/Button";
import Gift from "../assets/images/gift.png";
import FortuneWheel from "../assets/images/Congratulations.png";

const CongratulationsModal = ({ goToNextStep }: any) => {
  return (
    <Modal visible={true} transparent={true}>
      <View style={styles.backdrop}></View>
      <View style={styles.modalLogo}>
        <Image source={Gift} />
      </View>
      <View style={styles.modalContent}>
        <Text style={styles.modalTitle}>Congratulations!</Text>
        <Text style={styles.modalText}>
          You won{" "}
          <View style={styles.specialText}>
            <Text style={styles.boldText}>Sticker </Text>
            <Text style={styles.smallText}>215</Text>
          </View>{" "}
          ! You can find it in <Text style={styles.boldText}>Settings</Text>{" "}
          section.
        </Text>
        <Image source={FortuneWheel} style={styles.modalImage} />
        <Text style={styles.subtext}>
          Spookies is a ghost-themed NFT project that passed over to the OpenSea
          realm in July.
        </Text>
        <Button
          text="Start Using PlayEmber  »"
          type="play"
          onClick={() => goToNextStep()}
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
    fontWeight: "400",
    fontSize: 16,
    textAlign: "center",
    marginTop: 16,
    width: 260,
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
  specialText: {
    display: "flex",
    flexDirection: "row",
    height: 15,
  },
  boldText: {
    fontWeight: "bold",
  },
  smallText: {
    fontSize: 8,
    fontWeight: "400",
  },
  modalImage: {
    marginTop: -25,
  },
  subtext: {
    color: "#616691",
    fontSize: 13,
    width: "90%",
    textAlign: "center",
    marginBottom: 24,
  },
});

export default CongratulationsModal;
