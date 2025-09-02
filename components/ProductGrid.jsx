import React, { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import useCartStore from "../store/cartStore";
import { useNavigation } from "@react-navigation/native";
const API_URL = "https://fakestoreapi.com/products";

const ProductGrid = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { addToCart } = useCartStore();
  const navigation = useNavigation();
  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await fetch(API_URL);
      const data = await response.json();

      setProducts(data);
    } catch (error) {
      setError(error);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) {
    return (
      <View>
        <ActivityIndicator size="large" />
        <Text>Loading products..</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View>
        <Text>Error fetching products: {error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Products</Text>
      <FlatList
        data={products}
        keyExtractor={(product, index) => index.toString()}
        contentContainerStyle={styles.products}
        scrollEnabled={false}
        renderItem={({ item: product }) => (
          <TouchableOpacity
            style={styles.product}
            onPress={() => navigation.navigate("ProductDetails", {product})}
          >
            <Image
              source={{
                uri: product?.image,
              }}
              style={{ width: 150, height: 150 }}
            />
            <View style={styles.productInfo}>
              <Text style={styles.itemName}>{product?.title}</Text>
              <Text style={styles.itemPrice}>${product?.price}</Text>
            </View>
            <View style={styles.footer}>
              <Text style={styles.rating}>⭐ {product?.rating?.rate}</Text>

              <TouchableOpacity
                style={styles.cart}
                onPress={() => addToCart(product)}
              >
                <Text style={styles.cartText}>Add To Cart</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default ProductGrid;

const styles = StyleSheet.create({
  container: {
    width: "90%",
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 20,
    textAlign: "center",
  },
  product: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    width: "100%",
  },
  products: {
    flexDirection: "column",
    gap: 20,
    marginVertical: 20,
  },
  productInfo: {
    display: "flex",
    flexDirection: "column",
    gap: 5,
  },
  itemName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  itemPrice: {
    fontSize: 16,
    color: "#666",
    fontWeight: "bold",
  },
  cart: {
    backgroundColor: "#007070",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  cartText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  footer: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  rating: {
    fontWeight: 700,
    fontSize: 20,
  },
});
