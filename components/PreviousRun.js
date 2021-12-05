import React, {useState, useEffect} from 'react'
import { View, Text } from 'react-native'
import { getPreviousRun } from '../utils';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const PreviousRun = () => {

    const [prevRun, setPrevRun] = useState({});

    useEffect(async() => {
        let previousRun = await getPreviousRun();
        setPrevRun(previousRun);
        console.log(previousRun);

    }, [])


    return (
        <View>
            <Text>PREVIOUS RUN</Text>
            <MaterialCommunityIcons name="map-marker-distance" size={24} color="white" />
            <Text>Distance: {prevRun? prevRun["totalDistance"]: 0} miles</Text>
            <Text>Average Speed: 8 Mph</Text>
            <Text>Time: 10 mins</Text>
        </View>
    )
}

export default PreviousRun
