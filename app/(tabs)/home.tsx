import { ScrollView, View } from "react-native";
import {
  SafeAreaProvider,
  SafeAreaView,
  initialWindowMetrics,
} from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <SafeAreaView>
        <ScrollView>
          <View className="flex-1 justify-center items-center mx-10 pb-20"></View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
