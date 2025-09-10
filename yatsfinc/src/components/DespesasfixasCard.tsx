import React from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';

type Status = 'pendente' | 'pago' | 'proximo' | 'vencido';
interface DespesasfixasCardProps {
	titulo: string;
	valor: string;
	vencimento: string;
	status: Status;
	style?: ViewStyle;
}

export default function DespesasfixasCard({ titulo, valor, vencimento, status, style }: DespesasfixasCardProps) {
	let borderColor = '#B9B9B9';

	if (status === 'pendente') borderColor = '#f1ef46ff';
	if (status === 'pago') borderColor = '#3b893e';
	if (status === 'proximo' || status === 'vencido') borderColor = '#A32323';
	return (
		<View style={[styles.card, { borderColor }, style]}>
			<Text style={styles.titulo}>{titulo}</Text>
			<Text style={styles.valor}>{valor}</Text>
			<Text style={styles.vencimento}>vencimento: {vencimento}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	card: {
		backgroundColor: '#232B2B',
		borderRadius: 16,
		padding: 14,
		marginHorizontal: 4,
		borderWidth: 2,
		borderColor: '#B9B9B9',
		width: 180,
        height: 100,
		alignSelf: 'center',
	},
	titulo: {
		color: '#B9B9B9',
		fontSize: 13,
		fontWeight: 'bold',
		marginBottom: 2,
	},
	valor: {
		color: '#fff',
		fontWeight: 'bold',
		fontSize: 15,
		marginBottom: 2,
	},
	vencimento: {
		color: '#B9B9B9',
		fontSize: 12,
	},
});
