import {View,Text,Image} from 'react-native'
import {cartao} from '../estilos/cardEstilo'

export default function MenuEmBarra(){
    return(
           <View style={cartao.menuBar}>
                 <Image style={cartao.imagem} source={require('../../assets/images/LogoWaterSemEscrita.png')}></Image>
                 <Text style={cartao.TextMenu}>WaterMonitor</Text>
            </View> 
    )
}