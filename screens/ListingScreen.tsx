import React, { useState } from 'react'
import { SafeAreaView, View, VirtualizedList, StyleSheet, Text, StatusBar,Button,TouchableOpacity } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import {  SearchBar } from 'react-native-elements'
const getItem = (data:any, index:any) => {
  return {
    id: data[index].id,
    name: data[index].name,
    image:data[index].image,
    status:data[index].status,
    species:data[index].species,
    gender:data[index].gender,
    location:data[index].location.name,
 }
}


const getItemCount = (data:any) => {
   return data.length;
}
const Item = (props:any )=> {
  const {navigation,data}=props;

   return (
        <View style={styles.item}>
          <TouchableOpacity onPress={() => navigation.navigate("CharacterDetailScreen",{...props})}>
         <Text style={styles.title}>{data.name}</Text>
         </TouchableOpacity>
         </View>
      );
   }
   const onSelect=()=>{
     // navigation.navigate("Login",{});
   }
    const ListingScreen=(props:any)=>{
    const {goBack,goNext,charachertList,handleCharacterSearch}=props;
    const [search, setsearch] = useState('')
    const navigation = useNavigation();
    const onTextChangeHandler = (inputValue:string) => {
      //alert(inputValue)
       setsearch(inputValue);
       handleCharacterSearch(inputValue)
   }
   
   

      return (
         <SafeAreaView style={styles.container}>
           
         <VirtualizedList
          data={charachertList}
          getItem={getItem}
          keyExtractor={item => item.id}
          getItemCount={data => data.length}
          renderItem={({ item }) => <Item  data={item} navigation={navigation}/>}
          ListHeaderComponent={<SearchBar placeholder="Type Here..." value={search} onChangeText={onTextChangeHandler} {...props} />}
          />
         <View style={{flexDirection:'row'}}>
         <TouchableOpacity style={styles.paginationButtonBack} onPress={goBack}>
         <AntDesign name='arrowleft' size={50} color='black' />
        </TouchableOpacity>

        <TouchableOpacity style={styles.paginationButtonNext} onPress={goNext}>
         <AntDesign name='arrowright' size={50} color='black' />
        </TouchableOpacity>
         </View>
         </SafeAreaView>
      );

       /* getItem={(data:any, index:any) => {
              return {
                 id: data[index].id,
                 name: data[index].name//data.name
              }
            }}*/
   }
   const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight,
    },
   item: {
      backgroundColor: '#ccc',
      height: 100,
      justifyContent: 'center',
      marginVertical: 8,
      marginHorizontal: 16,
      padding: 20,
   },
   title: {
      fontSize: 32,
   },
   paginationButtonBack:{
    flex:1,
    alignItems:'center',
    borderWidth:1,
    borderColor:'black'
   },
   paginationButtonNext:{
    flex:1,
    alignItems:'center',
    borderWidth:1,
    borderColor:'black'
   }
});

export default ListingScreen  