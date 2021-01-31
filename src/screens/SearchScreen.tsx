import React,{useState} from 'react';
import  {View, StyleSheet, ScrollView} from 'react-native';
import SearchBar from './Components/SearchBar';
import getTracksByName from '../hooks/getTracksByName';
import getTracks from '../hooks/getTracks';
import ResultsList from './Components/ResultsList';

const SearchScreen = ({navigation}) =>   {
    const [term,setTerm] = useState('');
    const [results,searchApi] = getTracksByName();
    const [tracks] = getTracks();

    return(
        <View style={styles.background}>
            <SearchBar
            term={term}
            onTermChange={setTerm}
            onTermSubmit={()=>searchApi(term)}/>
            <ScrollView>
            <ResultsList title = "Made For You" results={tracks} navigation={navigation}/>
            <ResultsList title="Popular albums" results={results} navigation={navigation}/>
            <ResultsList title="Music to stay up to date" results={tracks} navigation={navigation}/>
            <ResultsList title="New releases for you" results={results} navigation={navigation}/>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    background:{
        marginTop:36,
        position:'absolute',
        top:0,
        backgroundColor:'white',
        ...StyleSheet.absoluteFillObject
    }
});
export default SearchScreen;