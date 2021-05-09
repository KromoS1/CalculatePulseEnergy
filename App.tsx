import React, {useState} from 'react';
import {Alert, StyleSheet, View} from 'react-native';
import {Timer} from "./Components/Timer";
import {Header} from "./Components/Header";
import {Constant} from "./Components/Constant";

export default function App() {
  const [valueTime, setValueTime] = useState<string>("");
  const [valueConstant, setValueConstant] = useState<string>("");

  const saveConstant = (con: string) => {
    setValueConstant(con);
  }

  const restart = () => {
    setValueTime("");
    setValueConstant("");
  }

  const calculate = () => {
    const pulseInHour = (60 / Number(valueTime)) * 60;
    const resultCalc = (pulseInHour * 100) / Number(valueConstant);
    const resultKWH = resultCalc / 100;
    Alert.alert(String(resultKWH) + " kWh");
  }

  const saveTime = (second: number, mlsecond: number) => {
    const timeString = `${second}.${mlsecond}`;
    setValueTime(timeString);
  }

  return (
      <View style={styles.container}>
        <Header/>
        <Constant constant={saveConstant} valueConstant={valueConstant}/>
        <Timer saveTime={saveTime} restartValueConst={restart} calculate={calculate}/>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5f9ec7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    margin: 5,
    fontSize: 18,
    paddingLeft: 5,
    alignItems: 'center',
    fontWeight: "normal",
    lineHeight: 22.4,
    color: "#ffffff"
  }
});
