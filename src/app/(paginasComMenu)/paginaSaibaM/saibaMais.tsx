import {Text, View, ScrollView,StyleSheet,Image} from "react-native";
import {Saiba} from "../../../estilos/saibaMaisEstilo"
import { LinearGradient } from "expo-linear-gradient";
import MenuEmBarra from "@/components/menuBarra";
import CardDeInfo from "@/components/cardDeInformações";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import CardRedes from "@/components/cardRedesSociais";

export default function SaibaMais(){
    return(
<View style={geral.estilo}>
        <View>  
   <MenuEmBarra/>
         <ScrollView style={{height:'100%'}}>
            <View style={Saiba.conteudo}>
            <LinearGradient
            colors={['#140786e7','#40b0e4']}
            start={{x:0,y:0}}
            end={{x:1,y:1}}
            style={[Saiba.viewSec,Saiba.textosPagina]}
            >
                <Text style={[Saiba.textoTexto,Saiba.txtTextoS]}>
                    QUEM SOMOS
                </Text>
                <Text style={[Saiba.textoTexto,Saiba.txtTextoP,Saiba.textoPrinc]}>
                    Cada gota conta. A gente mede todas.
                    </Text>
                    <Text style={[Saiba.textoTexto,Saiba.txtTextoS]}>
                   A Water Monitor nasceu para tornar visível algo que quase ninguém enxerga: 
                   quanta água usamos. Unimos um sensor físico instalado na sua tubulação a este app, 
                   para que você acompanhe o fluxo, descubra vazamentos cedo e reduza o desperdício
                    </Text>
                    </LinearGradient>
                    <View style={{gap:50}}>
                    <View style={{gap:20}}>
                    <CardDeInfo 
                        icone={MaterialCommunityIcons}
                        name="water-outline"
                        titulo="Medição Precisa"
                        content="Nosso sensor acompanha o fluxo de água em tempo real."/>
                    <CardDeInfo 
                        icone={Ionicons}
                        name="shield-checkmark-outline"
                        titulo="Alertas de vazamento"
                        content="Avisamos quando algo foge do seu padrão de uso."/>
                    <CardDeInfo 
                        icone={FontAwesome5}
                        name="leaf"
                        titulo="Consumo consciente"
                        content="Dados claros para economizar água e dinheiro."/>
                      </View>
                      <View style={{gap:15}}>
                        <Text style={Saiba.tituloRedes}>Nossas redes</Text>
                        <CardRedes
                        itemSocial={Entypo}
                        nameClass="instagram"
                        txtPrin="Instagram"
                        txtSec="@watermonitor"
                        />
                        <CardRedes
                        itemSocial={AntDesign}
                        nameClass="tik-tok"
                        txtPrin="Tik-Tok"
                        txtSec="@watermonitor"
                        />  
                        <CardRedes
                        itemSocial={Feather}
                        nameClass="twitter"
                        txtPrin="Twitter"
                        txtSec="@watermonitor"
                        />
                        <CardRedes
                        itemSocial={AntDesign}
                        nameClass="youtube"
                        txtPrin="You Tube"
                        txtSec="Water Monitor"
                        />
                        <CardRedes
                        itemSocial={MaterialCommunityIcons}
                        nameClass="web"
                        txtPrin="Site"
                        txtSec="watermonitor.com.br"
                        />
                      </View>
                      </View>
                      </View>
            </ScrollView>   
             </View>
             
</View>
    )
}
const geral = StyleSheet.create({
    estilo:{
      width:'100%',
      display:'flex',
      flexDirection:'column'

    }
})