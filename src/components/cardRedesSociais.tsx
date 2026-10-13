import {View,Text} from 'react-native'
import {Saiba} from '../estilos/saibaMaisEstilo'

type CardSocialProps = {
    itemSocial:React.ComponentType<any>
    nameClass:string
    txtPrin:string
    txtSec:string
}

export default function CardRedes({itemSocial:ItemSocial,nameClass,txtPrin,txtSec}:CardSocialProps){
    return (
        <View style={Saiba.cardSocial}>
            <View style={Saiba.iconeSocial}>
             <ItemSocial
             name={nameClass}
             size={20}
             color="#1865c9e5"
             />
            </View>
            <View style={Saiba.areatxtSocial}>
                <Text style={Saiba.txtTitle}>{txtPrin}</Text>
                <Text style={Saiba.txtInfo}>{txtSec}</Text>
            </View>
        </View>
    )
}