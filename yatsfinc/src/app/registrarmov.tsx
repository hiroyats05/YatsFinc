import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Switch } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const bancos = ['Nubank', 'Inter'];
const tiposPagamento = ['Débito', 'Crédito', 'Pix'];

export default function RegistrarMov() {
	const [banco, setBanco] = useState('');
	const [tipoPagamento, setTipoPagamento] = useState('');
	const [fixo, setFixo] = useState(false);
	const [nome, setNome] = useState('');
	const [valor, setValor] = useState('');
	const [data, setData] = useState('');
	const [variacao, setVariacao] = useState('');
	const [nomeFixo, setNomeFixo] = useState('');
	const [valorFixo, setValorFixo] = useState('');
	const [dataFixo, setDataFixo] = useState('');

	return (
		<ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
			<Text style={styles.title}>registrar movimentação</Text>
			<View style={styles.input}>
				<Picker
					selectedValue={banco}
					onValueChange={setBanco}
					dropdownIconColor="#B9B9B9"
					style={{ color: '#B9B9B9', width: '100%', height: 50 }}
				>
					<Picker.Item label="Selecione o banco" value="" color="#232B2B" />
					{bancos.map((b) => (
						<Picker.Item key={b} label={b} value={b} color="#0E1111" />
					))}
				</Picker>
			</View>
			<TextInput style={styles.input} placeholder="Tipo de pagamento" placeholderTextColor="#B9B9B9" value={tipoPagamento} onChangeText={setTipoPagamento} />
			<View style={styles.switchRow}>
				<Text style={styles.label}>Gasto é fixo?</Text>
				<Switch value={fixo} onValueChange={setFixo} thumbColor={fixo ? '#B9B9B9' : '#444'} trackColor={{ true: '#B9B9B9', false: '#444' }} />
			</View>
			{!fixo && (
				<>
					<TextInput style={styles.input} placeholder="Nome" placeholderTextColor="#B9B9B9" value={nome} onChangeText={setNome} />
					<TextInput style={styles.input} placeholder="Valor" placeholderTextColor="#B9B9B9" value={valor} onChangeText={setValor} keyboardType="numeric" />
					<TextInput style={styles.input} placeholder="Dia / Mês" placeholderTextColor="#B9B9B9" value={data} onChangeText={setData} />
				</>
			)}
			{fixo && (
				<>
					<TextInput style={styles.input} placeholder="Dia / Mês até Dia / Mês" placeholderTextColor="#B9B9B9" value={dataFixo} onChangeText={setDataFixo} />
					<TextInput style={styles.input} placeholder="Variação mensal do valor" placeholderTextColor="#B9B9B9" value={variacao} onChangeText={setVariacao} />
					<TextInput style={styles.input} placeholder="Nome" placeholderTextColor="#B9B9B9" value={nomeFixo} onChangeText={setNomeFixo} />
					<TextInput style={styles.input} placeholder="Valor" placeholderTextColor="#B9B9B9" value={valorFixo} onChangeText={setValorFixo} keyboardType="numeric" />
					<TextInput style={styles.input} placeholder="Dia / Mês" placeholderTextColor="#B9B9B9" value={data} onChangeText={setData} />
				</>
			)}
			<TouchableOpacity style={styles.addButton}>
				<Text style={styles.addButtonText}>+</Text>
			</TouchableOpacity>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		flexGrow: 1,
		backgroundColor: '#0E1111',
		paddingHorizontal: 24,
		paddingTop: 32,
		alignItems: 'center',
	},
	title: {
		color: '#B9B9B9',
		fontSize: 20,
		fontWeight: 'bold',
		marginBottom: 24,
		alignSelf: 'flex-start',
	},
	input: {
		width: '100%',
		borderWidth: 1,
		borderColor: '#B9B9B9',
		borderRadius: 12,
		padding: 12,
		color: '#fff',
		fontSize: 16,
		marginBottom: 14,
		backgroundColor: '#232B2B',
	},
	switchRow: {
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 14,
		width: '100%',
		justifyContent: 'space-between',
	},
	label: {
		color: '#B9B9B9',
		fontSize: 16,
		fontWeight: 'bold',
	},
	addButton: {
		width: '100%',
		borderWidth: 1,
		borderColor: '#B9B9B9',
		borderRadius: 16,
		padding: 18,
		alignItems: 'center',
		marginTop: 24,
		marginBottom: 32,
	},
	addButtonText: {
		color: '#B9B9B9',
		fontSize: 32,
		fontWeight: 'bold',
	},
});
