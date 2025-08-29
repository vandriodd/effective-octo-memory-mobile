import OcMoneyProfit from "@/assets/images/oc-money-profit";
import { Collapsible } from "@/components/Collapsible";
import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import { useState } from "react";
import { Platform, Pressable, ScrollView, Text, View } from "react-native";
import {
  SafeAreaProvider,
  SafeAreaView,
  initialWindowMetrics,
} from "react-native-safe-area-context";

export default function AddTransactionAmount() {
  const [amount, setAmount] = useState(0);
  const [transactionName, setTransactionName] = useState("");
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);

  const onChange = (e: DateTimePickerEvent, selectedDate: Date | undefined) => {
    const currentDate = selectedDate || date;
    setShowPicker(Platform.OS === "ios");
    setDate(currentDate);
  };

  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <SafeAreaView>
        <ScrollView>
          <View className="flex-1 justify-center items-center mx-10 pb-20">
            <View className="flex-col items-center gap-4 mb-6 mt-10">
              <OcMoneyProfit />
              <Text
                className="text-3xl text-primary"
                style={{ fontFamily: "bold" }}
              >
                And how much did you spend?
              </Text>
            </View>

            <View className="flex flex-col gap-2 w-full">
              <Input
                value={amount.toString()}
                onChange={(text) => setAmount(Number(text))}
                placeholder="Enter amount"
                helperText="Edit details if needed, otherwise press create"
                keyboardType="numeric"
              />

              <Button title="Create" onPress={() => console.log({ amount })} />
            </View>

            <Collapsible title="Additional details">
              <View className="flex flex-col gap-2">
                <Input
                  type="name"
                  label="Name of Transaction"
                  value={transactionName}
                  onChange={setTransactionName}
                />

                <View>
                  <Text className="mb-2 text-gray-800">
                    Date of Transaction
                  </Text>

                  <View className="h-14 rounded-lg w-full bg-white border border-[#C7C5DE] justify-center mb-2">
                    <Pressable onPress={() => setShowPicker(true)}>
                      <Text className="px-4">{date.toLocaleDateString()}</Text>
                    </Pressable>
                  </View>
                  {showPicker && (
                    <DateTimePicker
                      testID="dateTimePicker"
                      value={date}
                      mode="date"
                      display={Platform.OS === "ios" ? "spinner" : "default"}
                      onChange={onChange}
                    />
                  )}
                </View>
              </View>
            </Collapsible>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
