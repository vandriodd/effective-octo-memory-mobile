import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import { useState } from "react";
import { Text, View } from "react-native";

import GoogleIcon from "@/assets/icons/google";
import OcHandshake from "@/assets/images/oc-handshake";
import { Link } from "expo-router";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View className="flex flex-1 justify-center mx-10">
      <View className="flex flex-col items-center gap-4">
        <OcHandshake />
        <View className="flex flex-col items-center">
          <Text
            className="text-5xl text-primary"
            style={{ fontFamily: "black" }}
          >
            Join Us
          </Text>
          <Text className="text-gray-600">Create your account</Text>
        </View>
      </View>

      <View className="flex flex-col gap-2 mt-8">
        <Input
          value={username}
          onChange={setUsername}
          placeholder="Username"
          type="username"
          label="Username"
        />

        <Input
          value={password}
          onChange={setPassword}
          placeholder="**********"
          type="password"
          label="Password"
        />

        <Button
          title="Sign Up"
          onPress={() => console.log({ username, password })}
        />
      </View>

      <View className="flex flex-row flex-nowrap items-center gap-4 my-4">
        <View className="border-b border-gray-500 flex-1" />
        <Text className="text-gray-500">Or better yet ...</Text>
        <View className="border-b border-gray-500 flex-1" />
      </View>

      <View className="flex flex-col gap-8">
        <Button
          title="Continue with Google"
          icon={<GoogleIcon color={"#6366f1"} />}
          type="secondary"
          onPress={() => console.log("Log In with Google")}
        />

        <Text className="text-center">
          Already have an account?{" "}
          <Link href="/login" className="underline">
            Log In
          </Link>
        </Text>
      </View>
    </View>
  );
}
