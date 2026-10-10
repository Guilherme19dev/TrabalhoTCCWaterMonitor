import{Text,View,Alert} from "react-native"
import{useState} from 'react'
import ButtonGo from "./ButtonGo"
import { cadastroStyles } from "@/estilos/cadastroEstiloso"
import ItemF from './itemFormulario'
import * as SecureStore from "expo-secure-store";
import {router} from "expo-router"
import { useValidation } from 'react-simple-form-validator';

export default function criaConta(){

    async function enviarInformações() {

if(isFormValid===false){
   Alert.alert(
    "Erro",
    "Email inválido, tente novamente com um email válido.",
    [{text:"OK"}]
   ) 
   return
}
if(!email||!senha||!nome||!numeroAp){
   Alert.alert(
    "Erro",
    "Preencha todos os campos de informações",
    [{text:"OK"}]
   )
   return
}

    const resposta = await fetch("http://192.168.0.18:3000", {

      method: "POST",

      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify({
        email: email,
        senha:senha,
        nome:nome,
        numeroAp:numeroAp,
        login:login,
        criarConta:criarConta
      })

    });

    const dados = await resposta.json();

    console.log(dados.token);
    if(!resposta.ok){
        console.log(dados.erro);
        return;
    }

    
await SecureStore.setItemAsync(
    "token",
    dados.token
);
        console.log("Login realizado!");

        router.replace("/paginaInicio/paginaInicio");

  }

   const [email,setEmail]= useState("")
   const[senha,setSenha] = useState("")
   const [nome,setNome] = useState("")
   const [numeroAp,setNumeroAp] = useState("")
   const login=""
   const criarConta ="criarConta"

   const { isFormValid,} = useValidation({
    fieldsRules: {
      email: { email: true },
    },
    state: { email }
  });


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
            <ItemF
             label="Digite seu Nome"
             placeholder="nome:"
             estado={nome}
             estadoModify={setNome}
             />
            <ItemF
             label="Digite o Numero do aparelho"
             placeholder="numero do aparelho:"
             estado={numeroAp}
             estadoModify={setNumeroAp}
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
