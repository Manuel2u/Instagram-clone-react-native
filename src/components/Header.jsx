import { View, Text, Image } from "react-native";
import React from "react";
import { Octicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

const Header = () => {
  return (
    <View className="flex flex-row justify-between">
      <Image
        className="w-28 h-24 mt-9 ml-5"
        source={require("../../assets/logo.png")}
      />
      <View className="flex flex-row mt-[69px] w-36 justify-evenly">
        <Octicons name="diff-added" size={24} color="black" />
        <AntDesign name="hearto" size={24} color="black" />
        <FontAwesome5 name="facebook-messenger" size={24} color="black" />
      </View>
    </View>
  );
};

export default Header;
