import { Text, View } from 'react-native';
import { useEffect, useState } from "react";
import * as SecureStore from "expo-secure-store";
import { router } from 'expo-router';

export default function Home() {
     console.log(">>> INDEX FOI ABERTO <<<");

    const [permitido, setPermitido] = useState<boolean | null>(null);

    async function verificacao() {


        try {

            const token = await SecureStore.getItemAsync("token");

            if (!token) {
                setPermitido(false);
                return;
            }

            const resposta = await fetch(
                "http://192.168.0.18:3000/verificar-sessao",
                {
                    method: "GET",
                    headers: {
                        "Authorization": `Bearer ${token}`,
                        "Content-Type": "application/json"
                    }
                }
            );

            const dados = await resposta.json();

            if (!resposta.ok) {

                console.log(dados.erro);

                await SecureStore.deleteItemAsync("token");

                setPermitido(false);
                return;
            }

            setPermitido(true);

        } catch (erro) {

            console.log("Erro:", erro);
            setPermitido(false);

        }
    }

    // Verifica a sessão quando a página abre
    useEffect(() => {
        verificacao();
    }, []);

    // Decide qual página abrir
    useEffect(() => {

        if (permitido === true) {

            // Sessão válida
            router.replace("/paginaInicio/paginaInicio");

        } else if (permitido === false) {

            // Sessão inexistente ou expirada
            router.replace("/Forms/formulario");

        }

    }, [permitido]);


    // Enquanto verifica
    return (
        <View>
            <Text>Verificando login...</Text>
        </View>
    );
}