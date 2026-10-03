import{View,Text,TextInput} from 'react-native'
import { cadastroStyles } from '@/estilos/cadastroEstiloso'

type formsProps={
    label:string,
    placeholder:string
    estado:string
    estadoModify: React.Dispatch<React.SetStateAction<string>>
}
export default function itemF({estado,estadoModify,label,placeholder}:formsProps){
    return(
        <View>
            <Text style={cadastroStyles.labelTxt}>{label}</Text>
            <TextInput style={[cadastroStyles.inputsCadastro,cadastroStyles.txtInput]}
            placeholder={placeholder}
            value={estado}
            onChangeText={estadoModify}
            ></TextInput>
        </View>
    )
}