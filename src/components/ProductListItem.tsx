import { StyleSheet, Text, View, Image, Pressable } from "react-native";
//VIEW ALTERNATIVE IS PRESSABLE WHEN ROUTING CAUSE OF CLICKABALE
import Colors from "@/src/constants/Colors";
import { Product } from "../types";

import { Link } from "expo-router";

const defaultimage = require("../../assets/data/images-pizza/default.png");

type ProductListItemProps = {
  product: Product;
};

const ProductListItem = ({ product }: ProductListItemProps) => {
  // console.log(props);
  return (
    <Link href={`./Menu/${product.id}`} asChild>
      <Pressable style={styles.container}>
        <Image
          source={product.image || defaultimage}
          style={styles.image}
          resizeMode="contain"
        ></Image>
        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.price}>₹{product.price}</Text>
      </Pressable>
    </Link>
  );
};

export default ProductListItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 20,
    flex: 1,
    maxWidth: "50%",
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    marginVertical: 10,
  },
  price: {
    color: Colors.light.tint,
    fontWeight: "bold",
  },
  image: {
    height: 200,
    width: "100%",
    // aspectRatio: 1,
    // overflow: "visible",
  },
});
