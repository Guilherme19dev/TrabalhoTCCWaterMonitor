import {View,Text,Pressable} from 'react-native'
import{Link,Href} from 'expo-router'
import {cartao} from '../../../estilos/cardEstilo'
type tituloProps={
    titulo:string
    conteudo:string
    consumo:string
    cor:string
    linkRel:"../paginaGraficos/grafico"
    objetoWater:number
    palavraInd:string
    separadorDeConsumo:string

}

export default function card({ linkRel,separadorDeConsumo,palavraInd,cor,titulo,conteudo,objetoWater,consumo}:tituloProps){
    return(
        <View style={[cartao.cardPrincipal,{backgroundColor:cor}]}>
            <View style={[cartao.titulo,{backgroundColor:cor}]}>
                <Text style={[cartao.textoGeral,cartao.tituloCartao]}>{titulo}</Text>
            </View> 
                <View style={[cartao.conteudo,{backgroundColor:cor}]}>
                    <Text style={[cartao.textoGeral,cartao.conteudoCartao]}>{conteudo}</Text>
                </View>
                        <View style={[cartao.gasto,{backgroundColor:cor}]}>   
                            <Text style={[cartao.textoGeral,cartao.gastoCartao]}>{consumo}</Text>
                             <Pressable style={cartao.bot}>
                                <Link href={{
                                        pathname:linkRel, 
                                        params:{objeto:objetoWater,palavra1:palavraInd,palavra2:separadorDeConsumo}}}>Saiba Mais</Link>
                            </Pressable>
                        </View>
                           
        </View>
    )
}