import { Text, TouchableOpacity, View } from "react-native";

interface ButtonProps {
  title: string;
  type?: "primary" | "secondary";
  icon?: React.ReactNode;
  onPress: () => void;
}

export default function Button({
  title,
  onPress,
  icon,
  type = "primary",
}: ButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      className={`flex items-center rounded-full p-4 ${
        type === "primary"
          ? "bg-primary"
          : "bg-transparent border border-1 border-primary"
      }`}
    >
      <View className="flex flex-row items-center gap-2">
        {icon && <>{icon}</>}
        <Text
          className={`text-lg ${type === "primary" ? "text-white" : "text-primary"}`}
        >
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
