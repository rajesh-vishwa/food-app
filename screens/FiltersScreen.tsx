import React from "react";
import { View, Text, StyleSheet } from "react-native";

type TFiltersScreenProps = {};

const FiltersScreen: React.FC<TFiltersScreenProps> = ({}) => {
  return (
    <View style={styles.screen}>
      <Text>The Filters Screen</Text>
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
export default FiltersScreen;
