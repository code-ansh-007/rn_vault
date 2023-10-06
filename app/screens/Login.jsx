import {
  View,
  Text,
  TextInput,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { FIREBASE_AUTH } from "../../firebaseConfig";
import tw from "twrnc";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const auth = FIREBASE_AUTH;

  const signIn = async () => {
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login Successful");
    } catch (error) {
      console.log(error);
      alert("Login Failed, check you email or password.");
    } finally {
      setLoading(false);
    }
  };

  const signUp = async () => {
    setLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Sign Up successful");
    } catch (error) {
      console.log(error);
      alert("Sign Up failed" + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView
      style={tw`flex flex-1 flex-col items-center justify-center gap-4`}
    >
      <Text style={tw`text-2xl font-bold text-gray-600`}>
        Login to RN_Vault
      </Text>
      <View style={tw`w-3/4  mt-10`}>
        <Text style={tw`text-lg text-gray-600`}>Email</Text>
        <TextInput
          style={tw`border-b-[1px] border-gray-600`}
          value={email}
          onChangeText={(text) => setEmail(text)}
          autoCapitalize="none"
        />
      </View>
      <View style={tw`w-3/4 mt-10`}>
        <Text style={tw`text-lg text-gray-600`}>Password</Text>
        <TextInput
          style={tw`border-b-[1px] border-gray-600`}
          value={password}
          onChangeText={(text) => setPassword(text)}
          autoCapitalize="none"
          secureTextEntry
        />
      </View>
      {loading ? (
        <ActivityIndicator size="large" color="red" />
      ) : (
        <View style={tw`mt-5 flex items-start w-full ml-24 gap-3 pb-10`}>
          <TouchableOpacity
            style={tw`px-4 py-2 bg-blue-500 rounded-lg`}
            onPress={signIn}
          >
            <Text style={tw` text-lg text-white font-semibold `}>
              Enter Vault
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={signUp}>
            <Text style={tw`text-[16px] text-blue-500`}>Get vault key</Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
};

export default Login;
