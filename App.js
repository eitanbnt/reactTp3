import { StatusBar } from 'expo-status-bar';
import { TouchableHighlight, Image, ScrollView, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
//import { useNavigation } from '@react-navigation/native';

export default function App() {
  // const navigation = useNavigation();

  // const handleClick = () => {
  //   navigation.navigate('Cocktail.js');
  // };

  return (
    <View style={styles.background}>
      <ScrollView>
        {data.map((item) => (
          <View key={item.idDrink} style={styles.Cocktail}>
            <TouchableHighlight>
              <Text>
                {item.strDrink}
              </Text>
            </TouchableHighlight>
            <Image source={{
              uri: `${item.strDrinkThumb}`
            }} style={styles.Icon} />
          </View>
        ))}
      </ScrollView>
      <StatusBar style='auto' />
    </View>
  );
}

