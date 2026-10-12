import{View,Text,StyleSheet} from 'react-native'
import { contaEstilo } from '@/estilos/contaEstilosa'

type PropInfo={
titulo:string;
estilo?:boolean;
}

export default function Info({titulo,estilo}:PropInfo){
    return(
        <View>
            <Text style={[contaEstilo.VtextTxt, estilo && contaEstilo.titulos]}>{titulo}</Text>
        </View>
    )
}