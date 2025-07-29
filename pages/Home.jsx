import { View, Text, FlatList, StyleSheet, SafeAreaView , Image, ImageBackground, ScrollView} from 'react-native'
import React from 'react'
import ProductGrid from '../components/ProductGrid';
const Home = () => {
 
   
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <ImageBackground
          source={{
            uri: "https://images.unsplash.com/photo-1610502778270-c5c6f4c7d575?q=80&w=867&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          }}
          style={styles.background}
        >
          <View style={styles.textContainer}>
            <Text style={styles.title}>Welcome to EcoMall</Text>

            <Text style={styles.slogan}> Shop Green, Live Clean. </Text>
          </View>
        </ImageBackground>
        <ProductGrid />
      </ScrollView>
    </SafeAreaView>
  );
}

export default Home


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#008080",
    padding: 20,
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
  background: {
    
    height: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    
  }

});