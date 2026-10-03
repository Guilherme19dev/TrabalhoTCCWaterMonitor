import {View,Text} from 'react-native'
import { grafEstilo } from '@/estilos/graficosEstilosos'

type propINfoDosGraf = {
    wordIndvPg:string
    wordIndvSeparator:string
}

export default function InfoDosGraficos({wordIndvPg,wordIndvSeparator}:propINfoDosGraf){
return(
    <View style={grafEstilo.informaGraf}>
     <Text style={grafEstilo.txtInfoGraf}>Aqui temos as informações do consumo de água {wordIndvPg}, podemos ver de acordo com as colunas que representam {wordIndvSeparator}, o quanto foi gasto além de podermos ver quais foram {wordIndvSeparator} com o maior nível de consumo </Text>   
    </View>
)
}