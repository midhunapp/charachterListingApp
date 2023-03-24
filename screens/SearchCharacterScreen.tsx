import React, { Component,useState } from 'react';
import { View, Text, FlatList, TouchableOpacity ,StyleSheet,StatusBar} from 'react-native';
import { ListItem, SearchBar } from 'react-native-elements'


const renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: '86%',
          backgroundColor: '#CED0CE',
          marginLeft: '14%',
        }}
      />
    );
  };



const Item = (props:any )=> {
    const {navigation,data}=props;
  
     return (
          <View style={styles.item}>
            <TouchableOpacity >
           <Text style={styles.title}>{data.name}</Text>
           </TouchableOpacity>
           </View>
        );
     }





const SearchCharacterScreen=(props:any)=>{
    const {charachertList,handleCharacterSearch}=props
    const [search, setsearch] = useState('')
    const renderHeader = () => {
      const onTextChangeHandler = (inputValue:string) => {
          setsearch(inputValue);
          handleCharacterSearch(inputValue)
      }
  
      return <SearchBar placeholder="Type Here..." value={search} onChangeText={onTextChangeHandler} {...props} />;
    };
    return (
        <View style={{ flex: 1 }}>
          <FlatList
            data={charachertList}
            renderItem={({ item }) => <Item  data={item} />}
            keyExtractor={item => item.id}
            ItemSeparatorComponent={renderSeparator}
            ListHeaderComponent={renderHeader}
          />
        </View>
      );
}
export default SearchCharacterScreen

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