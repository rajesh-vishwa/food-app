import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import {
  NavigationStackProp,
  NavigationStackScreenProps,
} from "react-navigation-stack";
import { MEALS } from "../data/dummy-data";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../componenets/HeaderButton";

type TMealDetailScreenProps = {
  navigation: NavigationStackProp;
  option: NavigationStackScreenProps;
};

const MealDetailScreen = (props: any) => {
  const { navigation } = props;
  const mealId = navigation.getParam("mealId");
  const selectedMeal = MEALS.find((m) => m.id === mealId);
  return (
    <View style={styles.screen}>
      <Text>{selectedMeal?.title}</Text>
      <Button
        title={" Go to Categories" + mealId}
        onPress={() => {
          navigation.popToTop();
        }}
      />
    </View>
  );
};

MealDetailScreen.navigationOptions = (screenProps: any) => {
  const mealId = screenProps.navigation.getParam("mealId");
  const selectedMeal = MEALS.find((m) => m.id === mealId);
  return {
    headerTitle: selectedMeal?.title,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item title="Favorite" iconName="ios-star" onPress={() => {}} />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
});
export default MealDetailScreen;
