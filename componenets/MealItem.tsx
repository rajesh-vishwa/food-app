import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  FlatList,
  ListRenderItem,
  Platform,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import Meal from "../models/meal";

type TProps = {
  meal: Meal;
  onMealSelect: () => void;
};
const MealItem: React.FC<TProps> = ({ meal, onMealSelect }) => {
  return (
    <View style={styles.mealItem}>
      <TouchableOpacity onPress={onMealSelect}>
        <View>
          <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
            <ImageBackground
              source={{ uri: meal.imageUrl }}
              style={styles.bgImage}
            >
              <View style={styles.titleContainer}>
                <Text style={styles.title} numberOfLines={1}>
                  {meal.title}
                </Text>
              </View>
            </ImageBackground>
          </View>
          <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
            <Text>{meal.duration}m</Text>
            <Text>{meal.complexity.toUpperCase()}</Text>
            <Text>{meal.affordability.toUpperCase()}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mealItem: {
    height: 200,
    width: "100%",
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    overflow: "hidden",
  },
  bgImage: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },
  mealRow: {
    flexDirection: "row",
  },
  mealHeader: {
    height: "85%",
  },
  mealDetail: {
    paddingHorizontal: 10,
    justifyContent: "space-between",
    alignItems: "center",
    height: "15%",
  },
  titleContainer: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    paddingVertical: 5,
    paddingHorizontal: 12,
  },
  title: {
    fontSize: 22,
    fontFamily: "open-sans-bold",
    color: "white",

    textAlign: "center",
  },
});
export default MealItem;
