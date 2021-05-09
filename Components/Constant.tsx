import React from "react";
import {NativeSyntheticEvent, StyleSheet, Text, TextInput, TextInputChangeEventData, View} from "react-native";

type TypeProps = {
    valueConstant: string
    constant: (con: string) => void
}

export const Constant:React.FC<TypeProps> = (props) =>  {
    const onChangeHandlerConstant = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
        props.constant(e.nativeEvent.text);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Введите постоянную электросчетчика:</Text>
            <TextInput value={props.valueConstant}
                       onChange={onChangeHandlerConstant}
                       style={styles.input}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#5f9ec7',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -45,
    },
    text: {
        margin: 5,
        marginLeft: 65,
        fontSize: 22,
        paddingLeft: 5,
        alignItems: 'center',
        fontWeight: "normal",
        lineHeight: 22.4,
        color: "#ffffff"
    },
    input: {
        marginTop:5,
        height:25,
        width: 100,
        textAlign: 'center',
        backgroundColor: '#DDDDDD',
        borderBottomColor: '#000000',
        borderRadius: 6
    }
});
