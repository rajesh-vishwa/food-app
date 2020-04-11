import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  Platform,
  ListRenderItem,
} from "react-native";
import {
  NavigationStackScreenComponent,
  NavigationStackScreenProps,
} from "react-navigation-stack";

import Colors from "../constants/Colors";
import { CATEGORIES, MEALS } from "./../data/dummy-data";
import Meal from "../models/meal";
import MealItem from "../componenets/MealItem";

type TCategoryMealsParams = { categoryId: string };
type TCategoryMealsScreenProps = {};

type TCategoryMealsProps = {
  navigation: NavigationStackScreenProps<
    TCategoryMealsParams,
    TCategoryMealsScreenProps
  >;
};

// type TCategoryMealsScreenProps = { navigation: NavigationStackProp };

// const CategoryMealsScreen: NavigationStackScreenComponent<
//   TCategoryMealsParams,
//   TCategoryMealsScreenProps
// >

const CategoryMealsScreen = (props: any) => {
  const { navigation } = props;
  const categoryId = navigation.getParam("categoryId");
  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(categoryId) >= 0
  );

  const renderMealItem: ListRenderItem<Meal> = ({ item }) => {
    return (
      <MealItem
        meal={item}
        onMealSelect={() => {
          navigation.navigate("MealDetail", { mealId: item.id });
        }}
      />
    );
  };

  return (
    <View style={styles.screen}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item, index) => item.id}
        renderItem={renderMealItem}
        style={{ width: "100%" }}
      />
    </View>
  );
};

CategoryMealsScreen.navigationOptions = (
  screenProps: NavigationStackScreenProps
) => {
  const categoryId = screenProps.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find((c) => c.id === categoryId);
  return {
    headerTitle: selectedCategory?.title,
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    padding: 10,
  },
});
export default CategoryMealsScreen;
