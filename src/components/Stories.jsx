import { View, Text, Image, ScrollView } from "react-native";
import React from "react";

const Stories = () => {
  return (
    <View className="flex flex-row ml-2">
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View>
          <Image
            className="w-16 h-16 ml-5 rounded-full"
            source={require("../../assets/story1.jpeg")}
          />
          <Text className="text-xs ml-5">Your Story</Text>
        </View>
        <View>
          <Image
            className="w-16 h-16 ml-5 rounded-full border-2 border-fuchsia-500"
            source={require("../../assets/story2.jpeg")}
          />
          <Text className="text-xs ml-">_enadyyy</Text>
        </View>
        <View>
          <Image
            className="w-16 h-16 ml-5 rounded-full border-2 border-fuchsia-500"
            source={require("../../assets/story3.jpeg")}
          />
          <Text className="text-xs ml-7">leomessi</Text>
        </View>
        <View>
          <Image
            className="w-16 h-16 ml-5 rounded-full border-2 border-fuchsia-500"
            source={require("../../assets/story4.jpg")}
          />
          <Text className="text-xs ml-6">synlogout</Text>
        </View>
        <View>
          <Image
            className="w-16 h-16 ml-5 rounded-full border-2 border-fuchsia-500"
            source={require("../../assets/story4.jpg")}
          />
          <Text className="text-xs ml-6">synlogout</Text>
        </View>
        <View>
          <Image
            className="w-16 h-16 ml-5 rounded-full border-2 border-fuchsia-500"
            source={require("../../assets/story4.jpg")}
          />
          <Text className="text-xs ml-6">synlogout</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Stories;
