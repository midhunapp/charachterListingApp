import React, {useState, useEffect} from 'react';
import {
  ActivityIndicator,
  View,
  StyleSheet,
  Image
} from 'react-native';
import * as RootNavigation from '../config/RootNavigation'
import {retrieveUserSession} from '../config/UserSession'
const SplashScreen = (props:any) => {

    //State for ActivityIndicator animation
    const [animating, setAnimating] = useState(true);
    
    useEffect(() => {
      setTimeout(() => {
        setAnimating(false);

        //alert(retrieveUserSession());
        RootNavigation.navigate( "Login" as never, {} as never);
            

      }, 5000);
    }, []);

    return (
        <View style={styles.container}>
         
          <ActivityIndicator
            animating={animating}
            color='tomato'
            size="large"
            style={styles.activityIndicator}
          />
        </View>
      );
    };
    export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  activityIndicator: {
    alignItems: 'center',
    height: 80,
  },
});