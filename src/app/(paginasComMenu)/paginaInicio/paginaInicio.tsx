import { StyleSheet, TextInput,Alert, Pressable, Text, View, ScrollView } from 'react-native';
import Card from './card'


export default function PaginaInicio() {
     console.log(">>> PAGINA INICIO FOI ABERTA <<<");
  return(
  <View style={{paddingTop:0}}>
    <View style={{width:'100%', height:'2%', backgroundColor:'#3201e4',position:'fixed'}}>
            </View>
            <View style={{height:'100%'}}>
     <ScrollView>
          <View style={{paddingTop:90}}>
           <Card 
            cor="#230edb"
            titulo="Consumo por Hora"
            conteudo="Informações básicas1"
            consumo="Consumo de 35 litros"
            linkRel="../paginaGraficos/grafico"
            objetoWater={0}
            palavraInd={"ao longo das horas"}
            separadorDeConsumo={ "as horas"}
            />
           <Card 
            cor="#18a5dd"
            titulo="Consumo Diário"
            conteudo="Informações básicas2"
            consumo="Consumo de 350 litros"
            linkRel="../paginaGraficos/grafico"
            objetoWater={1}
            palavraInd={"diário"}
            separadorDeConsumo={"os dias"}
           />
           <Card 
            cor="#9318cc"
            titulo="Consumo Mensal"
            conteudo="Informações básicas3"
            consumo="Consumo de 3500 litros"
            linkRel="../paginaGraficos/grafico"
            objetoWater={2}
            palavraInd={"mensal"}
            separadorDeConsumo={"os meses"}
           /> 
          </View>
          {/*
    <Text style={texto.aparencia}>Digite seu nome</Text>
    <TextInput placeholder='Digite' style={design.input}></TextInput>
    <Pressable style={botao.appearence} onPress={alertarSobre}>
      <Text>Clique Aqui</Text>
      </Pressable>
      <Pressable style={botao.appearence} onPress={saibaMais}><Text>Saiba Mais</Text></Pressable>
    <Text style={estiloso.componente}>Ola mundo</Text>
    <Text>Bom dia</Text>
    <Text>Como você esta hoje World</Text>*/}
    </ScrollView>
    </View>
  </View>
  
  );
}

function saibaMais(){
Alert.alert(
  "Você clicou em saiba mais",
  "Então você clicou em Saiba Mais",
  [{ text :"Ok"}]
)
}
function alertarSobre(){
Alert.alert(
  "Você clicou no botão",
  "Isso quer dizer que o botão foi clickado",
[{ text:"OK"}] 
)

}
const botao = StyleSheet.create({
    appearence: {
        minHeight: 48,

        width: "80%",
        maxWidth: 360,

        marginTop: 15,

        alignSelf: "center",

        alignItems: "center",
        justifyContent: "center",

        backgroundColor: "#0077B6",

        borderRadius: 8,

        borderWidth: 1,
        borderColor: "#023E8A",

        paddingHorizontal: 20,
        paddingVertical: 10,

        shadowColor: "#0077B6",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.15,
        shadowRadius: 5,
        elevation: 3,
    },
});

const texto = StyleSheet.create({
    aparencia: {
        textAlign: "center",

        fontWeight: "700",

        fontSize: 17,

        color: "#FFFFFF",

        paddingVertical: 10,
        paddingHorizontal: 15,
    },
});
const design = StyleSheet.create({
    input: {
        minHeight: 48,

        width: "95%",
        maxWidth: 600,

        alignSelf: "center",

        backgroundColor: "#FFFFFF",

        paddingHorizontal: 14,
        paddingVertical: 8,

        borderWidth: 1.5,

        borderColor: "#D4E6F1",

        borderRadius: 8,

        fontSize: 18,

        color: "#1A1A2E",

        shadowColor: "#0077B6",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.05,
        shadowRadius: 4,
        elevation: 1,
    },
});
const estiloso = StyleSheet.create({
    componente: {
        width: "90%",
        maxWidth: 600,

        minHeight: 250,

        alignSelf: "center",

        marginTop: 30,

        justifyContent: "center",
        alignItems: "center",

        padding: 20,

        backgroundColor: "#00B4D8",

        borderRadius: 12,

        borderWidth: 1,
        borderColor: "#0077B6",

        shadowColor: "#0077B6",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.15,
        shadowRadius: 10,
        elevation: 4,
    },
});