import {View,Text,Image,Pressable} from 'react-native'
import Info from './infoTexto'
import Button from './botaoConta'
import { contaEstilo } from '../../../estilos/contaEstilosa'

export default function conta(){
    return(
        <View>
            <View style={[contaEstilo.geralVConta,{borderTopWidth:50,borderTopColor:'#3201e4'}]}>
              <View style={contaEstilo.infoPrinc}>
                <View style={contaEstilo.imagemP}>
                 <Image></Image>   
                </View>
                <View style={contaEstilo.VTexto}>
                 <Info 
                 titulo="Seu Nome"/>
                 <Info 
                 titulo="Email"/>
                 <Info 
                 titulo="Idade"/>
                 <Info 
                 titulo="Consumo de água"/>
                 <Info 
                 titulo="Numero de série do aparelho"/>
                </View>
              </View>

              <View style={contaEstilo.infoAdc}>
                <View style={contaEstilo.cardDasInfoAdc}>
                <Info titulo="Informações Adicionais" estilo />
                <Info titulo="Informações Claramente Importantes1"/>
                <Info titulo="Informações Claramente Importantes2"/>
                <Info titulo="Informações Claramente Importantes3"/>
                <Info titulo="Informações Claramente Importantes4"/>
                <Info titulo="Informações Claramente Importantes5"/>
                <Info titulo="Informações Claramente Importantes6"/>
                <Info titulo="Informações Claramente Importantes7"/>
                <Info titulo="Informações Claramente Importantes8"/>
                <View style={contaEstilo.viewButton}>
                  <Button titulo="Sair da Conta"
                  rota="Formulário"
                  />
                  <Button titulo= "Trocar de Conta"
                  rota="Login"/>
                </View>
              </View>
              </View>
            </View>
            </View>
    )
}