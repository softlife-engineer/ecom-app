import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigation from "./components/TabNavigation";
import ProductDetails from "./pages/ProductDetails";


const stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <stack.Navigator screenOptions={{ headerShown: false }}>
        <stack.Screen name="Main" component={TabNavigation} />
        <stack.Screen name="ProductDetails" component={ProductDetails} />
      </stack.Navigator>
      
    </NavigationContainer>
  );
};

export default App;
