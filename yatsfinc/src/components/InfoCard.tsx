import React from 'react';
import { View, Text, StyleSheet, Image, ViewStyle } from 'react-native';

interface InfoCardProps {
	saldo: string;
	credito: string;
	totalGasto: string;
	style?: ViewStyle;
}

export default function InfoCard({ saldo, credito, totalGasto, style }: InfoCardProps) {
	return (
		<View style={[styles.card, style]}>
			<Text style={styles.label}>Saldo em conta: <Text style={styles.value}>{saldo}</Text></Text>
			<Text style={styles.label}>Crédito: <Text style={styles.value}>{credito}</Text></Text>
			<Text style={styles.label}>Total gasto: <Text style={styles.value}>{totalGasto}</Text></Text>
		</View>
	);
}

const styles = StyleSheet.create({
	card: {
		backgroundColor: '#232B2B',
		borderRadius: 16,
		padding: 18,
		marginBottom: 12,
		borderWidth: 2,
		borderColor: '#B9B9B9',
		width: '100%',
	},
	label: {
		color: '#B9B9B9',
		fontSize: 15,
		marginBottom: 4,
	},
	value: {
		color: '#fff',
		fontWeight: 'bold',
	},
});
