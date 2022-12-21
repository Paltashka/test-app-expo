/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
  TabRouter,
  useNavigation,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { ColorSchemeName, Dimensions, Image, Pressable } from "react-native";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import ModalScreen from "../screens/ModalScreen";
import NotFoundScreen from "../screens/NotFoundScreen";
import TabHomeScreen from "../screens/TabHomeScreen";
import TabRewardsScreen from "../screens/TabRewardsScreen";
import TabGamesScreen from "../screens/TabGamesScreen";
import WelcomeScreen from "../screens/WelcomeScreen";

import {
  RootStackParamList,
  RootTabParamList,
  RootTabScreenProps,
} from "../types";
import LinkingConfiguration from "./LinkingConfiguration";
import homeIcon from "../assets/images/home-04.png";
import rewardsIcon from "../assets/images/rewards.png";
import globeIcon from "../assets/images/globe.png";
import userCircleIcon from "../assets/images/user-circle.png";
import WhatYouLike from "../screens/WhatYouLike";
import RegistrationScreen from "../screens/RegistrationScreen";
import FaceIDSceen from "../screens/FaceIDSceen";
import LoginScreen from "../screens/LogIn";
import ForgotPasswordScreen from "../screens/ForgotPassword";
import SettingsScreen from "../screens/SettingsScreen";
import MyProfile from "../screens/MyProfile";
import FAQScreen from "../screens/FAQScreen";
import ContactUs from "../screens/ContactUsScreen";
import About from "../screens/About";

const brandData = [
  { id: 1, img: require("../assets/images/Brand_1.png"), selected: false },
  { id: 2, img: require("../assets/images/Brand_2.png"), selected: false },
  { id: 3, img: require("../assets/images/Brand_3.png"), selected: false },
  { id: 4, img: require("../assets/images/Brand_4.png"), selected: false },
  { id: 5, img: require("../assets/images/Brand_5.png"), selected: false },
  { id: 6, img: require("../assets/images/Brand_6.png"), selected: false },
  { id: 7, img: require("../assets/images/Brand_7.png"), selected: false },
  { id: 8, img: require("../assets/images/Brand_8.png"), selected: false },
  { id: 9, img: require("../assets/images/Brand_9.png"), selected: false },
  { id: 10, img: require("../assets/images/Brand_10.png"), selected: false },
  { id: 11, img: require("../assets/images/Brand_11.png"), selected: false },
  { id: 12, img: require("../assets/images/Brand_12.png"), selected: false },
];

const categoriesData = [
  {
    id: 1,
    img: require("../assets/images/categories_1.png"),
    text: "Fashion",
    selected: false,
  },
  {
    id: 2,
    img: require("../assets/images/categories_2.png"),
    text: "Electronics",
    selected: false,
  },
  {
    id: 3,
    img: require("../assets/images/categories_3.png"),
    text: "Traveling",
    selected: false,
  },
  {
    id: 4,
    img: require("../assets/images/categories_4.png"),
    text: "Movies",
    selected: false,
  },
  {
    id: 5,
    img: require("../assets/images/categories_5.png"),
    text: "Personal Care",
    selected: false,
  },
  {
    id: 6,
    img: require("../assets/images/categories_6.png"),
    text: "Camping",
    selected: false,
  },
  {
    id: 7,
    img: require("../assets/images/categories_7.png"),
    text: "DIY",
    selected: false,
  },
  {
    id: 8,
    img: require("../assets/images/categories_8.png"),
    text: "Parties",
    selected: false,
  },
  {
    id: 9,
    img: require("../assets/images/categories_11.png"),
    text: "Shopping",
    selected: false,
  },
  {
    id: 10,
    img: require("../assets/images/categories_12.png"),
    text: "Gardening",
    selected: false,
  },
  {
    id: 11,
    img: require("../assets/images/categories_9.png"),
    text: "Music",
    selected: false,
  },
  {
    id: 12,
    img: require("../assets/images/categories_10.png"),
    text: "Baby & Kids",
    selected: false,
  },
];

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  const navigation = useNavigation();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
      <Stack.Screen
        name="WelcomeScreen"
        component={WelcomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="BrandsYouLike"
        component={WhatYouLike}
        options={{ headerShown: false }}
        initialParams={{
          title: "Brands you like",
          data: brandData,
          type: "Brand",
          pageNumber: 1,
          nextStepHandler: () => navigation.navigate("CategoriesYouLike"),
        }}
      />
      <Stack.Screen
        name="CategoriesYouLike"
        component={WhatYouLike}
        options={{ headerShown: false }}
        initialParams={{
          title: "Categories you like",
          data: categoriesData,
          type: "Categories",
          pageNumber: 2,
          nextStepHandler: () => navigation.navigate("TabHomeScreen"),
        }}
      />
      <Stack.Screen
        name="Registration"
        component={RegistrationScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="FaceIDScreen"
        component={FaceIDSceen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ForgotPasswordScreen"
        component={ForgotPasswordScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MyProfile"
        component={MyProfile}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="FAQ"
        component={FAQScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ContactUs"
        component={ContactUs}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="About"
        component={About}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabHomeScreen"
      screenOptions={{
        tabBarActiveTintColor: Colors.dark.tint,
      }}
      // screenOptions={({ route }) => {
      //   console.log(route.name);
      // }}
    >
      <BottomTab.Screen
        name="TabHomeScreen"
        component={TabHomeScreen}
        options={({ navigation }: RootTabScreenProps<"TabHomeScreen">) => ({
          title: "Home",
          headerShown: false,

          tabBarIcon: ({ color }) => <Image source={homeIcon} />,
        })}
      />
      <BottomTab.Screen
        name="TabRewardsScreen"
        component={TabRewardsScreen}
        options={({ navigation }: RootTabScreenProps<"TabRewardsScreen">) => ({
          title: "Rewards",
          headerShown: false,

          tabBarIcon: ({ color }) => <Image source={rewardsIcon} />,
        })}
      />
      <BottomTab.Screen
        name="TabGamesScreen"
        component={TabGamesScreen}
        options={({ navigation }: RootTabScreenProps<"TabGamesScreen">) => ({
          title: "Games",
          headerShown: false,

          tabBarIcon: ({ color }) => <Image source={globeIcon} />,
        })}
      />
      <BottomTab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          title: "Settings",
          headerShown: false,
          tabBarIcon: ({ color }) => <Image source={userCircleIcon} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
