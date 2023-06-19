import { StatusBar } from 'expo-status-bar';
import { TouchableHighlight, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
//import { useNavigation } from '@react-navigation/native';

export default function App() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    Cocktail();
  }, []);

  // const navigation = useNavigation();

  // const handleClick = () => {
  //   navigation.navigate('Cocktail.js');
  // };

  const Cocktail = async () => {
    try {
      fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail&api_key=1`
      )
        .then((response) => response.json())
        .then((json) => {
          if (json) {
            setData(json.drinks);
            //console.log(json.drinks);
          }
        });
    } catch (error) {
      setError(error);
    }
  };

  if (error) {
    return <Text>Une erreur s'est produite: {error.message}</Text>;
  }

  if (!data) {
    return <Text>Chargement en cours...</Text>;
  }

  //console.log(data);

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

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  Icon: {
    marginTop: 10,
    width: 200,
    height: 200,
    borderRadius: 10,
  },
  Cocktail: {
    alignItems: "center",
    marginHorizontal: 10,
    backgroundColor: "#f5f5dc36",
    borderColor: "grey",
    borderRadius: 5,
    borderWidth: 2,
    width: 250,
    height: 270,
    marginBottom: 20,
  },
});
