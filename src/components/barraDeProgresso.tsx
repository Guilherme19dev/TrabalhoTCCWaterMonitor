
import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

type Props = {
  progresso: number;
};

export default function BarraProgresso({
  progresso,
}: Props) {
  // Impede valores menores que 0% ou maiores que 100%
  const porcentagem = Math.max(
    0,
    Math.min(progresso, 100)
  );

  return (
    <View style={estilos.container}>
      <View style={estilos.fundo}>
         <LinearGradient
             colors={[ '#1f83e0','#28b8d1']}
             start={{x:0, y:0.5}}
             end={{x:1,y:0.5}}
              style={[
            estilos.preenchimento,
            { width: `${porcentagem}%` },
          ]}
        >
        <View
         
        />
        </LinearGradient>
      </View>
      <View style={estilos.cabecalho}>
        <Text style={estilos.porcentagem}>
          {porcentagem}
        </Text>
        <Text style={estilos.porcentagem}>% da meta</Text>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    width: "100%",
    gap: 8,
  },

  cabecalho: {
    flexDirection: "row",
    justifyContent: "flex-start",
    gap:2,
    alignItems: "center",
  },

  titulo: {
    fontSize: 16,
    color: "#333333",
  },

  porcentagem: {
    fontSize: 16,
    color: "#272a2b9f",
  },

  fundo: {
    height: 12,
    width: "100%",
    backgroundColor: "#DDE5E7",
    borderRadius: 10,
    overflow: "hidden",
  },

  preenchimento: {
    height: "100%",
    borderRadius: 10,
  },
});
