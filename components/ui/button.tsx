import { Text, TouchableOpacity, View } from "react-native";

interface ButtonProps {
  title?: string;
  type?: "primary" | "secondary" | "iconOnly";
  icon?: React.ReactNode;
  onPress: () => void;
}

export default function Button({
  title,
  onPress,
  icon,
  type = "primary",
}: ButtonProps) {
  const isIconOnly = type === "iconOnly";

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      className={`flex items-center justify-center rounded-full ${
        isIconOnly ? "p-3" : "p-4"
      } ${
        type === "primary"
          ? "bg-primary"
          : type === "secondary"
            ? "bg-transparent border border-primary"
            : "bg-transparent"
      }`}
    >
      <View
        className={`flex flex-row items-center ${isIconOnly ? "" : "gap-2"}`}
      >
        {icon && <>{icon}</>}
        {!isIconOnly && title && (
          <Text
            className={`text-lg ${
              type === "primary" ? "text-white" : "text-primary"
            }`}
          >
            {title}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
}
