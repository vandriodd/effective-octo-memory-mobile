import { ScrollView, View } from "react-native";
import {
  SafeAreaProvider,
  SafeAreaView,
  initialWindowMetrics,
} from "react-native-safe-area-context";

import { Add } from "@/assets/icons/ui-icons";
import BudgetItem from "@/components/Budgetitem";
import Button from "@/components/ui/button";

const chartsData = [
  [
    { value: 25, color: "#FF6384", label: "Home Savings" },
    { value: 75, color: "lightgray" },
  ],
  [
    { value: 50, color: "#4CAF50", label: "Investments" },
    { value: 50, color: "lightgray" },
  ],
  [
    { value: 78, color: "#177AD5", label: "Other" },
    { value: 32, color: "lightgray" },
  ],
];

export default function BudgetScreen() {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <SafeAreaView>
        <ScrollView>
          <View className="flex flex-1 items-center mx-10 pb-20">
            <View className="flex flex-col">
              {chartsData.map((item, index) => (
                <BudgetItem key={index} data={item} />
              ))}
            </View>

            <View className="w-full">
              <Button
                title="New Budget"
                type="secondary"
                icon={<Add color="#6468F0" />}
                onPress={() => {}}
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
