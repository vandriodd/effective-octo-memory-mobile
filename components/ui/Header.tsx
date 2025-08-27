import { LeftArrow } from "@/assets/icons/ui-icons";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView, Text, View } from "react-native";
import Button from "./button";

interface CustomHeaderProps {
  title: string;
  showBack?: boolean;
  rightIcon?: React.ReactNode;
  onPress?: () => void;
}

export default function CustomHeader({
  title,
  showBack,
  rightIcon,
  onPress,
}: CustomHeaderProps) {
  const navigation = useNavigation();

  return (
    <SafeAreaView className="bg-transparent p-4">
      <View className="flex flex-row items-center">
        <View className="flex-1 items-start">
          {showBack ? (
            <Button
              type="iconOnly"
              icon={<LeftArrow />}
              onPress={() => navigation.goBack()}
            />
          ) : (
            <View style={{ width: 40 }} />
          )}
        </View>

        <View className="flex-2 items-center">
          <Text
            className="text-primary text-3xl"
            style={{ fontFamily: "bold" }}
          >
            {title}
          </Text>
        </View>

        <View className="flex-1 items-end">
          {rightIcon ? (
            <Button
              type="iconOnly"
              icon={rightIcon}
              onPress={onPress || (() => {})}
            />
          ) : (
            <View style={{ width: 40 }} />
          )}
        </View>
      </View>
    </SafeAreaView>
  );
}
