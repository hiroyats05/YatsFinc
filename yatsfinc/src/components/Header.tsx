

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <TouchableOpacity onPress={() => alert('Perfil pressionado!')}>
          <Image
            source={require('../../assets/header/UserIcon.png')}
            style={styles.profileIcon}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <Text style={styles.username}>Usuário</Text>
      </View>
  <TouchableOpacity style={styles.menuButton} onPress={() => alert('Menu pressionado!')}>
        <Image
          source={require('../../assets/header/Menu.png')}
          style={styles.menuIcon}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#0E1111',
    paddingTop: 60,
    paddingBottom: 16,
    paddingHorizontal: 32,
    width: '100%',
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  username: {
    color: '#B9B9B9',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  profileIcon: {
    width: 72,
    height: 72,
  },
  menuButton: {
    flex: 1,
    alignItems: 'flex-end',
  },
  menuIcon: {
    width: 32,
    height: 32,
  },
});

export default Header;
