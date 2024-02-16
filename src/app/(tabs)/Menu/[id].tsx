import { useLocalSearchParams } from "expo-router";
import { View, Text, Image, StyleSheet } from "react-native";
import { Stack } from "expo-router";
import products from "@/assets/data/products";

export default function productDetailsScreen() {
  const { id } = useLocalSearchParams();
  const product = products.find((p) => p.id.toString() == id);
  if (!product) return <Text>Product Not Found</Text>;
  return (
    <View>
      <Stack.Screen options={{ title: product.name }} />
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text>₹{product.price}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  image: {
    height: 100,
    width: 100,
  },
  price: {},
});
