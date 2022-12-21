import {
  StyleSheet,
  SafeAreaView,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import goBackIcon from "../assets/images/goBackIcon.png";
import { useNavigation } from "@react-navigation/native";
import { View } from "../components/Themed";
import { useState } from "react";
import ApprovedIcon from "../assets/images/approved.png";
import { Button } from "../components/Button/Button";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [isMessageSent, setIsMessageSent] = useState(false);
  const navigation = useNavigation();

  const sendMessageHandler = () => {
    if (
      name.trim().length > 0 &&
      surname.trim().length > 0 &&
      email.match("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$") &&
      message.trim().length > 0
    ) {
      setIsMessageSent(true);
    }
  };
  return (
    <SafeAreaView style={styles.contactScreen}>
      <View style={styles.header}>
        <View onTouchEnd={() => navigation.goBack()}>
          <Image source={goBackIcon} />
        </View>
        <View style={styles.title}>
          <Text style={styles.contactPasswordTitle}>Contact Us</Text>
        </View>
      </View>

      <View style={styles.contactPasswordBlock}>
        <Text style={styles.contactTitle}>
          We’d love to hear your any feedback. We usually reply in 2 weekdays.
        </Text>
        {!isMessageSent && (
          <>
            <View>
              <Text style={styles.titleInput}>Name</Text>
              <TextInput
                placeholder="Type"
                style={styles.inputs}
                onChangeText={text => setName(text)}
              />
            </View>
            <View>
              <Text style={styles.titleInput}>Surname</Text>
              <TextInput
                placeholder="Type"
                style={styles.inputs}
                onChangeText={text => setSurname(text)}
              />
            </View>
            <View>
              <Text style={styles.titleInput}>Email Address</Text>
              <TextInput
                placeholder="altay.suna@playember.com"
                style={[styles.secondaryInputs, styles.inputs]}
                autoCapitalize="none"
                onChangeText={text => setEmail(text)}
              />
            </View>
            <View>
              <Text style={styles.titleInput}>Your Message</Text>
              <TextInput
                placeholder="Type"
                style={[styles.messageInputs, styles.inputs]}
                onChangeText={text => setMessage(text)}
                multiline={true}
                numberOfLines={4}
              />
            </View>
            <View style={styles.sendMessageButton}>
              <Button
                text="Send Message"
                onClick={sendMessageHandler}
                type="play"
              />
            </View>
          </>
        )}
      </View>
      {isMessageSent && (
        <View style={styles.messageSentBlock}>
          <Image source={ApprovedIcon} style={styles.messageSentIcon} />
          <Text style={styles.messageSentTitle}>
            Your message has been sent! Thanks for your feedback.
          </Text>
        </View>
      )}
    </SafeAreaView>
  );
};

export default ContactUs;
const styles = StyleSheet.create({
  contactScreen: {
    backgroundColor: "white",
    height: "100%",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: "5%",
    paddingRight: "5%",
    width: "65%",
    marginTop: 40,
  },
  title: {
    display: "flex",
    flexDirection: "row",
  },
  contactPasswordTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#170A4B",
  },
  contactPasswordBlock: {
    paddingLeft: "5%",
    paddingRight: "5%",
  },
  contactTitle: {
    color: "#170A4B",
    fontSize: 16,
    marginTop: 26,
  },
  inputs: {
    borderWidth: 1,
    borderColor: "#D9E0EC",
    padding: 16,
    borderRadius: 16,
    marginTop: 8,
  },
  secondaryInputs: {
    backgroundColor: "#EAECF6",
  },
  messageInputs: {
    height: 120,
  },
  titleInputBlock: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  titleInput: {
    color: "#0B1A65",
    fontSize: 15,
    marginTop: 25,
  },
  changePasswordTitle: {
    color: "#310CE3",
    fontSize: 13,
    fontWeight: "500",
  },
  instruction: {
    color: "#170A4B",
    fontSize: 16,
    textAlign: "center",
    marginTop: 27,
  },
  contactPasswordButton: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    paddingLeft: "5%",
    paddingRight: "5%",
    width: "100%",
    marginTop: 24,
  },
  backToLoginButton: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#0B1A65",
    width: 128,
    height: 33,
    borderRadius: 50,
    padding: 8,
  },
  ableButton: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0B1A65",
    width: 150,
    height: 33,
    borderRadius: 50,
    paddingVertical: 8,
  },
  ableText: {
    color: "#FFFFFF",
  },
  deleteAccBlock: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    position: "absolute",
    bottom: 48,
  },
  deleteAcc: {
    fontSize: 13,
    fontWeight: "500",
    color: "#CE463E",
  },
  sendMessageButton: {
    marginTop: 24,
  },
  messageSentBlock: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 24,
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#D9E0EC",
    borderStyle: "dashed",
    marginHorizontal: "5%",
    width: "90%",
  },
  messageSentIcon: {
    marginLeft: 16,
  },
  messageSentTitle: {
    color: "#616691",
    fontSize: 13,
    paddingHorizontal: 16,
  },
});
