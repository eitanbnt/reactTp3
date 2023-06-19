import { Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';


export default function Api() {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        API();
    }, []);

    const API = async () => {
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
        <View>
        </View>
    );
}

