import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";

import { ThreeDots } from "@/assets/icons/ui-icons";
import { HapticTab } from "@/components/HapticTab";
import CustomHeader from "@/components/ui/Header";
import { IconSymbol } from "@/components/ui/IconSymbol";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { getHeaderTitle } from "@react-navigation/elements";

// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// const Tab = createBottomTabNavigator();

export default function TabLayout() {
  return (
    <Tabs
      backBehavior="history"
      screenOptions={{
        tabBarActiveTintColor: "#6366f1",
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: "absolute",
          },
          default: {},
        }),
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          headerShown: true,
          title: "Home",
          headerStyle: {
            height: 80,
          },
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="house.fill" color={color} />
          ),
          header: ({ navigation, route, options }) => {
            const title = getHeaderTitle(options, route.name);

            return (
              <CustomHeader
                title={title}
                rightIcon={<ThreeDots />}
                onPress={() => {}}
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="transactions"
        options={{
          headerShown: true,
          headerStyle: {
            height: 80,
          },
          title: "Transactions",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="clock.fill" color={color} />
          ),
          header: ({ navigation, route, options }) => {
            const title = getHeaderTitle(options, route.name);

            return (
              <CustomHeader
                title={title}
                showBack
                rightIcon={<ThreeDots />}
                onPress={() => {}}
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="add-transaction-type"
        options={{
          headerShown: true,
          title: "Add",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="plus.circle.fill" color={color} />
          ),
          header: ({ navigation, route, options }) => {
            const title = getHeaderTitle(options, route.name);

            return <CustomHeader title={title} showBack onPress={() => {}} />;
          },
        }}
      />
      <Tabs.Screen
        name="budget"
        options={{
          headerShown: true,
          headerStyle: {
            height: 80,
          },
          title: "Budget",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="wallet.bifold.fill" color={color} />
          ),
          header: ({ navigation, route, options }) => {
            const title = getHeaderTitle(options, route.name);

            return <CustomHeader title={title} showBack onPress={() => {}} />;
          },
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerShown: true,
          title: "Profile",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="gearshape.fill" color={color} />
          ),
          header: ({ navigation, route, options }) => {
            const title = getHeaderTitle(options, route.name);

            return <CustomHeader title={title} showBack onPress={() => {}} />;
          },
        }}
      />
      <Tabs.Screen
        name="add-transaction-amount"
        options={{
          href: null,
        }}
      />
    </Tabs>
  );
}
