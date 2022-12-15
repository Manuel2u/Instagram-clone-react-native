import { View, Text } from "react-native";
import React from "react";
import Header from "../components/Header";
import Stories from "../components/Stories";

const Home = () => {
  return (
    <View className="flex">
      <Header />
      <Stories />
    </View>
  );
};

export default Home;
