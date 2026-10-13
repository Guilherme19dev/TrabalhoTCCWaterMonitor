import {View,Text,Image} from 'react-native'
import {Saiba} from "../estilos/saibaMaisEstilo"
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

type InfoProps = {
    icone:React.ComponentType<any>
    name:string
    titulo:string
    content:string
}


export default function CardDeInfo({icone:Icone,titulo,name,content}:InfoProps){
    return(
        <View style={Saiba.cardDesign}>
            <View style={Saiba.cardIMG}>
            <Icone
            name={name}
            size={25}
            color="#1865c9e5"
            />
            </View>
            <View style={Saiba.cardTextArea}>
            <Text style={Saiba.cardTxt}>
              {titulo}
            </Text>
            <Text style={Saiba.cardTxtSec}>
            {content}
            </Text>
            </View>
        </View>
    )
}