import { Text, TextInput, TextInputIOSProps, View } from "react-native";

interface InputProps {
  value: string;
  label: string;
  onChange: (text: string) => void;
  type: TextInputIOSProps["textContentType"];
  placeholder?: string;
  helperText?: string;
}

export default function Input({
  value,
  onChange,
  label,
  type,
  placeholder = "Enter text",
  helperText,
}: InputProps) {
  return (
    <View>
      <Text className="mb-2 text-gray-800">{label}</Text>
      <View className="h-14 rounded-lg w-full bg-white border border-[#C7C5DE] justify-center mb-2">
        <TextInput
          value={value}
          placeholder={placeholder}
          onChangeText={onChange}
          className="text-[#23282b] px-4"
          textContentType={type}
          secureTextEntry={type === "password"}
        />
      </View>
      {helperText && (
        <Text className="mt-1 text-xs text-gray-600">{helperText}</Text>
      )}
    </View>
  );
}
