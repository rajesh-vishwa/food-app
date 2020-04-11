import React from "react";
import { StyleSheet, FlatList, ListRenderItem } from "react-native";
import { NavigationStackScreenProps } from "react-navigation-stack";
import { CATEGORIES } from "../data/dummy-data";
import Category from "./../models/category";

import CategoryGridTile from "../componenets/CategoryGridTile";

type TCategoryParams = {};
type TCategoryScreenProps = {};

type TProps = {
  navigation: NavigationStackScreenProps;
};

// const CategoryScreen:React.FC<NavigationStackScreenComponent<
//   TCategoryParams,
//   TCategoryScreenProps
// >>

const CategoryScreen = (props: any) => {
  const { navigation } = props;

  const renderGridItem: ListRenderItem<Category> = ({ item }) => {
    return (
      <CategoryGridTile
        title={item.title}
        color={item.color}
        onSelect={() => {
          navigation.navigate("CategoryMeals", {
            categoryId: item.id,
          });
        }}
      />
    );
  };
  return (
    <FlatList
      keyExtractor={(item: Category, index: number) => item.id}
      numColumns={2}
      data={CATEGORIES}
      renderItem={renderGridItem}
    />
  );
};

CategoryScreen.navigationOptions = (navigationData: any) => {
  // console.log("navigationData", navigationData);
  return { headerTitle: "Meal C" };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
  },
});

export default CategoryScreen;
