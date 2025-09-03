import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import TabNavigation from "./components/TabNavigation";
import ProductDetails from "./pages/ProductDetails";
import AddProduct from "./pages/AddProduct";
import AdminHome from "./pages/AdminHome";

const Stack = createNativeStackNavigator();


const UserStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Main" component={TabNavigation} />
    <Stack.Screen name="ProductDetails" component={ProductDetails} />
  </Stack.Navigator>
);


const AdminStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="AdminHome" component={AdminHome} />
    <Stack.Screen name="AddProduct" component={AddProduct} />
    
    <Stack.Screen name="ProductDetailsAdmin" component={ProductDetails} />
  </Stack.Navigator>
);

const App = () => {
  
  const user = { role: "user" }; 

  return (
    <NavigationContainer>
      {user.role === "admin" ? <AdminStack /> : <UserStack />}
    </NavigationContainer>
  );
};

export default App;
