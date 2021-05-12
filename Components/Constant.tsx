import React from "react";
import {StyleSheet, View} from "react-native";
import {TextInput} from 'react-native-paper';

type TypeProps = {
    valueConstant: string
    constant: (c: string) => void
}

export const Constant:React.FC<TypeProps> = (props) =>  {
    return (
        <View>
            <TextInput
                style={styles.input}
                label="Введите постоянную электросчетчика."
                value={props.valueConstant}
                onChangeText={text => props.constant(text)}/>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        textAlign: 'center',
        fontSize: 17,
    }
});
