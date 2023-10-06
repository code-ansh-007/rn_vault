import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./app/screens/Login";
import Vault from "./app/screens/Vault";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { FIREBASE_AUTH } from "./firebaseConfig";
import Details from "./app/screens/Details";

const Stack = createNativeStackNavigator();

const VaultStack = createNativeStackNavigator();

function VaultLayout() {
  return (
    <VaultStack.Navigator>
      <VaultStack.Screen
        name="Vault"
        component={Vault}
        options={{ headerTitleAlign: "center" }}
      />
      <VaultStack.Screen
        name="Details"
        component={Details}
        options={{
          headerTitleAlign: "center",
          headerBackVisible: false,
        }}
      />
    </VaultStack.Navigator>
  );
}

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(FIREBASE_AUTH, (user) => {
      setUser(user);
    });
    return unsubscribe;
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        {user ? (
          <Stack.Screen
            name="Vault Stack"
            component={VaultLayout}
            options={{ headerShown: false }}
          />
        ) : (
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
