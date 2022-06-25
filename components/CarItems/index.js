import { View, Text, ImageBackground } from "react-native";
import React from "react";
import StyledButton from "../StyledButton";
import styles from "./styles";

const CarItem = (props) => {

  const {name ,tagline,taglineCTA,image} = props.car;

  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={image}
        style={styles.image}
      />

      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>Starting at price {tagline} | <Text style={styles.taglineCTA}>{taglineCTA}</Text></Text>
        
      </View>

      <View style={styles.buttonTotal}>
        <StyledButton
          type="primary"
          content={"Custom Order"}
          onPress={() => {
            console.warn("Custom Order was Pressed!");
          }}
        />

        <StyledButton
          type="secondary"
          content={"Existing Inventory"}
          onPress={() => {
            console.warn("Existing Inventory was Pressed!");
          }}
        />
      </View>
    </View>
  );
};

export default CarItem;
