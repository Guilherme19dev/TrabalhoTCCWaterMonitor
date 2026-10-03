import{Alert, Text,View} from "react-native"
import{useState} from 'react'
import ButtonGo from "./ButtonGo"
import { cadastroStyles } from "@/estilos/cadastroEstiloso"
import ItemF from './itemFormulario'
import {router}from "expo-router"
import * as SecureStore from "expo-secure-store"

export default function login(){
      
    async function enviarInformações() {

        if(!email||!senha){
            Alert.alert(
                "Erro",
                "Preencha todos os campos de informações",
                [{text:"OK"}]
            )
            return
        }


    const resposta = await fetch("http://10.145.159.54:3000", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify({
        email: email,
        senha:senha,
        login:login,
        criarConta:criarConta
      })

    });

    const dados = await resposta.json();

    console.log(dados);
     if(!resposta.ok){
            console.log(dados.erro);
            return;
        }

    await SecureStore.deleteItemAsync("token")
        
    await SecureStore.setItemAsync(
        "token",
        dados.token
    );
            console.log("Login realizado!");
    
            router.replace("/paginaInicio/paginaInicio");
  }

   const [email,setEmail]= useState("")
   const[senha,setSenha] = useState("")
   const login="login"
   const criarConta =""
    return(
        <View style={cadastroStyles.planoDeFundo}>
            <View style={cadastroStyles.areaForms}>
            <Text style={[cadastroStyles.titleForms,{fontSize:25}]}>Water Monitor</Text>
            
            <ItemF
             label="Digite seu Email"
             placeholder="email@email.com:"
             estado={email}
             estadoModify={setEmail}
             />
            <ItemF
             label="Digite sua Senha"
             placeholder="senha:"
             estado={senha}
             estadoModify={setSenha}
             />

            <Text style={[cadastroStyles.titleForms,{fontSize:20}]}>Já tem uma conta, se não tem crie uma</Text>

            <ButtonGo 
            onPValue={enviarInformações}
             content="Confirmar"
             />
            
            </View>

        </View>
    )
}
