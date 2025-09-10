import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import InfoCard from '../components/InfoCard';
import DespesasfixasCard from '../components/DespesasfixasCard';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function Movimentacoes() {
  const navigation = useNavigation();
  const route = useRoute();
  const banco = route.params?.banco || 'nubank';
  const info = route.params?.info || { saldo: 'R$XX,xx', credito: 'R$XX,xx', totalGasto: 'R$XX,xx' };
  const despesas = route.params?.despesas || [
    { titulo: 'despesa fixa #1', valor: 'R$XX,xx', vencimento: 'D/M', status: 'pago' },
    { titulo: 'despesa fixa #2', valor: 'R$XX,xx', vencimento: 'D/M', status: 'pendente' },
    { titulo: 'despesa fixa #3', valor: 'R$XX,xx', vencimento: 'D/M', status: 'proximo' },
  ];
  const bankConfig: Record<string, { logo: any; style?: object }> = {
    nubank: {
      logo: require('../../assets/LogoBank/nubankLogo.png'),
      style: styles.logo,
    },
    inter: {
      logo: require('../../assets/LogoBank/interLogo.png'),
      style: [styles.logo, { width: 60, height: 60 }],
    },
  };
  const logoSource = bankConfig[banco]?.logo || bankConfig['nubank'].logo;
  const logoStyle = bankConfig[banco]?.style || bankConfig['nubank'].style;
  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Image source={require('../../assets/movimentacoes/back_layout.png')} style={styles.backIcon} resizeMode="contain" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Movimentação da conta</Text>
  <Image source={logoSource} style={logoStyle} resizeMode="contain" />
      </View>
      <View style={styles.saldoCardWrapper}>
        <InfoCard saldo={info.saldo} credito={info.credito} totalGasto={info.totalGasto} />
  </View>
      <Text style={styles.despesasfixastitle}>Despesas Fixas</Text>
      <View style={{ marginBottom: 16, paddingHorizontal: -16 }}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={true}
          contentContainerStyle={styles.despesasScrollContent}
          snapToAlignment="start"
          decelerationRate="fast"
        >
          {despesas.map((d, idx) => (
            <DespesasfixasCard
              key={idx}
              titulo={d.titulo}
              valor={d.valor}
              vencimento={d.vencimento}
              status={d.status}
            />
          ))}
        </ScrollView>
      </View>
      <View style={styles.movTitleRow}>
        <Text style={styles.movTitle}>Movimentações</Text>
        <TouchableOpacity>
          <Image source={require('../../assets/movimentacoes/calendario_layout.png')} style={styles.setIconImg} resizeMode="contain" />
        </TouchableOpacity>
      </View>
      <View style={styles.movList}>
        <Image source={require('../../assets/movimentacoes/fluxoCard.png')} style={styles.movItemImg} resizeMode="contain" />
        <Image source={require('../../assets/movimentacoes/fluxoCard.png')} style={styles.movItemImg} resizeMode="contain" />
        <Image source={require('../../assets/movimentacoes/fluxoCard.png')} style={styles.movItemImg} resizeMode="contain" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0E1111',
    paddingHorizontal: 16,
    paddingTop: 32,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    justifyContent: 'space-between',
  },
  backButton: {
    padding: 8,
  },
  backIcon: {
    width: 48,
    height: 48,
  },
  headerTitle: {
    color: '#B9B9B9',
    fontSize: 16,
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'left',
  },
  logo: {
    width: 40,
    height: 40,
  },
  saldoCardWrapper: {
    width: '100%',
    alignSelf: 'center',
    marginRight: 5,
    marginLeft: 5,
    marginBottom: 2,
  },
  saldoCardImg: {
    width: '100%',
    height: 130,
    alignSelf: 'center',
  },
  saldoText: {
    color: '#B9B9B9',
    fontSize: 15,
    marginBottom: 2,
  },
  saldoValor: {
    color: '#fff',
    fontWeight: 'bold',
  },
  despesasfixastitle: {
    color: '#B9B9B9',
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  despesasScrollContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingHorizontal: 2,
  },
  despesaCardImg: {
    width: 180,
    height: 110,
    marginHorizontal: 4,
    alignSelf: 'center',
  },
  despesaTitle: {
    color: '#B9B9B9',
    fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  despesaValor: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
  },
  despesaVenc: {
    color: '#B9B9B9',
    fontSize: 12,
  },
  movTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    marginTop: 8,
  },
  movTitle: {
    color: '#B9B9B9',
    fontSize: 16,
    fontWeight: 'bold',
    flex: 1,
  },
  setIconImg: {
    width: 32,
    height: 32,
    marginLeft: 8,
  },
  movList: {
    gap: 12,
  },
  movItemImg: {
    width: '100%',
    height: 50,
    marginBottom: 12,
    alignSelf: 'center',
  },
});
