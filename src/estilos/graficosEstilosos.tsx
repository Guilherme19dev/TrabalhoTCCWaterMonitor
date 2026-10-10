import { StyleSheet } from "react-native"




export const grafEstilo = StyleSheet.create({
    geralView:{
        height:'100%',
        width:'100%',
        display:'flex',
        alignItems:'center',
        justifyContent:'flex-start',
        backgroundColor:'#e2e8eb',
        gap:20,
        paddingTop:40,
        paddingHorizontal:10
        
    },
    viewGraphic:{
        height:'40%',
        width:'100%',
        borderWidth:2,
        borderColor:'#16c2cedc',
        borderRadius:10,
        backgroundColor:'#fff'
    },
    informaGraf:{
        width:'100%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        padding:10,
        paddingBottom:20,
        paddingTop:5,
        backgroundColor:'#20cddacb',
        borderRadius:10,
        borderWidth:3,
        borderColor:'#fff'
    },
    txtInfoGraf:{
      width:'100%',
      justifyContent:'center',
      alignItems:'center',
      textAlign:'justify',
      fontSize:25,
      fontWeight:'bold',
      color:'#fff',
      wordWrap:'wrap'
    }
})