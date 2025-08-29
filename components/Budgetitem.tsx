import { ChevronRight } from "@/assets/icons/ui-icons";
import { Text, View } from "react-native";
import { PieChart } from "react-native-gifted-charts";

interface BudgetItemProps {
  data: { value: number; color: string; label?: string }[];
}

export default function BudgetItem({ data }: BudgetItemProps) {
  return (
    <View className="flex flex-row items-center justify-between border-b border-b-gray-300 py-8 w-full">
      <View className="flex flex-row items-center gap-4 ">
        <PieChart
          donut
          radius={55}
          innerRadius={45}
          data={data}
          centerLabelComponent={() => (
            <Text className="text-2xl">{data[0].value}%</Text>
          )}
        />

        <Text className="text-2xl font-medium">{data[0].label}</Text>
      </View>

      <View>
        <ChevronRight />
      </View>
    </View>
  );
}
