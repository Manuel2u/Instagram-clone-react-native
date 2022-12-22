import { View, Text, ScrollView } from "react-native";
import React from "react";
import Header from "../components/Header";
import Stories from "../components/Stories";
import Post from "../components/Post";

const Home = () => {
  return (
    <View className="flex">
      <Header />
      <Stories />
      <ScrollView>
        <Post />
        <Post />
      </ScrollView>
    </View>
  );
};

export default Home;
