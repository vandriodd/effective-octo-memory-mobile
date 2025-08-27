import { Pressable, Text, View } from "react-native";

interface CategoryButtonProps {
  label: string;
  icon: React.ReactNode;
  onPress: () => void;
}

export default function CategoryButton({
  label,
  icon,
  onPress,
  ...props
}: CategoryButtonProps) {
  return (
    <Pressable
      className="bg-white p-4 rounded-lg items-center gap-2"
      {...props}
      onPress={onPress}
    >
      <View className="w-8 h-8">{icon}</View>
      <Text className="text-sm text-primary" style={{ fontFamily: "regular" }}>
        {label}
      </Text>
    </Pressable>
  );
}
