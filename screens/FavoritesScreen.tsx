import React from "react";
import { View, Text, StyleSheet } from "react-native";

type TFavoritesScreenProps = {};

const FavoritesScreen: React.FC<TFavoritesScreenProps> = ({}) => {
  return (
    <View style={styles.screen}>
      <Text>The Favorites Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
});
export default FavoritesScreen;
