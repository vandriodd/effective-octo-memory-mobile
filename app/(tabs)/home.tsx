import HomeItem from "@/components/HomeItem";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { useCallback, useRef } from "react";
import { Text, View } from "react-native";
import { PieChart } from "react-native-gifted-charts";
import {
  SafeAreaProvider,
  SafeAreaView,
  initialWindowMetrics,
} from "react-native-safe-area-context";
import { Text as SvgText } from "react-native-svg";

const pieData = [
  {
    value: 47,
    color: "#009FFF",
    text: "Food",
    price: 4499,
    focused: true,
  },
  {
    value: 40,
    color: "#93FCF8",
    text: "Transport",
    price: 3000,
    focused: true,
  },
  {
    value: 16,
    color: "#BDB2FA",
    text: "Rent",
    price: 1200,
    focused: true,
  },
  {
    value: 80,
    color: "lightgreen",
    text: "Earnings",
    price: 500000,
    focused: true,
  },
];

export default function HomeScreen() {
  const bottomSheetRef = useRef<BottomSheet>(null);

  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <SafeAreaView style={{ flex: 1 }}>
        <View className="flex flex-col items-center justify-center">
          <PieChart
            data={pieData}
            donut
            radius={90}
            innerRadius={60}
            showExternalLabels
            extraRadius={45}
            strokeWidth={8}
            strokeColor="#15104D"
            innerCircleBorderWidth={8}
            innerCircleBorderColor="#15104D"
            labelLineConfig={{
              labelComponentWidth: 25,
              length: 10,
            }}
            externalLabelComponent={(item) => (
              <SvgText fontSize={14} fontWeight={"bold"} fontFamily="Arial">
                {item?.value}%
              </SvgText>
            )}
          />

          <View className="flex flex-row flex-wrap justify-center gap-8 mt-2">
            {pieData.map(({ color, text }) => (
              <View className="flex flex-row items-center">
                <View
                  style={{
                    height: 10,
                    width: 10,
                    borderRadius: 2,
                    backgroundColor: color,
                    marginRight: 10,
                    borderColor: "#15104D",
                    borderWidth: 2,
                  }}
                />
                <Text>{text}</Text>
              </View>
            ))}
          </View>
        </View>

        <BottomSheet
          ref={bottomSheetRef}
          onChange={handleSheetChanges}
          style={{ flex: 1 }}
          snapPoints={[500, 900]}
          enableDynamicSizing={false}
        >
          <BottomSheetView
            style={{
              flex: 1,
              alignItems: "center",
              padding: 30,
            }}
          >
            <View className="flex flex-row w-full">
              <View className="flex-1">
                <Text
                  className="text-lg text-center"
                  style={{ fontFamily: "regular" }}
                >
                  Spent
                </Text>
                <Text
                  className="text-2xl text-center"
                  style={{ fontFamily: "bold" }}
                >
                  $1.200
                </Text>
              </View>
              <View className="h-full w-0.5 bg-gray-400 rounded-md" />
              <View className="flex-1">
                <Text
                  className="text-lg text-center"
                  style={{ fontFamily: "regular" }}
                >
                  Earned
                </Text>
                <Text
                  className="text-2xl text-center"
                  style={{ fontFamily: "bold" }}
                >
                  $54.300
                </Text>
              </View>
            </View>
            <View className="flex flex-col gap-4 mt-10">
              {pieData.map((chart) => (
                <HomeItem key={chart.text} data={chart} />
              ))}
            </View>
          </BottomSheetView>
        </BottomSheet>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
