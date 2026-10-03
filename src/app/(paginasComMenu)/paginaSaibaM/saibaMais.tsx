import {Text, View, StyleSheet,Image} from "react-native";
import {Saiba} from "../../../estilos/saibaMaisEstilo"


export default function SaibaMais(){
    return(
<View style={geral.estilo}>
        <View style={[Saiba.viewGeral,{borderTopWidth:50,borderTopColor:'#3201e4'}]}>
            <View style={[Saiba.viewSec,Saiba.textosPagina,Saiba.textoPrinc]}>
                 <Image  style={Saiba.imagem}source={require("../../../../assets/images/LogoWater.png")}></Image>
                <Text style={[Saiba.textoTexto,Saiba.txtTextoP]}>Ola Tudo bem com Vocês,sejam muito bem vindos a minha segunda pagina dentro do app expo router</Text>
            </View>
                <View style={[Saiba.textosPagina,Saiba.textoSec]}>
                    <Text style={[Saiba.textoTexto,Saiba.txtTextoS]}>
                            Nós somos a Water Monitor e estamos aqui para facilitar e tornar possível a indentificação de problemas 
                        e vazamentos de água evitando maiores prejuizos  e até danos a sua propriedade por meio de nosso monitorador 
                        de fluxo qu e indentifica padrões e com isso consegue perceber quando houver um consumo fora do comum e assim 
                        te alertar, para que você nosso cliente possa investigar, ou até chamar nossa equipe de profissionais irá fazer 
                        uma análise rigorosa em sua residência para prevenir gastos inde sejados, para fazer este acompanhamento mesmo 
                        sem nenhuma anomalia temos o nosso app que te informara dos gastos  diários, semanais e mensais.
                    </Text>
                </View>
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