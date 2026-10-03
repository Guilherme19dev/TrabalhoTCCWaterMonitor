import { Stack } from "expo-router";

export default function Layout() {
    return (
        <Stack
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#3201e4",
                },
                headerTintColor: "#fff",
            }}
        >
            <Stack.Screen
                name="Forms/login"
                options={{
                    title: "Login",
                }}
            />

            <Stack.Screen
                name="Forms/criarConta"
                options={{
                    title: "Criar Conta",
                }}
            />

            <Stack.Screen
                name="Forms/formulario"
                options={{
                    title: "Cadastro",
                }}
            />
        </Stack>
    );
}