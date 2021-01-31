import React from 'react';
import  {View, StyleSheet, TextInput} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const SearchBar = ({term,onTermChange,onTermSubmit}) =>   {
    return(
        <View style={styles.searchBar}>
            <FontAwesome
            name="search"
            size={24}
            color="black"
            style={styles.icon}
            />
            <TextInput
             placeholder="Search"
             style={styles.searchInput}
             value={term}
             autoCapitalize="none"
             autoCorrect={false}
             onChangeText={onTermChange}
             onEndEditing={onTermSubmit}/>
        </View>
    );
}

const styles = StyleSheet.create({
    icon:{
        marginLeft:20,
        alignSelf:'center',
        marginHorizontal:10,
    },
    searchInput:{
        flex:1,
    },

    searchBar:{
        backgroundColor:'#F0EEEE',
        borderRadius: 5,
        height:50,
        marginVertical:10,
        marginHorizontal:20,
        borderColor:'black',
        flexDirection:'row',
    }
});
export default SearchBar;