import{View,Text,StyleSheet} from 'react-native'
import {styles} from '../../../estilos/menuEstilo'
import {Link,Href} from 'expo-router'
type itensMenu={
pagina:string
linkPagina:"/paginaGraficos/grafico"|"/Forms/login"|"/Forms/criarConta"|"/paginaSaibaM/saibaMais"|"/paginaConta/conta"|"/Forms/formulario"
objetoWater?:number
palavraInd?:string
separadorDeConsumo?:string
}

export default function menuItem({objetoWater,separadorDeConsumo,palavraInd,linkPagina,pagina}:itensMenu){
    return(
    <View style={{flex:1}}>
     <Link href={{pathname:linkPagina,params:{
        objeto:objetoWater,
        palavra1:palavraInd,
        palavra2:separadorDeConsumo
     }}} style={[styles.item,styles.textMenu]}>{pagina}</Link>   
    </View>
    )  
}



