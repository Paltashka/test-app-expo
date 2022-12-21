import { useNavigation } from "@react-navigation/native";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  Text,
  Animated,
  ScrollView,
} from "react-native";
import goBackIcon from "../assets/images/goBackIcon.png";
import ClosingIcon from "../assets/images/closing-arrow.png";
import OpeningIcon from "../assets/images/opening-arrow.png";
import { useState } from "react";

type dataType = {
  id: number;
  title: string;
  paragraph: string;
  nested: boolean;
};

const FAQScreen = () => {
  const [aboutData, setAboutData] = useState([
    {
      id: 1,
      title: "What is Ember Wallet?",
      paragraph:
        "Spookies is a ghost-themed NFT project that passed over to the OpenSea realm in July. At 8,888 strong, these adorable spirits have been haunting their way through the Ethereum blockchain.",
      nested: false,
    },
    {
      id: 2,
      title: "How does Ember Wallet work?",
      paragraph:
        "Spookies is a ghost-themed NFT project that passed over to the OpenSea realm in July. At 8,888 strong, these adorable spirits have been haunting their way through the Ethereum blockchain.",
      nested: false,
    },
  ]);

  const [rewardsData, setRewardsData] = useState([
    {
      id: 1,
      title: "How can I win a reward?",
      paragraph:
        "Spookies is a ghost-themed NFT project that passed over to the OpenSea realm in July. At 8,888 strong, these adorable spirits have been haunting their way through the Ethereum blockchain.",
      nested: false,
    },
    {
      id: 2,
      title: "Can I buy rewards?",
      paragraph:
        "Spookies is a ghost-themed NFT project that passed over to the OpenSea realm in July. At 8,888 strong, these adorable spirits have been haunting their way through the Ethereum blockchain.",
      nested: false,
    },
    {
      id: 3,
      title: "How can I redeem my reward?",
      paragraph:
        "Spookies is a ghost-themed NFT project that passed over to the OpenSea realm in July. At 8,888 strong, these adorable spirits have been haunting their way through the Ethereum blockchain.",
      nested: false,
    },
  ]);

  const [securityData, setSecurityData] = useState([
    {
      id: 1,
      title: "Does Ember Wallet store my information?",
      paragraph:
        "Spookies is a ghost-themed NFT project that passed over to the OpenSea realm in July. At 8,888 strong, these adorable spirits have been haunting their way through the Ethereum blockchain.",
      nested: false,
    },
    {
      id: 2,
      title: "How Ember Wallet provide security?",
      paragraph:
        "Spookies is a ghost-themed NFT project that passed over to the OpenSea realm in July. At 8,888 strong, these adorable spirits have been haunting their way through the Ethereum blockchain.",
      nested: false,
    },
  ]);

  const navigation = useNavigation();

  const getAnswerHandler = (id: number, setData: any, dataArr: dataType[]) => {
    const newAboutData = dataArr.map(data => {
      if (data.id === id) {
        data.nested = !data.nested;
      }

      return data;
    });
    setData(newAboutData);
  };

  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView>
        <View style={styles.header}>
          <View onTouchEnd={() => navigation.goBack()}>
            <Image source={goBackIcon} />
          </View>
          <View style={styles.title}>
            <Text style={styles.profilePasswordTitle}>FAQ</Text>
          </View>
        </View>
        <View style={styles.cardBlock}>
          <Text style={styles.titleOfCard}>About</Text>
          <View style={styles.card}>
            {aboutData.map(question => (
              <View
                style={
                  question.id === 2
                    ? [styles.option, styles.lastOption]
                    : styles.option
                }
                key={question.id}
                onTouchEnd={() =>
                  getAnswerHandler(question.id, setAboutData, aboutData)
                }
              >
                <View style={styles.titleOfOptionBlock}>
                  <Text
                    style={
                      question.nested
                        ? [styles.titleOfOption, styles.titleOfOptionActive]
                        : styles.titleOfOption
                    }
                  >
                    {question.title}
                  </Text>
                  <Image source={question.nested ? ClosingIcon : OpeningIcon} />
                </View>
                {question.nested && (
                  <View style={styles.paragraph}>
                    <Text>{question.paragraph}</Text>
                  </View>
                )}
              </View>
            ))}
          </View>
        </View>
        <View style={styles.secondCardBlock}>
          <Text style={styles.titleOfCard}>Rewards</Text>
          <View style={styles.card}>
            {rewardsData.map(question => (
              <View
                style={
                  question.id === 3
                    ? [styles.option, styles.lastOption]
                    : styles.option
                }
                key={question.id}
                onTouchEnd={() =>
                  getAnswerHandler(question.id, setRewardsData, rewardsData)
                }
              >
                <View style={styles.titleOfOptionBlock}>
                  <Text
                    style={
                      question.nested
                        ? [styles.titleOfOption, styles.titleOfOptionActive]
                        : styles.titleOfOption
                    }
                  >
                    {question.title}
                  </Text>
                  <Image source={question.nested ? ClosingIcon : OpeningIcon} />
                </View>
                {question.nested && (
                  <View style={styles.paragraph}>
                    <Text>{question.paragraph}</Text>
                  </View>
                )}
              </View>
            ))}
          </View>
        </View>
        <View style={styles.secondCardBlock}>
          <Text style={styles.titleOfCard}>Rewards</Text>
          <View style={styles.card}>
            {securityData.map(question => (
              <View
                style={
                  question.id === 2
                    ? [styles.option, styles.lastOption]
                    : styles.option
                }
                key={question.id}
                onTouchEnd={() =>
                  getAnswerHandler(question.id, setSecurityData, securityData)
                }
              >
                <View style={styles.titleOfOptionBlock}>
                  <Text
                    style={
                      question.nested
                        ? [styles.titleOfOption, styles.titleOfOptionActive]
                        : styles.titleOfOption
                    }
                  >
                    {question.title}
                  </Text>
                  <Image source={question.nested ? ClosingIcon : OpeningIcon} />
                </View>
                {question.nested && (
                  <View style={styles.paragraph}>
                    <Text>{question.paragraph}</Text>
                  </View>
                )}
              </View>
            ))}
          </View>
        </View>
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Couldn’t find an answer to your question?
          </Text>
          <Text
            style={styles.contactUsText}
            onPress={() => navigation.navigate("ContactUs")}
          >
            Contact Us
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    marginHorizontal: "5%",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "55%",
    marginTop: 40,
  },
  title: {
    display: "flex",
    flexDirection: "row",
  },
  profilePasswordTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#170A4B",
  },
  cardBlock: {
    marginTop: 50,
  },
  secondCardBlock: {
    marginTop: 24,
  },
  card: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
    display: "flex",
    alignItems: "center",
    marginTop: 8,
  },
  titleOfCard: {
    color: "#0B1A65",
    fontSize: 15,
    fontWeight: "500",
  },
  option: {
    padding: 16,
    borderColor: "#D9E0EC",
    borderBottomWidth: 1,
    width: "90%",
  },
  lastOption: {
    borderBottomWidth: 0,
  },
  titleOfOptionBlock: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  titleOfOption: {
    color: "#170A4B",
    fontSize: 16,
  },
  titleOfOptionActive: {
    fontWeight: "600",
  },
  paragraph: {
    color: "#170A4B",
    fontSize: 16,
    marginTop: 8,
  },
  footer: {
    width: "100%",
    marginTop: 24,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  footerText: {
    fontSize: 13,
    color: "#616691",
    fontWeight: "500",
  },
  contactUsText: {
    fontSize: 13,
    color: "#310CE3",
    fontWeight: "500",
    paddingLeft: 5,
  },
});

export default FAQScreen;
