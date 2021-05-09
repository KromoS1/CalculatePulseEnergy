import React from "react";
import {StyleSheet, Text, View} from "react-native";

export const Header = () => {
    return(
      <View style={styles.container}>
          <Text style={styles.text}>Calculate Pulse Energy</Text>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        margin:25,
        marginTop:-150,
        backgroundColor: '#5f9ec7',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        flexBasis:100,
        fontSize: 23,
        paddingLeft: 5,
        alignItems: 'center',
        fontWeight: "normal",
        lineHeight: 22.4,
        color: "#ffffff"
    }
});