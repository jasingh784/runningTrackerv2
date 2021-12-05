import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { Button, StyleSheet, Text, View, Pressable } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import NewRun from './components/NewRun';
import PreviousRun from './components/PreviousRun';
import { myFirebase } from './firebaseConfig';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite'

export default function App() {

  const [running, setRunning] = useState(false);

  //FIREBASE TESTING. THIS CODE WORKS. CONNECTS TO FIREBASE AND GETS DOCS
  //CURRENLTY NO USE FOR IT
  
  //plan is to move all firebase related code into seperate folder.

  // useEffect(async () => {
  //   const db = getFirestore(myFirebase);
  //   const runsRef = collection(db, 'runs');
  //   let docSnap = await getDocs(runsRef);

    
  //   console.log(docSnap.docs)
  // }, [])

  const toggleRun = () => {
    setRunning(!running);
  }


  return (
    <View style={styles.container}>
      <View style={styles.upperView}>
        {running ? <NewRun /> : <PreviousRun /> } 
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
    borderTopWidth: 1,
  }
});
