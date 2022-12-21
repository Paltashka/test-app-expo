import { StyleSheet, SafeAreaView, Image, Text } from "react-native";
import goBackIcon from "../assets/images/goBackIcon.png";
import { useNavigation } from "@react-navigation/native";
import { View } from "../components/Themed";

const About = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.aboutScreen}>
      <View style={styles.header}>
        <View onTouchEnd={() => navigation.goBack()}>
          <Image source={goBackIcon} />
        </View>
        <View style={styles.title}>
          <Text style={styles.aboutPasswordTitle}>About</Text>
        </View>
      </View>
      <Text style={styles.aboutTitle}>
        Spookies is a ghost-themed NFT project that passed over to the OpenSea
        realm in July. At 8,888 strong, these adorable spirits have been
        haunting their way through the Ethereum blockchain.
      </Text>
    </SafeAreaView>
  );
};

export default About;
const styles = StyleSheet.create({
  aboutScreen: {
    backgroundColor: "white",
    height: "100%",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: "5%",
    paddingRight: "5%",
    width: "60%",
    marginTop: 40,
  },
  title: {
    display: "flex",
    flexDirection: "row",
  },
  aboutPasswordTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#170A4B",
  },
  aboutTitle: {
    color: "#170A4B",
    fontSize: 16,
    marginHorizontal: "5%",
    width: "90%",
    marginTop: 27,
  },
});
