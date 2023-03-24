import React, { useState } from 'react'
import { SafeAreaView, View, Image, StyleSheet, Text, StatusBar,Dimensions  } from 'react-native';
const dimensions = Dimensions.get('window');
const imageWidth = dimensions.width-100;


 const CharacterDetailScreen=(props:any)=>{
     const {data}=props.route.params;
     return(
        <SafeAreaView style={styles.container}>
            <View style={styles.imageBox}>
            <Image style={{height: imageWidth, width: imageWidth,padding:20}} source={data.image} />
            </View>
            <View style={styles.databox}>
            <Text>Name : {data.name}</Text>
            <Text>Status : {data.status}</Text>
            <Text>Species : {data.species}</Text>
            <Text>Gender : {data.gender}</Text>
            <Text>Location : {data.location}</Text>
            </View>
         </SafeAreaView>
     )

}
export default CharacterDetailScreen
const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection:'column',
      marginTop: 20,
      backgroundColor: '#ccc',
      //height: 100,
     // justifyContent: 'center',
      marginVertical: 8,
      marginHorizontal: 16,
      padding: 20,
    },

    imageBox:{
        padding:20,
    },
    databox:{
        paddingLeft:20,
    }
})