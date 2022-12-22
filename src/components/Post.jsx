import { View, Text, Image } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

const Post = () => {
  return (
    <View>
      <View className="flex flex-row justify-between">
        <View className="flex flex-row">
          <Image
            className="w-10 h-10 rounded-full border-2 border-fuchsia-500 ml-5 mt-3"
            source={require("../../assets/messiprofile.jpeg")}
          />
          <Text className="ml-2 mt-6">leomessi</Text>
          <Image
            className="w-4 h-4 mt-6 ml-1"
            source={require("../../assets/verified.png")}
          />
        </View>
        <View className="mr-5 mt-6">
          <Entypo
            className="flex-end mt-10 mr-5"
            name="dots-three-horizontal"
            size={20}
            color="black"
          />
        </View>
      </View>
      <View>
        <Image
          className="w-full h-96 mt-2"
          source={require("../../assets/messi1.jpeg")}
        />
      </View>
      <View className="flex flex-row justify-between">
        <View className="flex flex-row justify-evenly w-32 mt-2">
          <View>
            <AntDesign name="heart" size={24} color="red" />
          </View>
          <View className="rotate-[270deg]">
            <Feather name="message-circle" size={24} color="black" />
          </View>
          <View>
            <Feather name="send" size={24} color="black" />
          </View>
        </View>
        <View className="mr-4 mt-2">
          <FontAwesome name="bookmark-o" size={24} color="black" />
        </View>
      </View>
      <View>
        <View className="flex flex-row -ml-2">
          <Image
            className="w-6 h-6 rounded-full  ml-5 mt-3"
            source={require("../../assets/messiprofile.jpeg")}
          />
          <Image
            className="w-6 h-6 rounded-full ml-[-10px] mt-3"
            source={require("../../assets/messiprofile.jpeg")}
          />
          <Image
            className="w-6 h-6 rounded-full ml-[-10px] mt-3"
            source={require("../../assets/messiprofile.jpeg")}
          />
          <Text className="ml-2 mt-4">
            Liked by <Text className="font-bold">ronaldo</Text> and{" "}
            <Text className="font-bold">9,436,858</Text> others
          </Text>
        </View>
      </View>
      <View>
        <Text className="ml-5 mt-2">
          <Text className="font-bold">leomessi</Text> Lorem ipsum dolor sit amet
          ⚽️❤️
        </Text>
        <Text className="ml-5 mt-2 text-gray-500">View all 897,234,234 comments</Text>
        <Text className="ml-5 mt-2">
          <Text className="font-bold">ronaldo</Text> You're the real GOAT 🐐
        </Text>
        <Text className="ml-5 mt-2 text-gray-500">1 hour ago</Text>
      </View>
    </View>
  );
};

export default Post;
