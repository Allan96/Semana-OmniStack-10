import React, { useEffect, useState } from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';
import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location';
import MapView, { Marker, Callout } from 'react-native-maps';

function Main({navigation}) {
    const [currentRegion, setCurrentRegion] = useState(null);
    
    useEffect( () => {
        async function loadInitialPosition(){
            const { granted } = await requestPermissionsAsync();

            if(granted){
                const {coords} = await getCurrentPositionAsync({
                    enableHighAccuracy: true,
                });

                const {latitude, longitude } = coords;

                setCurrentRegion({
                    latitude, 
                    longitude,
                    latitudeDelta: 0.04,
                    longitudeDelta: 0.04,
                })
            }
        }

        loadInitialPosition();
    }, []);
    if(!currentRegion){
        return null;
    }
    return (
            <MapView initialRegion={currentRegion} style={styles.map}>
                <Marker coordinate={{ latitude: -23.5613942, longitude: -46.7329778}}>
                    <Image style={styles.avatar} source={{ uri: 'https://avatars0.githubusercontent.com/u/31579883?s=460&v=4'}}/>
                    <Callout onPress={() => { 
                        navigation.navigate('Profile', {
                            github_username:   'Allan96'
                        })

                    }}>
                        <View style={styles.callout}>
                            <Text style={styles.devName}>Allan Souza</Text>
                            <Text style={styles.devBio}>Um louco por programação e matemática, que sempre procura saber ainda mais sobre essas duas áreas.</Text>
                            <Text style={styles.devTechs}>ReactJs, RectNative Node.js</Text>
                        </View>
                    </Callout>
                </Marker>
            </MapView>
        )
};

const styles = StyleSheet.create({
    map: {
        flex: 1,
    },
    avatar: {
        width: 54,
        height: 54,
        borderRadius: 4,
        borderWidth: 4,
        borderColor: '#FFF'
    },
    callout:{
        width: 260,
    },
    devName:{
        fontWeight: 'bold',
        fontSize: 16,
    },
    devBio:{
        color: '#666',
        marginTop: 5,
    },
    devTechs:{
        marginTop: 5,
    }
})

export default Main;