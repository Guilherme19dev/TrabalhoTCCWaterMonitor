import {Stack} from 'expo-router'
import {View} from 'react-native'
import MenuItem from './paginaInicio/menuItem'
import{styles} from '../../estilos/menuEstilo'

export default function Layout(){
    return(
        <View style={{flex:1}}>
           
        <Stack
        screenOptions={{
            headerStyle:{
                backgroundColor:'#3201e4',
            },
            headerTintColor:'#fff',
        }}
        >
            <Stack.Screen name="paginaInicio/paginaInicio" options={{title:"Home"}}/>
            <Stack.Screen name="paginaConta/conta" options={{title:"Conta"}}/>
            <Stack.Screen name="paginaSaibaM/saibaMais" options={{title:"Sobre Nós"}}/>
            <Stack.Screen name="paginaGraficos/grafico" options={{title:"Graficos De Consumo"}}/>
        </Stack>
          <View style={[styles.menu,{position:'absolute',marginTop:'25%'}]}>
                 <MenuItem 
                 pagina="Saiba Mais" 
                 linkPagina ="/paginaSaibaM/saibaMais"
                 />
                 <MenuItem 
                 pagina="Saldo de Consumo" 
                 linkPagina="/paginaGraficos/grafico"
                 objetoWater={0}
                 palavraInd={"diário"}
                 separadorDeConsumo={"as horas"}
                 />
                 <MenuItem 
                 pagina="Sua Conta" 
                 linkPagina="/paginaConta/conta"/>
                </View>
        </View>
    )
}