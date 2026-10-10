import { StyleSheet } from "react-native";

 export const Saiba = StyleSheet.create({
   viewGeral:{
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'flex-start',
    width:'100%',
    height:'100%',
    paddingHorizontal:10,
    paddingTop:35,
    backgroundColor:'#e2e8eb'
   } , 
   viewSec:{
   display:'flex',
   flexDirection:'row',
   },
   textosPagina:{
      display:'flex',
      alignItems:'center',
      boxSizing:'border-box',
      justifyContent:'center',
      marginBottom:10,
      padding:5,
      paddingBottom:10,
      gap:5,      
      borderRadius:5,
      borderWidth:2,
      borderColor:'#14acda',
      backgroundColor:'#ffffff9d'
   },
   textoPrinc:{
      width:'95%',
   },
   textoSec:{
      width:'100%'
   },
   textoTexto:{
      fontWeight:'bold',
      fontFamily:'Arial',
      flexWrap:'wrap',
      color:'#000000d8'

   },
   txtTextoP:{
      fontSize:20,
      width:'65%',
      textAlign:'center',
      
   },txtTextoS:{
       fontSize:19,
       width:'90%',
       textAlign:'justify',
   },
   imagem:{
      height:'95%',
      width:'30%',
      borderRadius:5
   }
})