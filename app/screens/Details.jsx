import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import tw from "twrnc";

const Details = ({ navigation }) => {
  return (
    <View style={tw`flex flex-1 flex-col items-center justify-center gap-3`}>
      <Text style={tw`text-red-500 text-lg`}>Details Screen</Text>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={tw`text-blue-500 text-lg`}>Go back to vault</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Details;
