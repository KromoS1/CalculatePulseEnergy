import React, {useEffect, useState} from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";

type TimeType = {
    restartValueConst: () => void
    saveTime: (second: number, mlSecond: number) => void
    calculate: () => void
}


export const Timer: React.FC<TimeType> = (props) => {
    const [second, setSecond] = useState<number>(0);
    const [isRunning, setIsRunning] = useState<boolean>(false);
    const [mlSecond, setMlSecond] = useState<number>(0);
    const [intervalIDSec, setIntervalIDSec] = useState<number>(0);
    const [intervalIDMlSec, setIntervalIDMlSec] = useState<number>(0);
    const [click, setClick] = useState<boolean>(true);

    useEffect(() => {
        if (isRunning) {
            const idSec = window.setInterval(() => {
                setSecond(second => second + 1);
            }, 1000);
            const idMlSec = window.setInterval(() => {
                setMlSecond(mlSecond => mlSecond < 100 ? mlSecond + 1 : 0);
            }, 10);
            setIntervalIDSec(idSec);
            setIntervalIDMlSec(idMlSec);
        } else {
            window.clearInterval(intervalIDSec);
            window.clearInterval(intervalIDMlSec);
        }
    }, [isRunning]);

    const startButton = () => {
        setIsRunning(true);
        setClick(!click);
    }
    const pauseButton = () => {
        props.saveTime(second, mlSecond);
        setIsRunning(false);
        setClick(!click);
    }
    const resetButton = () => {
        setMlSecond(0);
        setSecond(0);
        props.restartValueConst()
    }

    return (
        <View style={styles.container}>
            <Text style={styles.textTime}>{second}:{mlSecond}</Text>
            {click ?
                (
                    <TouchableOpacity style={styles.btn}
                                      onPress={startButton}>
                        <Text style={styles.textBtn}>Play</Text>
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity style={styles.btn}
                                      onPress={pauseButton}>
                        <Text style={styles.textBtn}>Pause</Text>
                    </TouchableOpacity>
                )
            }
            <TouchableOpacity style={styles.btn}
                              onPress={resetButton}>
                <Text style={styles.textBtn}>Reset</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}
                              onPress={props.calculate}>
                <Text style={styles.textBtn}>Calculate</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#5f9ec7',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15
    },
    btn: {
        alignItems: 'center',
        backgroundColor: "#1eaf39",
        borderColor: "#5538c7",
        width: 101,
        height: 40,
        borderWidth: 2,
        borderRadius: 10,
        marginTop: 50
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
        marginTop: 30,
        fontSize: 30,
        paddingLeft: 5,
        alignItems: 'center',
        fontWeight: "normal",
        lineHeight: 30,
        color: "#ffffff"
    }
});

