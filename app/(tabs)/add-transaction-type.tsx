import {
  Bills,
  Clothes,
  Debt,
  Education,
  Entertainment,
  Food,
  Groceries,
  Healthcare,
  Home,
  Other,
  Pets,
  Savings,
  Technology,
  Transport,
  Travel,
} from "@/assets/icons/categories";
import OcThinking from "@/assets/images/oc-thinking";
import CategoryButton from "@/components/CategoryButton";
import { navigate } from "expo-router/build/global-state/routing";
import { ScrollView, Text, View } from "react-native";
import {
  SafeAreaProvider,
  SafeAreaView,
  initialWindowMetrics,
} from "react-native-safe-area-context";

const TYPES = [
  {
    label: "Food",
    icon: <Food />,
  },
  {
    label: "Transport",
    icon: <Transport />,
  },
  {
    label: "Groceries",
    icon: <Groceries />,
  },
  {
    label: "Bills",
    icon: <Bills />,
  },
  {
    label: "Technology",
    icon: <Technology />,
  },
  {
    label: "Home",
    icon: <Home />,
  },
  {
    label: "Clothing",
    icon: <Clothes />,
  },
  {
    label: "Pets",
    icon: <Pets />,
  },
  {
    label: "Other",
    icon: <Other />,
  },
  {
    label: "Education",
    icon: <Education />,
  },
  {
    label: "Travel",
    icon: <Travel />,
  },
  {
    label: "Healthcare",
    icon: <Healthcare />,
  },
  {
    label: "Entertainment",
    icon: <Entertainment />,
  },
  {
    label: "Savings",
    icon: <Savings />,
  },
  {
    label: "Debt",
    icon: <Debt />,
  },
];

const onPress = (category: string) => {
  console.log("Category pressed: " + category);
  navigate("/(tabs)/add-transaction-amount");
};

export default function AddScreen() {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <SafeAreaView>
        <ScrollView>
          <View className="flex-1 justify-center items-center">
            <View className="flex-col items-center gap-4 mb-6 mt-10">
              <OcThinking />
              <Text
                className="text-3xl mb-4 text-primary"
                style={{ fontFamily: "bold" }}
              >
                What did you spend it on?
              </Text>
            </View>

            <View className="flex-row flex-wrap justify-center gap-4 w-full">
              {TYPES.map((type, index) => (
                <View className="w-1/4" key={index}>
                  <CategoryButton
                    label={type.label}
                    icon={type.icon}
                    onPress={onPress.bind(null, type.label)}
                  />
                </View>
              ))}
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
