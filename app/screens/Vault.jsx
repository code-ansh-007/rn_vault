import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import tw from "twrnc";
import { FIREBASE_AUTH } from "../../firebaseConfig";

const Vault = ({ navigation }) => {
  return (
    <View style={tw`flex flex-1 flex-col items-center justify-center gap-3`}>
      <TouchableOpacity onPress={() => FIREBASE_AUTH.signOut()}>
        <Text style={tw`text-red-500 text-lg`}>Exit Vault</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Details")}>
        <Text style={tw`text-blue-500 text-lg`}>Visit Details Screen</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Vault;
