import {View,TextInput,ScrollView,Alert,Text,Image,Pressable} from 'react-native'
import { useState } from 'react'
import Info from '../../../components/infoTexto'
import Button from '../../../components/botaoConta'
import { contaEstilo } from '../../../estilos/contaEstilosa'
import * as SecureStore from "expo-secure-store";
import { LinearGradient } from 'expo-linear-gradient'
import MenuEmBarra from '@/components/menuBarra'

export default function conta(){
    const [emailU,setEmailU] = useState("")
    const [nomeU,setNomeU] = useState("")
    const [codigoU,setCodigoU] = useState("")
    const titlePerfil = nomeU?.[0]||""
    const nomePerfil=`@${nomeU}`

async function conexão(){
  try{
      const token = await SecureStore.getItemAsync("token");

    if (!token) {
      Alert.alert(
        "Sessão não encontrada",
        "Faça login novamente para carregar seus dados."
      );
      return;
    }
  const info = await fetch("http://192.168.0.18:3000/Pegar-info",
    {
                    method: "GET",
                    headers: {
                        Accept: "application/json",
                        Authorization: `Bearer ${token}`,
                    }
    }
  )

  const resposta =  await info.json()
  
  setEmailU(resposta.resposta.cli_email);
  setNomeU(resposta.resposta.cli_nome);
  setCodigoU(String(resposta.resposta.cli_ProdId));
  
console.log("Status HTTP:", info.status);
console.log("Tipo de conteúdo:", info.headers.get("content-type"));
console.log("Resposta do servidor:", resposta);
  if(info.ok){
    {/*{
    Alert.alert(
  "Conexão feita",
  `Isso é bom ${resposta.resposta.cli_nome}`,
    [{ text:"OK"}] )
     }*/}
  }
  else{
    {/* 
     Alert.alert(
  "Conexão mal sucedida",
`Não é possivel prosseguir pois não possuimos email igual a ${resposta.resposta.cli_email}`,
    [{ text:"OK"}] )
     */}
  }
  }catch(erro){
   console.error("Erro:", erro);
    Alert.alert(
      "Erro",
      "Não foi possível conectar ao servidor."
    );
}
}

conexão()

  return(
        <View>
           <MenuEmBarra/>
           <ScrollView>
            <View style={contaEstilo.geralVConta}>
              <View style={contaEstilo.viewHead}>
              <Text style={[contaEstilo.titulos,{color:'#000', fontWeight:'bold'}]}>Sua conta</Text>
              <Text style={[contaEstilo.VtextTxt,{fontSize:17}]}>Configurações básicas do seu perfil e do seu Water Monitor.</Text>
              </View>
              <View style={contaEstilo.infoPrinc}>
                <LinearGradient
                colors={['#140786e7','#40b0e4']}
                 start={{x:0,y:0}}
                 end={{x:1,y:1}}
                 style={contaEstilo.imagemP}>
                  <Text style={[contaEstilo.titulos,{color:'#fff'}]}>{titlePerfil}</Text>
                 </LinearGradient>
                 <Text>{nomePerfil}</Text>
                <View style={contaEstilo.VTexto}>
                 <Info 
                 titulo="Nome"/>
                 <TextInput style={contaEstilo.inputEstilo} placeholder='Nome' value={nomeU}></TextInput>
                 <Info 
                 titulo="Email"/>
                 <TextInput style={contaEstilo.inputEstilo} placeholder='Email' value={emailU} editable={false}></TextInput>
                 <Info 
                 titulo="Código do produto"/>
                 <TextInput style={contaEstilo.inputEstilo} placeholder='N° do Produto' value={codigoU} editable={false}></TextInput>
               
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
            </ScrollView>
            </View>
    )
}