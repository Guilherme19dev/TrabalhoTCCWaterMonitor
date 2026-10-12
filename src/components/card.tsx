import {View,Text,Pressable} from 'react-native'
import{Link,Href} from 'expo-router'
import { FontAwesome5 } from '@expo/vector-icons';
import {cartao} from '../estilos/cardEstilo'
import { LinearGradient } from 'expo-linear-gradient';
import BarraProgresso from "./barraDeProgresso"

type tituloProps={
    titulo:string
    conteudo:string
    consumo:number
    tipoDeConsumo:string
    cor:string
    linkRel:"../paginaGraficos/grafico"
    objetoWater:number
    palavraInd:string
    separadorDeConsumo:string

}

export default function card({ linkRel,separadorDeConsumo,palavraInd,cor,titulo,conteudo,objetoWater,tipoDeConsumo,consumo}:tituloProps){
    return(
        <View style={[cartao.cardPrincipal,{backgroundColor:cor}]}>
            <View style={[cartao.titulo]}>
                <View style={cartao.icone}>
            <FontAwesome5
                    name="calendar-alt"
                    size={25}
                    color="#1865c9e5"
                />
                </View>
                <Text style={[cartao.textoGeral,cartao.tituloCartao,{color:'#000000a4'}]}>{titulo}</Text>
            </View> 
                <View style={[cartao.conteudo,{backgroundColor:cor,flexDirection:'column'}]}>
                    <View style={[cartao.conteudo,{flexDirection:'row'}]}>
                        <Text style={[cartao.textoGeral,cartao.gastoCartao,{color:'#000'}]}>{consumo}</Text>
                        <Text style={[cartao.unidadeMed,cartao.textoUni]}>{tipoDeConsumo}</Text>
                        </View>
                         <BarraProgresso
                          progresso={consumo}
                          />
                </View>
                        <View style={[cartao.gasto,{backgroundColor:cor}]}>   
                             <LinearGradient
                             colors={['#1dc4e2', '#16a6e9']}
                             start={{ x: 0, y: 0.5 }}
                             end={{ x: 1, y: 0.5 }}
                             style={cartao.bot}>
                             <Pressable>
                                <Link style={{color:'#fff'}} href={{
                                        pathname:linkRel, 
                                        params:{objeto:objetoWater,palavra1:palavraInd,palavra2:separadorDeConsumo}}}>Saiba Mais</Link>
                            </Pressable>
                            </LinearGradient>
                        </View>
                           
        </View>
    )
}