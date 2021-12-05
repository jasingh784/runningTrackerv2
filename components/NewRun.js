import React, {useState, useEffect} from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import * as Location from 'expo-location';
import { getDistance } from '../utils';
import Timer from './Timer';
import { storeRun } from '../utils';


export default function NewRun() {
  const [route, setRoute] = useState([]);
  const [errorMsg, setErrorMsg] = useState(null);
  const [speed, setSpeed] = useState(0);
  const [totalDistance, setTotalDistance] = useState(0);


  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      locationSubscription = await Location.watchPositionAsync({accuracy: Location.Accuracy.BestForNavigation, distanceInterval: 5}, locationUpdated);
    })();

    return () => {
      locationSubscription.remove();
    }

  }, []);

  //this effect runs every time a new coord is added to the route array.
  //it calls a function to calculate the distance between two points. it then adds the 
  //result to the total distance. 
  useEffect(() => {
    if(route.length >= 2) {
      distBetweenLastPoints = getDistance(route[route.length - 1]["latitude"], 
                  route[route.length - 2]["latitude"],
                  route[route.length - 1]["longitude"],
                  route[route.length - 2]["longitude"] );
        
      setTotalDistance(totalDistance => totalDistance + distBetweenLastPoints)
    }
    return ()=> {
      //not sure if there is any clean up in this effect. i dont think so.
      
    }
  }, [route])


  //get location and add entry into the route array. This array contains points
  //that can be used to map out the route.
  const locationUpdated = (locObject) => {
    console.log('inside locationupdated')
    console.log(locObject)

    setRoute(oldRoute => [...oldRoute, {
      latitude: locObject.coords.latitude,
      longitude: locObject.coords.longitude,
    }]);

    setSpeed(locObject.coords.speed);

  }

  //this function is called when user presses End Run.
  //it puts all the data for the run into one object and 
  //then stores it in local storage. it only stores the last run
  //also remves the location subscription so we app can stop tracking 
  //location
  const endRun = () => {
    let run = {route, totalDistance, speed}
    console.log(JSON.stringify(run))
    storeRun(run);
    locationSubscription.remove();
  }


  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (route) {
    text = JSON.stringify(route);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>{Math.round((speed * 2.2369) * 100) / 100} mph</Text>
      <Text>Distance Travelled: {route ? totalDistance : 0} miles</Text>
      <Timer />
      <Button title="End Run" onPress={endRun}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    alignItems: 'center',
    justifyContent: 'center',
  },
});

