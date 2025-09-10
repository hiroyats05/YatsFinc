import React from 'react';
import { View, Text, StyleSheet, Image, ImageSourcePropType, TouchableOpacity} from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../app';


type FinanceCardProps = {
  logo: ImageSourcePropType;
  bankName: string;
  saldo: string;
  credito: string;
  despesas: string;
  caixinhas: string;
  style?: object;
};

const FinanceCard = ({ logo, bankName, saldo, credito, despesas, caixinhas, style }: FinanceCardProps) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <TouchableOpacity
      style={[styles.cardContainer, style]}
      activeOpacity={0.85}
      onPress={() => navigation.navigate('movimentacoes', { banco: bankName.toLowerCase() })}
    >
      <View style={styles.headerRow}>
        <Image source={logo} style={styles.logo} resizeMode="contain" />
        <Text style={styles.bankName}>{bankName}</Text>
      </View>
      <View style={styles.infoBox}>
        <Text style={styles.infoText}>Saldo: <Text style={styles.value}>{saldo}</Text></Text>
        <Text style={styles.infoText}>Crédito: <Text style={styles.value}>{credito}</Text></Text>
        <Text style={styles.infoText}>Despesas fixas: <Text style={styles.value}>{despesas}</Text></Text>
        <Text style={styles.infoText}>Caixinhas: <Text style={styles.value}>{caixinhas}</Text></Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#232323',
    borderRadius: 20,
    padding: 20,
    marginHorizontal: 24,
    marginTop: 24,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 4,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  logo: {
    width: 48,
    height: 48,
    marginRight: 10,
  },
  bankName: {
    color: '#B9B9B9',
    fontSize: 20,
    fontWeight: 'bold',
    flex: 1,
  },
  infoBox: {
    borderWidth: 1,
    borderColor: '#B9B9B9',
    borderRadius: 12,
    padding: 12,
    backgroundColor: 'rgba(0,0,0,0.15)',
  },
  infoText: {
    color: '#B9B9B9',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  value: {
    color: '#B9B9B9',
    fontWeight: 'bold',
  },
});

export default FinanceCard;
