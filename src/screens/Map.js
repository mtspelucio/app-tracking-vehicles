import { useEffect, useState, useRef } from 'react';
import { StyleSheet, View, Text, SafeAreaView } from 'react-native';
import MapView, { Marker } from 'react-native-maps'
import { requestForegroundPermissionsAsync, getCurrentPositionAsync, watchPositionAsync, LocationAccuracy } from 'expo-location';
import { collection, query, where, onSnapshot } from 'firebase/firestore';
import { db } from '../services/firebase.config';

export default function Map({ userData }) {
    const [location, setLocation] = useState(null);
    const [dataVehicles, setDataVehicles] = useState([]);

    const mapRef = useRef(null);
    async function requestLocationPermissions(){
        const { granted } = await requestForegroundPermissionsAsync();
        
        if (granted){
            const currentPosition = await getCurrentPositionAsync();
            setLocation(currentPosition);
            
        } 
    }

    useEffect(() => {
        requestLocationPermissions();
    },[])

    useEffect(() => {
        const q = query(collection(db, "vehicles"), where("idUser", "==", userData.idUser));
        
        const subscribe = onSnapshot(q, (querySnapshot) => {
        const data = querySnapshot.docs.map(doc => {
            return {
            id: doc.id,
            ...doc.data()
            }
        });
        
        setDataVehicles(data);
        });
        
        return () => subscribe();
    },[])

    // useEffect(() => {
    //     watchPositionAsync({
    //         accuracy: LocationAccuracy.Highest,
    //         timeInterval: 1000,
    //         distanceInterval: 1
    //     }, (response) => {
    //         setLocation(response)
    //         mapRef.current?.animateCamera({
    //             //pitch: 0, //angulaçao da camera
    //             center: response.coords
    //         })
    //     })
    // },[])

    return (
        <SafeAreaView style={styles.container}>
            {
                location &&
                <MapView
                    ref={mapRef} 
                    style={styles.map} 
                    initialRegion={{
                        latitude: location.coords.latitude,
                        longitude: location.coords.longitude,
                        latitudeDelta: 0.005,
                        longitudeDelta: 0.005,
                    }}
                    rotateEnabled={false}
                    scrollEnabled={true}
                    showsPointsOfInterest={false}
                    showsBuildings={false}
                    showsUserLocation={true}
                    loadingEnabled={true}
                >
                    {
                        dataVehicles.map((element, index) => (
                            <Marker 
                                key={index}
                                coordinate={{
                                    latitude: element.latitude,
                                    longitude: element.longitude,
                                }}
                            >
                                <View style={styles.marker}>
                                    <Text style={styles.markerTextShine} >{element.placa}</Text>
                                    <Text style={styles.markerText} >▼</Text>
                                </View>
                            </Marker>
                        ))
                    }
                </MapView>
            }
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f4f4f4',
      alignItems: 'center',
      justifyContent: 'center',
    },
    map: {
        flex: 1,
        width: '100%',
        marginTop: 35,
    },
    marker: {
        alignItems: 'center',
    },
    markerText: {
        color: 'green',
    },
    markerTextShine: {
        backgroundColor: 'green',
        color: '#fff',
        padding: 3,
        borderRadius: 5,
    }
  });