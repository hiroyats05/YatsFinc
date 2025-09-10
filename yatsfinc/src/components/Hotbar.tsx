import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../app';


const Hotbar = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <TouchableOpacity>
          <Image source={require('../../assets/hotbar/Dollar_layout.png')} style={styles.icon} resizeMode="contain" />
        </TouchableOpacity>
        <View style={styles.centerButtonWrapper}>
          <Image source={require('../../assets/hotbar/Circ_layout.png')} style={styles.circle} resizeMode="contain" />
          <TouchableOpacity
            style={styles.plusButton}
            onPress={() => {
              if (navigation && typeof navigation.navigate === 'function') {
                navigation.navigate('registrarmov');
              }
            }}
          >
            <Image source={require('../../assets/hotbar/Plus_layout.png')} style={styles.plusIcon} resizeMode="contain" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <Image source={require('../../assets/hotbar/bar_layout.png')} style={styles.icon} resizeMode="contain" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    left: 0,
    backgroundColor: 'transparent',
    alignItems: 'center',
    zIndex: 10,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#353839',
    borderRadius: 32,
    paddingHorizontal: 24,
    paddingVertical: 12,
    marginBottom: 16,
    width: '92%',
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  icon: {
    width: 36,
    height: 36,
    marginHorizontal: 4,
  },
  centerButtonWrapper: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    width: 64,
    height: 64,
    marginHorizontal: 4,
  },
  circle: {
    width: 64,
    height: 64,
    position: 'absolute',
    top: 0,
    left: 0,
  },
  plusButton: {
    width: 64,
    height: 64,
    alignItems: 'center',
    justifyContent: 'center',
  },
  plusIcon: {
    width: 32,
    height: 32,
  },
});

export default Hotbar;
