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
import { useEffect, useState } from "react";

const RegistrationScreen = () => {
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const [isPasswordVerified, setIsPasswordVerified] = useState(false);
  const [isEmailVerified, setIsEmailVerified] = useState(false);

  const navigation = useNavigation();

  useEffect(() => {
    if (
      password.length >= 8 &&
      password.match(/\W/g) &&
      password.match(/[A-Z]/g) &&
      password.match(/[a-z]/g) &&
      password.match(/\d/g)
    ) {
      setIsPasswordVerified(true);
    } else if (isPasswordVerified === true) {
      setIsPasswordVerified(false);
    }
  }, [password]);

  useEffect(() => {
    if (email.match("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")) {
      setIsEmailVerified(true);
    } else if (isEmailVerified === true) {
      setIsEmailVerified(false);
    }
  }, [email]);

  const createAccount = () => {
    if (isEmailVerified && isPasswordVerified) {
      navigation.navigate("FaceIDScreen");
    }
  };

  const passwordValidate = (boolean: boolean | null | RegExpMatchArray) => {
    return password === ""
      ? styles.nonActive
      : boolean
      ? styles.successfully
      : styles.rejected;
  };
  return (
    <SafeAreaView style={styles.regisScreen}>
      <View style={styles.header}>
        <View onTouchEnd={() => navigation.goBack()}>
          <Image source={goBackIcon} />
        </View>
        <View style={styles.title}>
          <Text style={styles.RegistrationTitle}>Registration</Text>
          <Text style={styles.pageAmount}>(1/2)</Text>
        </View>
        <Text style={styles.login} onPress={() => navigation.navigate("Login")}>
          Login
        </Text>
      </View>
      <View style={styles.registrationBlock}>
        <View>
          <Text style={styles.titleInput}>Email Address</Text>
          <TextInput
            placeholder="xyz@playember.com"
            style={styles.inputs}
            value={email}
            onChangeText={text => setEmail(text)}
            autoCapitalize="none"
          />
        </View>
        <View>
          <Text style={styles.titleInput}>Password</Text>
          <TextInput
            placeholder="********"
            style={styles.inputs}
            value={password}
            secureTextEntry={true}
            onChangeText={text => setPassword(text)}
            autoCapitalize="none"
          />
        </View>
        <View style={styles.requirement}>
          <View style={styles.requirementBlock}>
            <Text style={passwordValidate(password.length >= 8)}>
              Minimum 8 characters
            </Text>
            <Text style={passwordValidate(password.match(/\d/g))}>
              1 numerical
            </Text>
          </View>
          <View style={styles.requirementBlock}>
            <Text
              style={passwordValidate(
                password.match(/[A-Z]/g) && password.match(/[a-z]/g)
              )}
            >
              1 UPPER or lower case
            </Text>
            <Text style={passwordValidate(password.match(/\W/g))}>
              1 special character
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.createAccountButton}>
        <TouchableOpacity
          style={
            isEmailVerified && isPasswordVerified
              ? styles.ableButton
              : styles.disableButton
          }
          onPress={createAccount}
        >
          <Text
            style={
              isEmailVerified && isPasswordVerified
                ? styles.ableText
                : styles.disableText
            }
          >
            Create Your Account »
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default RegistrationScreen;
const styles = StyleSheet.create({
  regisScreen: {
    backgroundColor: "white",
    height: "100%",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: "5%",
    paddingRight: "5%",
    marginTop: 40,
  },
  pageAmount: {
    fontSize: 10,
  },
  title: {
    display: "flex",
    flexDirection: "row",
  },
  RegistrationTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#170A4B",
  },
  login: {
    fontSize: 13,
    color: "#310CE3",
  },
  registrationBlock: {
    paddingLeft: "5%",
    paddingRight: "5%",
  },
  inputs: {
    borderWidth: 1,
    borderColor: "#D9E0EC",
    padding: 16,
    borderRadius: 16,
    marginTop: 8,
  },
  titleInput: {
    color: "#0B1A65",
    fontSize: 15,
    marginTop: 25,
  },
  requirement: {
    display: "flex",
    flexDirection: "row",
    marginTop: 8,
  },
  requirementBlock: {
    display: "flex",
  },
  nonActive: {
    fontSize: 13,
    color: "#A6AAC9",
    width: 180,
  },
  successfully: {
    fontSize: 13,
    color: "#39BC64",
    width: 180,
    position: "relative",
  },
  rejected: {
    fontSize: 13,
    color: "#CE463E",
    width: 180,
  },
  createAccountButton: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    paddingLeft: "5%",
    paddingRight: "5%",
    width: "100%",
    marginTop: 24,
  },
  ableButton: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#0B1A65",
    width: 170,
    height: 33,
    borderRadius: 50,
    padding: 8,
  },
  disableButton: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#EAECF6",
    width: 170,
    height: 33,
    borderRadius: 50,
    padding: 8,
  },
  ableText: {
    color: "#FFFFFF",
  },
  disableText: {
    color: "#A6AAC9",
  },
});
