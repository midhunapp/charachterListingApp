import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginContainer from '../Container/LoginContainer'
import Homescreen from '../screens/Home'
import CharacterListingContainer from '../Container/CharacterListingContainer'
import ListingScreen from '../screens/ListingScreen'
import SplashScreen from '../screens/SplashScreen'
import { navigationRef } from '../config/RootNavigation';
import { TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CharacterDetailScreen from '../screens/CharacterDetailsScreen'
import SearchCharacterContainer from '../Container/SearchCharacterContainer'
import NavigationHeaderRight from './NavigationHeaderRight';
const Stack = createNativeStackNavigator();

const Router=(props:any) =>
{
  
    
 
    return (
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          // Hiding header for Splash Screen
          options={{headerShown: false}}
        />
          <Stack.Screen name="Login" component={LoginContainer}  />
          <Stack.Screen name="Home"  component={Homescreen} 
          options={{ 
            headerTitle: "" ,
            headerLeft: (props) => <HeaderLeft/>,
            headerRight: () => <NavigationHeaderRight />,
            headerStyle: {
              backgroundColor: 'tomato'
              
            },
           
          }} />
          <Stack.Screen name="ListingScreen" component={ListingScreen} options={{headerShown: false}} />
          <Stack.Screen name="CharacterListingContainer" component={CharacterListingContainer} options={{headerShown: false}} />
          <Stack.Screen name="CharacterDetailScreen" component={CharacterDetailScreen} options={{headerTitle:''}}/>
          <Stack.Screen name="SearchCharacterContainer" component={SearchCharacterContainer} options={{headerShown: false}} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
 
  
  const HeaderRight=(props:any) =>{
    const {logoutRequest }= props
    const logout=()=>{
      alert('logout')
      alert(logoutRequest)
      alert(JSON.stringify(props))
      logoutRequest();
    }
    return (
      <View >
        <TouchableOpacity onPress={logout}>
      <Icon name="logout" size={20} color="#900" />
      </TouchableOpacity>
      </View>
    );
  }
 


  const HeaderLeft=() =>{
    return (
      <View >
     
      </View>
    );
  }
  
   //export default connect(null,mapDispatch)(Router)
  export default Router;