import React, {useEffect, useState} from "react";
import {StyleSheet, Text, View} from "react-native";
import {Button, IconButton} from "react-native-paper";

type TimeType = {
    restartValueConst: () => void
    saveTime: (second: number) => void
    calculate: () => void
}

export const Timer: React.FC<TimeType> = (props) => {
    const [second, setSecond] = useState<number>(0);
    const [isRunning, setIsRunning] = useState<boolean>(false);
    const [intervalIDSec, setIntervalIDSec] = useState<number>(0);
    const [click, setClick] = useState<boolean>(true);

    useEffect(() => {
        if (isRunning) {
            const idSec = window.setInterval(() => {
                setSecond(second => second + 1);
            }, 1000);
            setIntervalIDSec(idSec);
        } else {
            window.clearInterval(intervalIDSec);
        }
    }, [isRunning]);

    const startButton = () => {
        setIsRunning(true);
        setClick(!click);
    }
    const pauseButton = () => {
        props.saveTime(second);
        setIsRunning(false);
        setClick(!click);
    }
    const resetButton = () => {
        setSecond(0);
        props.restartValueConst()
    }

    return (
        <View style={styles.container}>
            <Text style={styles.textTime}>{second}</Text>
            {click ?
                (
                    <View style={{flexDirection: 'row'}}>
                        <IconButton icon="play" color={"#6924ad"} size={50} onPress={startButton}/>
                        <IconButton icon="update" color={"#6924ad"} size={50} onPress={resetButton}/>
                    </View>
                ) : (
                    <View style={{flexDirection: 'row'}}>
                        <IconButton icon={"pause"} color={"#6924ad"} size={50} onPress={pauseButton}/>
                        <IconButton icon="update" color={"#6924ad"} size={50} onPress={resetButton}/>
                    </View>
                )
            }
            <Button style={styles.btn}
                    mode="contained"
                    onPress={() => props.calculate()}>Calculate</Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 35
    },
    btn: {
        alignItems: 'center',
        width: 150,
        height: 40,
        borderWidth: 2,
        borderRadius: 10,
        marginTop: 60
    },
    playAndReset: {
        marginTop: 50,
        flexDirection: "row"
    },
    textBtn: {
        margin: 4,
        fontSize: 19,
        paddingLeft: 5,
        alignItems: 'center',
        fontWeight: "normal",
        lineHeight: 22.4,
        color: "#ffffff"
    },
    textTime: {
        marginTop: 50,
        marginBottom:30,
        fontSize: 30,
        paddingLeft: 5,
        alignItems: 'center',
        fontWeight: "normal",
        lineHeight: 30,
        color: "black"
    }
});

