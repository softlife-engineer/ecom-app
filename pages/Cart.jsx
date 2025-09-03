import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
import React from "react";
import useCartStore from "../store/cartStore";

const Cart = () => {
  const { cartItems, clearCart, removeFromCart } = useCartStore();

  const total = cartItems
    .reduce((sum, item) => sum + Number(item.price), 0)
    .toFixed(2);
  const itemCount = cartItems.length;

  if (cartItems.length === 0) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Your Cart is Empty</Text>
      </SafeAreaView>
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>🛒 Your Cart</Text>
        <View style={styles.summaryCard}>
          <Text style={styles.summaryText}>
            Items: <Text style={styles.summaryValue}>{itemCount}</Text>
          </Text>
          <Text style={styles.summaryText}>
            Total: <Text style={styles.summaryValue}>${total}</Text>
          </Text>
        </View>
        <FlatList
          data={cartItems}
          keyExtractor={(product) => product.id.toString()}
          contentContainerStyle={styles.products}
          scrollEnabled={false}
          renderItem={({ item: product }) => (
            <View style={styles.productCard}>
              <Image
                source={{ uri: product?.image }}
                style={styles.productImage}
                resizeMode="contain"
              />
              <View style={styles.productInfo}>
                <Text style={styles.itemName}>{product.title}</Text>
                <Text style={styles.itemPrice}>${product.price}</Text>
                <TouchableOpacity
                  style={styles.removeBtn}
                  onPress={() => removeFromCart(product.id)}
                >
                  <Text style={styles.removeBtnText}>Remove</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
        <TouchableOpacity style={styles.clearBtn} onPress={() => clearCart()}>
          <Text style={styles.clearBtnText}>Clear Cart</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f6f8fa",
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#222",
    marginTop: 30,
    marginBottom: 10,
    textAlign: "center",
    letterSpacing: 1.5,
    textShadowColor: "#e0e0e0",
    textShadowRadius: 4,
  },
  summaryCard: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 18,
    marginVertical: 10,
    marginHorizontal: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 3,
  },
  summaryText: {
    fontSize: 18,
    color: "#444",
    fontWeight: "600",
  },
  summaryValue: {
    color: "#007070",
    fontWeight: "bold",
    fontSize: 20,
  },
  products: {
    gap: 18,
    marginVertical: 18,
    paddingBottom: 10,
  },
  productCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 14,
    marginHorizontal: 8,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  productImage: {
    width: 90,
    height: 90,
    borderRadius: 12,
    marginRight: 16,
    backgroundColor: "#f0f0f0",
  },
  productInfo: {
    flex: 1,
    flexDirection: "column",
    gap: 6,
  },
  itemName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#222",
    marginBottom: 2,
  },
  itemPrice: {
    fontSize: 16,
    color: "#007070",
    fontWeight: "600",
    marginBottom: 8,
  },
  removeBtn: {
    backgroundColor: "#ff4d4f",
    paddingVertical: 7,
    paddingHorizontal: 18,
    borderRadius: 8,
    alignSelf: "flex-start",
    marginTop: 2,
  },
  removeBtnText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15,
    letterSpacing: 0.5,
  },
  clearBtn: {
    backgroundColor: "#007070",
    paddingVertical: 14,
    borderRadius: 14,
    marginHorizontal: 8,
    marginTop: 18,
    marginBottom: 30,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  clearBtnText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
    letterSpacing: 1,
    textTransform: "uppercase",
  },
});
