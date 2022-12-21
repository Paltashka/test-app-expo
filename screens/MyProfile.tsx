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

const MyProfile = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isNewUseDataValid, setIsNewUseDataValid] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    if (
      name.trim().length > 0 &&
      surname.trim().length > 0 &&
      password.length >= 8 &&
      password.match(/\W/g) &&
      password.match(/[A-Z]/g) &&
      password.match(/[a-z]/g) &&
      password.match(/\d/g) &&
      email.match("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")
    ) {
      setIsNewUseDataValid(true);
    } else if (isNewUseDataValid === true) {
      setIsNewUseDataValid(false);
    }
  }, [name, surname, email, password]);
  return (
    <SafeAreaView style={styles.profileScreen}>
      <View style={styles.header}>
        <View onTouchEnd={() => navigation.goBack()}>
          <Image source={goBackIcon} />
        </View>
        <View style={styles.title}>
          <Text style={styles.profilePasswordTitle}>My Profile</Text>
        </View>
      </View>
      <View style={styles.profilePasswordBlock}>
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
          <View style={styles.titleInputBlock}>
            <Text style={styles.titleInput}>Password</Text>
            <Text style={styles.changePasswordTitle}>Change Password</Text>
          </View>
          <TextInput
            placeholder="********"
            style={[styles.secondaryInputs, styles.inputs]}
            autoCapitalize="none"
            secureTextEntry={true}
            onChangeText={text => setPassword(text)}
          />
        </View>
      </View>
      {isNewUseDataValid && (
        <View style={styles.profilePasswordButton}>
          <TouchableOpacity
            style={styles.ableButton}
            onPress={() => navigation.navigate("Settings")}
          >
            <Text style={styles.ableText}>Save Changes</Text>
          </TouchableOpacity>
        </View>
      )}
      <View style={styles.deleteAccBlock}>
        <Text style={styles.deleteAcc}>Delete My Account</Text>
      </View>
    </SafeAreaView>
  );
};

export default MyProfile;
const styles = StyleSheet.create({
  profileScreen: {
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
  profilePasswordTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#170A4B",
  },
  profilePasswordBlock: {
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
  secondaryInputs: {
    backgroundColor: "#EAECF6",
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
  profilePasswordButton: {
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
});
