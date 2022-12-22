import { View, Text, Image, ScrollView } from "react-native";
import React from "react";

const Stories = () => {
  return (
    <View>
    <View className="flex flex-row ml-2">
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View>
          <Image
            className="w-16 h-16 ml-2 rounded-full"
            source={require("../../assets/story1.jpeg")}
          />
          <Text className="text-xs ml-3">Your Story</Text>
        </View>
        <View>
          <Image
            className="w-16 h-16 ml-3 rounded-full border-2 border-fuchsia-500"
            source={require("../../assets/story2.jpeg")}
          />
          <Text className="text-xs ml-3">_enadyyy</Text>
        </View>
        <View>
          <Image
            className="w-16 h-16 ml-3 rounded-full border-2 border-fuchsia-500"
            source={require("../../assets/story3.jpeg")}
          />
          <Text className="text-xs ml-3">leomessi</Text>
        </View>
        <View>
          <Image
            className="w-16 h-16 ml-3 rounded-full border-2 border-fuchsia-500"
            source={require("../../assets/story4.jpg")}
          />
          <Text className="text-xs ml-3">synlogout</Text>
        </View>
        <View>
          <Image
            className="w-16 h-16 ml-3 rounded-full border-2 border-fuchsia-500"
            source={require("../../assets/story4.jpg")}
          />
          <Text className="text-xs ml-3">synlogout</Text>
        </View>
        <View>
          <Image
            className="w-16 h-16 ml-3 rounded-full border-2 border-fuchsia-500"
            source={require("../../assets/story4.jpg")}
          />
          <Text className="text-xs ml-3">synlogout</Text>
        </View>
      </ScrollView>
    </View>
      {/*add thin horizontal line below the stories*/}
      <View className="border-b-[0.5px] mt-2 border-gray-300 w-full"></View>
    </View>
    
  );
};

export default Stories;
