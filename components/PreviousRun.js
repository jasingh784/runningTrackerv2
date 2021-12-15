import React, {useState, useEffect} from 'react'
import { View, StyleSheet } from 'react-native'
import { getPreviousRun } from '../utils';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Text, Title } from 'react-native-paper';

const PreviousRun = () => {

    const [prevRun, setPrevRun] = useState({});

    useEffect(async() => {
        let previousRun = await getPreviousRun();
        setPrevRun(previousRun);
        console.log(previousRun);

    }, [])


    return (
        <View style={styles.container}>
            <Title style={styles.titleText}>PREVIOUS RUN</Title>

            <View style={styles.row}>
                <View style={styles.infoIconView}>
                    <Text style={styles.infoText}> Feb 2 2021</Text>
                    <MaterialCommunityIcons name="calendar" size={36} color="white" />
                </View>

                <View style={styles.infoIconView}>
                    <Text style={styles.infoText}> {prevRun? prevRun["totalDistance"]: 0} Miles</Text>
                    <MaterialCommunityIcons name="road-variant" size={36} color="white" />            
                </View>
            </View>

            <View style={styles.row}>
                <View style={styles.infoIconView}>
                    <Text style={styles.infoText}> 8 Mph</Text>
                    <MaterialCommunityIcons name="speedometer" size={36} color="white" />
                </View>
                
                <View style={styles.infoIconView}>
                    <Text style={styles.infoText}> 10 mins</Text>
                    <MaterialCommunityIcons name="timer" size={36} color="white" />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-evenly',
    },
    infoIconView: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    infoText: {
        fontSize: 24,
        color: 'white',
        fontWeight: 'bold',
    },
    titleText: {
        color: 'white',
        fontStyle: 'italic',
        fontSize: 32,
        alignSelf: 'center',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    }
})

export default PreviousRun
