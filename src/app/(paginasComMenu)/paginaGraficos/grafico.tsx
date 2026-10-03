import {Text,View,StyleSheet} from 'react-native'
import { CartesianChart, Line, Bar, useChartPressState } from "victory-native";
import { useLocalSearchParams,Link } from 'expo-router';
import { useFont } from "@shopify/react-native-skia";
import {Water} from '../../../listaDeAgua'
import {grafEstilo} from '../../../estilos/graficosEstilosos'
import InfoDosGraficos from './mostradorDeInfo'

export default function Graphics(){
  const {objeto} = useLocalSearchParams()
    const indice = Number(objeto)
      const {palavra1} = useLocalSearchParams()
        const palvraTexto = String(palavra1)
          const {palavra2} = useLocalSearchParams()
            const palvraTexto2 = String(palavra2)
                const font = useFont(
                  require("../../../../assets/Fonts/Roboto_Condensed-Bold.ttf"),
                  20
                );

 const valores = Water[indice].gasto.map((arr,index)=>{
      return{
       val:arr,
       dal:Water[indice].dia[index] 
      }
})

const { state } = useChartPressState({
  x:"0",
  y:{
    val:0
  }
})


    return (
        <View style={[grafEstilo.geralView,{borderTopWidth:50,borderTopColor:'#3201e4'}]}>
          <View style={grafEstilo.viewGraphic}>
          <CartesianChart
        data={valores}
        xKey="dal"
        yKeys={["val"]}
        chartPressState={state}
        domain={{y:[0]}}
        domainPadding={{ left: 50, right: 50,top:10 }}
         xAxis={{
          font:font,
          tickCount: valores.length,
          formatXLabel: (valor) => `${valor}`,
  }}
      > 

      {({ points,chartBounds }) => (
            <Bar
              points={points.val}
              color="blue"
              chartBounds={chartBounds}
            />
          )}

      </CartesianChart>
      </View>
        <InfoDosGraficos 
         wordIndvPg={palvraTexto}
         wordIndvSeparator={palvraTexto2}/>
        </View>
    )
}




