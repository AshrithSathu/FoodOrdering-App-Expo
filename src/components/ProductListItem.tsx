import { StyleSheet, Text, View, Image } from "react-native";
import EditScreenInfo from "@/src/components/EditScreenInfo";
import Colors from "@/src/constants/Colors";
import { Product } from "../types";

const defaultimage = require("../../assets/data/images-pizza/default.png");

type ProductListItemProps = {
  product: Product;
};

const ProductListItem = ({ product }: ProductListItemProps) => {
  // console.log(props);
  return (
    <View style={styles.container}>
      <Image
        source={product.image || defaultimage}
        style={styles.image}
      ></Image>
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>₹{product.price}</Text>
    </View>
  );
};

export default ProductListItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 20,
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
    width: "100%",
    overflow: "visible",
  },
});
