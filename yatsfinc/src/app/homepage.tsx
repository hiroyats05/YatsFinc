import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from '../components/Header';
import Hotbar from '../components/Hotbar';
import FinanceCard from '../components/FinanceCard';

export default function App() {
            return (
                <View style={styles.container}>
                    <Header />
                    <View style={styles.divider} />
                    <FinanceCard
                        logo={require('../../assets/LogoBank/nubankLogo.png')}
                        bankName="Nubank"
                        saldo="R$XX,xx"
                        credito="R$XX,xx"
                        despesas="R$XX,xx"
                        caixinhas="R$XX,xx"
                    />
                    <FinanceCard
                        logo={require('../../assets/LogoBank/interLogo.png')}
                        bankName="Inter"
                        saldo="R$XX,xx"
                        credito="R$XX,xx"
                        despesas="R$XX,xx"
                        caixinhas="R$XX,xx"
                        style={{ marginTop: 20 }}
                    />
                    <View style={{ flex: 1 }} />
                    <Hotbar />
                </View>
            );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0E1111',
    },
    divider: {
        width: '100%',
        height: 3,
        backgroundColor: '#B9B9B9',
        alignSelf: 'center',
        opacity: 0.3,
        marginTop: 4,
        marginBottom: 4,
    },
});