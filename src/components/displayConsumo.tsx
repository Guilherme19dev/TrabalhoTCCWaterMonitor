
import { useEffect, useRef } from "react";
import {
  Animated,
  Easing,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Svg, { Path } from "react-native-svg";

const LARGURA_ONDA = 300;
const ALTURA_ONDA = 60;
const QUANTIDADE_ONDAS = 4;

const OndaSvg = Animated.createAnimatedComponent(Svg);

// A onda começa e termina na mesma altura.
// As curvas se conectam suavemente entre os períodos.
const CAMINHO_ONDA = [
  "M 0 30",
  "C 25 10, 50 10, 75 30",
  "C 100 50, 125 50, 150 30",
  "C 175 10, 200 10, 225 30",
  "C 250 50, 275 50, 300 30",
  "L 300 60",
  "L 0 60",
  "Z",
].join(" ");

export default function CardConsumo() {
  const deslocamentoX = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    deslocamentoX.setValue(0);

    const animacao = Animated.loop(
      Animated.timing(deslocamentoX, {
        toValue: -LARGURA_ONDA,
        duration: 7000,
        easing: Easing.linear,
        useNativeDriver: true,
        isInteraction: false,
      })
    );

    animacao.start();

    return () => animacao.stop();
  }, [deslocamentoX]);

  return (
    <View style={styles.card}>
      {/* Ondas contínuas no fundo */}
      <View pointerEvents="none" style={styles.areaOndas}>
        <Animated.View
          style={[
            styles.faixaOndas,
            {
              width: LARGURA_ONDA * QUANTIDADE_ONDAS,
              transform: [{ translateX: deslocamentoX }],
            },
          ]}
        >
          {Array.from({ length: QUANTIDADE_ONDAS }, (_, index) => (
            <View key={index} style={styles.itemOnda}>
              <OndaSvg
                width="100%"
                height="100%"
                viewBox={`0 0 ${LARGURA_ONDA} ${ALTURA_ONDA}`}
                preserveAspectRatio="none"
              >
                <Path
                  d={CAMINHO_ONDA}
                  fill="#FFFFFF"
                  fillOpacity={0.30}
                />
              </OndaSvg>
            </View>
          ))}
        </Animated.View>
      </View>

      {/* Textos permanecem acima das ondas */}
      <View style={styles.conteudo}>
        <Text style={styles.subtitulo}>
          Saldo de consumo · hoje
        </Text>

        <View style={styles.linhaValor}>
          <Text style={styles.valor}>312</Text>
          <Text style={styles.unidade}> litros</Text>
        </View>

        <Text style={styles.descricao}>
          Fluxo atual: 6,2 L/min · sensor conectado ao produto WM
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "100%",
    height: 172,
    borderRadius: 28,
    overflow: "hidden",
    backgroundColor: "#008DB5",
    justifyContent: "center",
  },

  areaOndas: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 45,
    overflow: "hidden",
  },

  faixaOndas: {
    height: "100%",
    flexDirection: "row",
  },

  itemOnda: {
    width: LARGURA_ONDA,
    height: "100%",
  },

  conteudo: {
    paddingHorizontal: 24,
    zIndex: 1,
  },

  subtitulo: {
    color: "#D9F3FF",
    fontSize: 14,
  },

  linhaValor: {
    flexDirection: "row",
    alignItems: "baseline",
    marginTop: 2,
  },

  valor: {
    color: "#FFFFFF",
    fontSize: 48,
    fontWeight: "bold",
  },

  unidade: {
    color: "#D9F3FF",
    fontSize: 22,
    fontWeight: "600",
  },

  descricao: {
    color: "#D9F3FF",
    fontSize: 14,
    marginTop: 4,
  },
});
