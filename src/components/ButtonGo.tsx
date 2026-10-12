import { cadastroStyles } from "@/estilos/cadastroEstiloso"
import{Pressable,View,Text}from "react-native"
import { Href,router} from "expo-router"

type buttonEnvProps = {
onPValue?:() => void
onPDestiny?:Href
content:string
}

export default function ButtonGo({onPValue,onPDestiny,content}:buttonEnvProps){
    function redButton(){
         if(onPDestiny){
        router.push(onPDestiny)
    }else if(onPValue){
        onPValue()
    }
    }
    return(
        <View>
           <Pressable onPress={redButton} style={cadastroStyles.buttonStyle}>
            <Text style={cadastroStyles.buttonStyleTxt}>{content}</Text>
            </Pressable> 
        </View>
    )
}