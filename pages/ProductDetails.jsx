import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  ScrollView,
} from "react-native";
import React from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
import useCartStore from "../store/cartStore";
const ProductDetails = ({ route }) => {
  const {
    product 
  } = route.params;
  const { addToCart } = useCartStore();
  console.log(route.params.product);
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <SafeAreaView>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <MaterialIcons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>

          <Text style={styles.title}>Product Details</Text>
          <TouchableOpacity
            style={styles.cartButton}
            onPress={() => navigation.navigate("Main", { screen: "Cart" })}
          >
            <AntDesign name="shoppingcart" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <ScrollView>
          {/* Prodcut Image  */}

          <Image source={{ uri: product.image }} style={styles.image} />

          {/* Product Details */}
          <View style={styles.productDetails}>
            {/* main details */}
            <View style={styles.productInfo}>
              <Text style={styles.title}>{product.title}</Text>
              <Text style={styles.title}> ${product.price}</Text>
              <Text style={styles.description}>{product.description}</Text>
            </View>

            {/* extra details */}
            <View style={styles.table}>
              <View style={styles.row}>
                <Text style={styles.label}>Rating </Text>
                <Text style={styles.value}>{product.rating.rate}</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.label}>Category </Text>
                <Text style={styles.value}>{product.category}</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>

      {/* Foteer */}
      <View style={styles.footer}>
        <View style={styles.footerContent}>
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => addToCart(product)}
          >
            <Text style={styles.addButtonText}>Add To Cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  backButton: {
    padding: 10,
  },
  cartButton: {
    padding: 10,
  },
  image: {
    width: "80%",
    height: 200,
    marginHorizontal: "auto",
    marginVertical: 10,
  },
  productDetails: {
    marginHorizontal: "auto",
    marginVertical: 10,
    width: "95%",
  },
  productInfo: {
    display: "flex",
    flexDirection: "column",
    gap: 20,
  },
  description: {
    fontSize: 16,
    color: "#666",
  },
  table: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
    marginVertical: 20,
  },
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderColor: "#ccc",
    paddingVertical: 12,
  },
  label: {
    fontWeight: "bold",
    fontSize: 16,
  },
  value: {
    color: "#666",
    fontSize: 16,
    fontWeight: "bold",
  },
  footer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "#fff",
    paddingBottom: 40,
  },

  footerContent: {
    display: "flex",
    flexDirection: "column",
    marginHorizontal: "auto",
    paddingBottom: 20,
    width: "95%",
  },

  addButton: {
    backgroundColor: "#000",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    width: "100%",
  },
  addButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
