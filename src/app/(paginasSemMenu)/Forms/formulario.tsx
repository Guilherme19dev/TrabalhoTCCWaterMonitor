import{Text,View} from "react-native"
import{useState} from 'react'
import ButtonGo from "./ButtonGo"
import { cadastroStyles } from "@/estilos/cadastroEstiloso"
import ItemF from './itemFormulario'

export default function formularioPagina(){
    return(
        <View style={cadastroStyles.planoDeFundo}>
            <View style={cadastroStyles.areaForms}>
            <Text style={[cadastroStyles.titleForms,{fontSize:25}]}>Water Monitor</Text>
            <Text style={[cadastroStyles.titleForms,{fontSize:20}]}>Já tem uma conta, se não tem crie uma</Text>

            <ButtonGo 
            onPDestiny="/Forms/criarConta"
            content="Criar Conta"
            />
            
            <ButtonGo 
            onPDestiny="/Forms/login"
            content="Fazer Login"
            />
            
            </View>

        </View>
    )
}
