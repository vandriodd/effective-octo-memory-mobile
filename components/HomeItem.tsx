import { PieDataItem } from "@/constants";
import { Text, View } from "react-native";
import { PieChart } from "react-native-gifted-charts";

interface HomeItemProps {
  data: PieDataItem;
}

export default function HomeItem({ data }: HomeItemProps) {
  const chartData = [
    {
      value: data.value,
      color: data.color,
      text: data.text,
      price: data.price,
      focused: true,
    },
    {
      value: 100 - data.value,
      color: "lightgray",
    },
  ];

  return (
    <View className="flex flex-row border-b border-b-gray-300 pb-4 w-full justify-between">
      <View className="flex flex-row gap-4 items-center">
        <PieChart
          donut
          radius={30}
          innerRadius={20}
          data={chartData}
          sectionAutoFocus
          strokeWidth={3}
          strokeColor="#15104D"
          innerCircleBorderWidth={3}
          innerCircleBorderColor="#15104D"
        />

        <View className="flex flex-col">
          <Text>{chartData[0].text}</Text>
          <Text className="text-lg" style={{ fontFamily: "semiBold" }}>
            {chartData[0].value}%
          </Text>
        </View>
      </View>

      <View className="justify-center">
        <Text>${chartData[0].price}</Text>
      </View>
    </View>
  );
}
