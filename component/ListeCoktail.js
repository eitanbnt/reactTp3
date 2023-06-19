import { FlatList, StyleSheet, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import Cocktail from './Cocktail';

export default function ListeCoktail(cocktail) {
    const renderItem = ({ item }) => {
        return (
            <Cocktail
                nom={item.strDrink}
                img={item.strDrinkThumb}
            />
        );
    };

    return (
        <FlatList style={styles.background}
            data={cocktail}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
        />
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
});
