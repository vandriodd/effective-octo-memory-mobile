import { Href, Link } from "expo-router";
import { useState } from "react";
import { Modal, Text, TouchableOpacity, View } from "react-native";
import Button from "./ui/button";

const OPTIONS = [
  { label: "LogIn", value: "/login" },
  { label: "Home", value: "/home" },
  { label: "Transactions", value: "/transactions" },
  { label: "Budget", value: "/budget" },
  { label: "Profile", value: "/profile" },
  { label: "Add Transaction", value: "/add" },
];

export default function Debugger() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isVisible}
        onRequestClose={() => {
          setIsVisible(false);
        }}
      >
        <View className="flex-1 justify-center items-center bg-black/50">
          <View className="bg-white rounded-lg p-6 shadow-lg mx-4 max-w-sm w-full">
            <Text className="mb-4 text-center text-lg font-semibold">
              Navigation between screens
            </Text>
            <View className="mb-4 gap-2">
              {OPTIONS.map((option) => (
                <Link key={option.value} href={option.value as Href} asChild>
                  <TouchableOpacity
                    className="bg-gray-100 p-3 rounded-lg"
                    onPress={() => setIsVisible(false)}
                  >
                    <Text className="text-center text-blue-600">
                      {option.label}
                    </Text>
                  </TouchableOpacity>
                </Link>
              ))}
            </View>
            <Button title="Close" onPress={() => setIsVisible(false)} />
          </View>
        </View>
      </Modal>

      <View className="absolute bottom-4 right-4 z-50">
        <TouchableOpacity
          className="bg-primary w-14 h-14 rounded-full justify-center items-center shadow-lg"
          onPress={() => setIsVisible(true)}
        >
          <Text className="text-white text-xs font-bold">DBG</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
