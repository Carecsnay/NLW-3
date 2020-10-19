import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler'; //botão que faz uma bolinha quando clica em cima, botoes customizados para SOs
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';

interface HeaderProps {
    title: string;
    showCancel?: boolean; //? => não obrigatório
}

export default function Header({ title, showCancel = true }: HeaderProps) {
    const navigation = useNavigation();

    function handleGoBackToAppHomePage() {
        navigation.navigate('OrphanagesMap'); //tela inicial
    }

    return (
        <View style={styles.container}>
            <BorderlessButton onPress={navigation.goBack}>                          {/* Função Voltar para tela anterior  da biblioteca navigation*/}
                <Feather name='arrow-left' size={24} color='#15b6d6' />             {/*botão de voltar*/}
            </BorderlessButton>

            <Text style={styles.title}>{title}</Text>

            { showCancel ? (
                <BorderlessButton onPress={handleGoBackToAppHomePage}>
                    <Feather name='x' size={24} color='#ff669d' />                       {/*botão de fechar fazendo if  a View serve para oculpar o espeço em branco e deixar o nome alinhado no centro , por isso nao pode ser NULL no ELSE */}
                </BorderlessButton>
            ) : (
                    <View />
                )};
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 24,
        backgroundColor: '#f9fafc',
        borderBottomWidth: 1,
        borderColor: '#dde3f0',
        paddingTop: 44,

        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'

    },

    title: {
        fontFamily: 'Nunito_600SemiBold',
        color: '#8fa7b3',
        fontSize: 16,
    }
})