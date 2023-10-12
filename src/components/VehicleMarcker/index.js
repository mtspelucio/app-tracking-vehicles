import React, { useRef } from 'react';
import { Marker } from 'react-native-maps'
import { Icon, IconArea } from './styles';

export function VehicleMarcker({ cordinate, plate}) {
    const markerRef = useRef();
    
    return (
        <Marker cordinate={cordinate} ref={markerRef}>
            <IconArea>
                <Icon size={35} source={require('../../assets/pin.png')}/>
            </IconArea>
        </Marker>
    );
}