import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import useProductStore from "../store/productStore";

export default function AddProduct() {
  const [itemName, setItemName] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  const { products, addProduct } = useProductStore();

  const addItem = () => {
    if (itemName && itemPrice) {
      addProduct({ itemName, itemPrice });
      console.log(products);
      setItemName("");
      setItemPrice("");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Add New Product</Text>

      <Text style={styles.slogan}>List a new product for sale </Text>

      <TextInput
        placeholder="Name of Good"
        placeholderTextColor="#888"
        value={itemName}
        onChangeText={setItemName}
        style={styles.input}
      />

      <TextInput
        placeholder="Price"
        placeholderTextColor="#888"
        keyboardType="numeric"
        value={itemPrice}
        onChangeText={setItemPrice}
        style={styles.input}
      />

      <Button title="Add Goods" onPress={addItem} />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#008080",
    padding: 20,
  },
  title: {
    fontSize: 30,
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
    textShadowColor: "#000",
    textShadowRadius: 5,
    letterSpacing: 1.5,
  },
  input: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  itemText: {
    color: "#fff",
    fontSize: 16,
    marginVertical: 5,
    fontFamily: "Arial",
    textTransform: "uppercase",
    letterSpacing: 2,
    lineHeight: 22,
  },
  slogan: {
    fontWeight: "900",
    fontSize: 19,
    color: "#e0f7fa",
    fontStyle: "italic",
    marginBottom: 20,
    textAlign: "center",
    fontFamily: "Arial",
  },
});
