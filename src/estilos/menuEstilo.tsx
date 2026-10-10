import { StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    menu:{
     display:'flex',
     flexDirection:'row',
     alignItems:'center',
     justifyContent:'center',
     height:60,
     width:'100%',
     backgroundColor:'#15b1eedc',
     paddingHorizontal:1,
     paddingTop:0,
     borderBottomWidth:10,
     borderTopWidth:5,
     borderTopColor:'transparent',
     gap:2,
     borderBottomColor:'#15b1eedc'
    },
    item:{
        display:'flex',
        height:'100%',
        borderRadius:10,
        backgroundColor:'#15b1eedc',
        alignItems:'center',
        justifyContent:'center',
        borderRightWidth:5,
        borderRightColor:'#15b1eedc',
        borderLeftWidth:3,
        borderLeftColor:'#121438b4',
        borderBottomWidth:2,
        borderBottomColor:'#12143849'
        
    },
    textMenu:{
      color:'#fff',
      display:'flex',
      textAlign:'center',
      textAlignVertical:'center',
      height:'100%',
      width:'100%'
    }
});
