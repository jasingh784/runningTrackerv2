import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { Button, StyleSheet, Text, View, Pressable } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import NewRunScreen from './NewRunScreen';
import PreviousRun from './components/PreviousRun';
import { myFirebase } from './firebaseConfig';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite'

export default function App() {

  const [running, setRunning] = useState(false);

  useEffect(async () => {
    const db = getFirestore(myFirebase);
    const colectionRef = collection(db, 'runs')
    const snapshot = await colectionRef.getDocs();
    console.log(snapshot);
    return () => {
      cleanup
    }
  }, [])

  const toggleRun = () => {
    setRunning(!running);
  }


  return (
    <View style={styles.container}>
      <View style={styles.upperView}>
        {running ? <NewRunScreen /> : <PreviousRun /> } 
      </View>
      <View style={styles.lowerView}>
        <Pressable onPress={toggleRun} >
          <MaterialCommunityIcons name="run-fast" size={36} color="black" />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e6ae1',
  },
  upperView:{
    flex: 2,
    backgroundColor: '#1e6ae1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lowerView:{
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopStartRadius: 225,
    borderTopEndRadius: 225,
    overflow: 'hidden',
    borderWidth: 1,
  }
});
