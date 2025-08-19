import { PropsWithChildren, useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

import { IconSymbol } from "@/components/ui/IconSymbol";
import { Text } from "react-native";

export function Collapsible({
  children,
  title,
}: PropsWithChildren & { title: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <View className="w-full mt-4">
      <TouchableOpacity
        style={styles.heading}
        onPress={() => setIsOpen((value) => !value)}
        activeOpacity={0.8}
        className="justify-between py-4 mb-4"
      >
        <Text>{title}</Text>

        <IconSymbol
          name="chevron.right"
          size={18}
          weight="medium"
          color={"#1A1A1A"}
          style={{ transform: [{ rotate: isOpen ? "90deg" : "0deg" }] }}
        />
      </TouchableOpacity>
      {isOpen && <View>{children}</View>}
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 6,
  },
});
