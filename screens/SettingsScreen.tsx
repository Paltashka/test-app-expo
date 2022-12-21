import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Image,
  Switch,
} from "react-native";
import Arrow from "../assets/images/direction-right.png";

const SettingsScreen = () => {
  const [isFaceId, setIsFaceId] = useState(false);
  const [isNotifications, setIsNotifications] = useState(false);
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.settings}>
      <View style={styles.header}>
        <Text style={styles.titleOfHeader}>Settings</Text>
        <Text style={styles.signout}>Sign Out</Text>
      </View>
      <View style={styles.settingsList}>
        <View
          style={styles.option}
          onTouchEnd={() => navigation.navigate("MyProfile")}
        >
          <Text style={styles.titleOfOption}>My Profile</Text>
          <Image source={Arrow} />
        </View>
        <View style={styles.option}>
          <Text style={styles.titleOfOption}>Face ID</Text>
          <Switch
            style={styles.switch}
            value={isFaceId}
            onValueChange={() => setIsFaceId(!isFaceId)}
            trackColor={{ false: "white", true: "black" }}
            thumbColor={isFaceId ? "white" : "#616691"}
          />
        </View>
        <View style={styles.option}>
          <Text style={styles.titleOfOption}>Notifications</Text>
          <Switch
            style={styles.switch}
            value={isNotifications}
            onValueChange={() => setIsNotifications(!isNotifications)}
            trackColor={{ false: "white", true: "black" }}
            thumbColor={isNotifications ? "white" : "#616691"}
          />
        </View>
        <View
          style={styles.option}
          onTouchEnd={() =>
            navigation.navigate("BrandsYouLike", { next: () => {} })
          }
        >
          <Text style={styles.titleOfOption}>Reward Interests</Text>
          <Image source={Arrow} />
        </View>
        <View
          style={styles.option}
          onTouchEnd={() => navigation.navigate("FAQ")}
        >
          <Text style={styles.titleOfOption}>FAQ</Text>
          <Image source={Arrow} />
        </View>
        <View
          style={styles.option}
          onTouchEnd={() => navigation.navigate("ContactUs")}
        >
          <Text style={styles.titleOfOption}>Contact Us</Text>
          <Image source={Arrow} />
        </View>
        <View
          style={[styles.option, styles.lastOption]}
          onTouchEnd={() => navigation.navigate("About")}
        >
          <Text style={styles.titleOfOption}>About</Text>
          <Image source={Arrow} />
        </View>
      </View>
      <View style={styles.privacy}>
        <Text style={styles.privacyText}>Terms of Service</Text>
        <Text style={styles.privacyText}>Privacy Policy</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  settings: {
    marginHorizontal: "5%",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: "40%",
    marginTop: 57,
  },
  titleOfHeader: {
    fontSize: 16,
    color: "#170A4B",
    fontWeight: "600",
  },
  signout: {
    fontSize: 13,
    color: "#CE463E",
    fontWeight: "500",
  },
  settingsList: {
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
    display: "flex",
    alignItems: "center",
    marginTop: 27,
  },
  option: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderColor: "#D9E0EC",
    padding: 16,
    width: "90%",
    borderBottomWidth: 1,
  },
  titleOfOption: {
    fontSize: 16,
    color: "#170A4B",
  },
  lastOption: {
    borderBottomWidth: 0,
  },
  privacy: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 16,
  },
  privacyText: {
    marginHorizontal: 12,
    fontSize: 13,
    color: "#616691",
    fontWeight: "400",
  },
  switch: {
    width: 40,
    height: 24,
  },
});
export default SettingsScreen;
