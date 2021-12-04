import React, {useEffect, useState} from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Timer = () => {

    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const timerInterval = setInterval( () => {
            setSeconds(seconds => seconds + 1)
        }, 1000);
        return () => {
            clearInterval(timerInterval)
        }
    }, [])

    return (
        <View style={styles.container}>
            <Text>Time: {seconds}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default Timer
