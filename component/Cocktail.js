import { Image, StyleSheet, Text, View } from 'react-native';

export default function Cocktail({ nom, img }) {

    return (
        <View style={styles.Cocktail}>
            <TouchableHighlight>
                <Text>
                    {nom}
                </Text>
            </TouchableHighlight>
            <Image source={{
                uri: `${img}`
            }} style={styles.Icon} />
        </View>
    );
}

const styles = StyleSheet.create({
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
