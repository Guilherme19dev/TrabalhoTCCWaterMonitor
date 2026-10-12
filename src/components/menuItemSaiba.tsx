import{View,Text,StyleSheet} from 'react-native'
import {styles} from '../../../estilos/menuEstilo'
import {Link,Href} from 'expo-router'
type itensMenu={
pagina:string
linkPagina:Href
}

export default function menuItem({linkPagina,pagina}:itensMenu){
    return(
    <View>
     <Link href={linkPagina} style={[styles.item,styles.textMenu]}>{pagina}</Link>   
    </View>
    )  
}



