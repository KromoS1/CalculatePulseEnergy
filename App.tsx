import React, {useState} from 'react';
import {Alert, StyleSheet, View} from 'react-native';
import {Appbar, Button, Text} from 'react-native-paper';
import {Constant} from "./Components/Constant";
import {Timer} from "./Components/Timer";

export default function App() {
  const [valueTime, setValueTime] = useState<string>("");
  const [valueConstant, setValueConstant] = useState<string>("");
  const [startBtn, setStartBtn] = useState<boolean>(false);
  const [help,setHelp] = useState<boolean>(false);

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
    Alert.alert(`Потребляемая нагрузка счетчика: ${String(resultKWH.toFixed(2))} kWh`);
    console.log(resultKWH);
  }

  const saveTime = (second: number) => {
    const timeString = `${second}`;
    setValueTime(timeString);
  }

  const start = () => {
    setStartBtn(true);
  }

  return (
      <View>
        <Appbar.Header>
          <Appbar.Content title="Calculate Pulse Energy" color={"#ffffff"}/>
          <Text style={styles.textBtnHeader} onPress={() => setHelp(!help)}>Help</Text>
        </Appbar.Header>

        {!help
            ? <Text style={styles.textHelp}>Что бы воспользоваться программой нажмите старт. Дальше вам необходимо ввести постоянную электросчетчика(для электронного счетчика - количество импульсов в одном киловат часу, для индукционного - количество оборотов. После чего с помощью секундомера засеките время между между импульсами(оборотами диска). После нажмите 'calculate' что бы получить текущее потребление электроэнергии счетчиком. Если вам необходимо произвести замер еще раз, нажмите значек обновления на секундомере и повторите операцию(ввод постоянной счетчика и засекание времени. Спасибо что воспользовались данной программой. Что бы выйти из окна помощи нажмите help. Роман=]</Text>
            :   !startBtn
                  ? <Button style={styles.btn}
                  mode="contained"
                  onPress={() => start()}>Start</Button>
                  :
                  <View>
                    <Constant constant={saveConstant} valueConstant={valueConstant}/>
                    <Timer saveTime={saveTime} restartValueConst={restart} calculate={calculate}/>
                  </View>

        }

      </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    marginTop: 300,
    marginLeft: 130,
    width: 100
  },
  textBtnHeader: {
    color: "#ffffff",
    fontSize: 15,
  },
  textHelp:{
    color: "#000000",
    fontSize:22,
    textAlign:"center"
  }

});
