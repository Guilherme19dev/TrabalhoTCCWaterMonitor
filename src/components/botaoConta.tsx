import {View,Text,Pressable,StyleSheet} from 'react-native'
import{Link,router}from "expo-router"
import {contaEstilo} from '../estilos/contaEstilosa'
import * as SecureStore from "expo-secure-store"

type buttonProps = {
titulo:string,
rota:string
}

export default function Button({titulo,rota}:buttonProps){
    async function caminho(){
    if(rota==="Login"){
      router.push( "../../Forms/login")
        
    }else if(rota==="Formulário"){
       await SecureStore.deleteItemAsync("token")  
      router.replace ("/")
    }
}
    return(
    <View style={contaEstilo.buttonButton}>
        <Pressable onPress={caminho}>
            <Text style={contaEstilo.buttonTxt}>{titulo}</Text>
        </Pressable>
    </View>
    )
}