import { View, Text, ImageBackground } from "react-native";
import React from "react";
import style from "./styles";

const CarItem = () => {
  return (
    <View style={style.carContainer}>
      <ImageBackground
        source={require("../../assets/images/ModelX.jpeg")}
        style={style.image}
      />

      <View style={style.titles}>
        <Text style={style.title}>Model S</Text>
        <Text style={style.subtitle}>Starting at price $70000</Text>
      </View>
    </View>
  );
};

export default CarItem;
