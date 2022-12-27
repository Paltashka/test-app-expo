import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import selectedIcon from "../assets/images/selected.png";
import { Button } from "../components/Button/Button";

interface propsType {
  route: {
    params: {
      title: string;
      type: string;
      pageNumber: number;
      isText?: boolean;
      data: dataType[];
    };
  };
}
interface dataType {
  id: number;
  selected: boolean;
  img: any;
  text?: string;
}
const WhatYouLike = ({ route }: propsType) => {
  const [departmentData, setDepartmentData] = useState(route.params.data);
  const navigation = useNavigation();
  const selectedAount = departmentData.filter(
    (department: dataType) => department.selected == true
  ).length;

  const selectedHandler = (id: number) => {
    const toggleSelectedDepartment = departmentData.map(
      (department: dataType) => {
        if (department.id === id) {
          department.selected = !department.selected;
        }
        return department;
      }
    );
    setDepartmentData(toggleSelectedDepartment);
  };

  const nextStepNavigate = () => {
    if (route.params.type === "Brand") {
      navigation.navigate("CategoriesYouLike");
    } else {
      navigation.navigate("TabHomeScreen", { type: "WHEEL" });
    }
  };

  return (
    <SafeAreaView style={styles.departmentPage}>
      <View style={styles.pageHeader}>
        <View style={styles.pageHeaderTitle}>
          <Text style={styles.pageTitle}>{route.params.title}</Text>
          <Text style={styles.pageAmount}>({route.params.pageNumber}/2)</Text>
        </View>
        <Text
          style={styles.skipButton}
          onPress={() => {
            nextStepNavigate();
          }}
        >
          Skip
        </Text>
      </View>
      <View style={styles.listBlock}>
        <ScrollView contentContainerStyle={styles.list}>
          {departmentData.map((department: dataType) => (
            <View
              key={department.id}
              style={
                department.selected
                  ? [styles.option, styles.selected]
                  : styles.option
              }
              onTouchEnd={() => selectedHandler(department.id)}
            >
              <Image source={department.img} />
              {department.text && <Text>{department.text}</Text>}
              {department.selected && (
                <Image source={selectedIcon} style={styles.selectedIcon} />
              )}
            </View>
          ))}
        </ScrollView>
      </View>
      <View style={styles.selectedBlock}>
        <View>
          <Text style={styles.selectedTitle}>{route.params.type}</Text>
          <Text style={styles.amountSelected}>{selectedAount} selected</Text>
        </View>
        <Button
          type="play"
          text="Next"
          onClick={() => nextStepNavigate()}
        ></Button>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  departmentPage: {
    width: "100%",
    height: "100%",
    backgroundColor: "#E5E5E5",
  },
  listBlock: {
    height: "85%",
  },
  list: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
    height: "auto",
    justifyContent: "space-around",
  },
  option: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "45%",
    height: 150,
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
    marginBottom: "1.5%",
    marginTop: "1.5%",
    opacity: 0.5,
  },
  selected: {
    opacity: 1,
    borderWidth: 1,
    borderColor: "#0B1A65",
  },
  selectedIcon: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  pageHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: "30%",
    paddingRight: "10%",
  },
  pageHeaderTitle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 25,
    marginBottom: 15,
  },
  pageTitle: {
    fontSize: 16,
    color: "#170A4B",
  },
  pageAmount: {
    fontSize: 10,
  },
  skipButton: {
    fontSize: 13,
    color: "#616691",
  },
  selectedBlock: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "95%",
    height: "10%",
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
    paddingLeft: 16,
    paddingRight: 16,
    marginBottom: 20,
    position: "absolute",
    bottom: 20,
    left: 10,
  },
  selectedTitle: {
    fontSize: 22,
    color: "#170A4B",
  },
  amountSelected: {
    fontSize: 16,
    color: "#616691",
  },
});

export default WhatYouLike;
