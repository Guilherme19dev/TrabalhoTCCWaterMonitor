import {Tabs} from 'expo-router'
import {View} from 'react-native'
import MenuItem from '../../components/menuItem'
import{styles} from '../../estilos/menuEstilo'
import { FontAwesome5 } from '@expo/vector-icons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';;


export default function Layout(){
    return(
        <View style={{flex:1}}>
           
        <Tabs
        screenOptions={{
            headerShown:false
        }}
        >
            <Tabs.Screen name="paginaInicio/paginaInicio" options={{title:"Home",
                 tabBarIcon: ({ color, size }) => (
            <FontAwesome5
              name="home"
              color={color}
              size={size}
            />
          ),
            }}/>
            <Tabs.Screen name="paginaConta/conta" options={{title:"Conta",
                 tabBarIcon: ({ color, size }) => (
            <FontAwesome5
              name="user"
              color={color}
              size={size}
            />
          ),
            }}/>
            <Tabs.Screen name="paginaSaibaM/saibaMais" options={{title:"Sobre Nós",
                 tabBarIcon: ({ color, size }) => (
            <FontAwesome5
              name="bookmark"
              color={color}
              size={size}
            />
          ),
            }}/>
            <Tabs.Screen name="paginaGraficos/grafico" options={{href:null}}/>
        </Tabs>
        </View>
    )
}