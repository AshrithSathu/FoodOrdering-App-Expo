import { View } from "react-native";
import products from "@/assets/data/products";
import ProductListItem from "@/src/components/ProductListItem";

export default function MenuScreen() {
  return (
    <View>
      {products.map((product) => (
        <ProductListItem product={product} key={product.id} />
      ))}
    </View>
  );
}
