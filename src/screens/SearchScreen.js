import React,{useState} from 'react';
import  {View, StyleSheet, ScrollView} from 'react-native';
import SearchBar from './Components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from './Components/ResultsList';

const SearchScreen = ({navigation}) =>   {
    const [term,setTerm] = useState('');
    const [results,searchApi,errorMsg] = useResults();
    const filterResultsByPrice = (hasLyrics)=>{
        return results.filter(result=>{
            return  result.haslyrics == hasLyrics
       })
   }
    return(
        <View style={styles.background}>
            <SearchBar
            term={term}
            onTermChange={setTerm}
            onTermSubmit={()=>searchApi(term)}/>
            <ScrollView>
            <ResultsList title = "Made For You" results={filterResultsByPrice(false)} navigation={navigation}/>
            <ResultsList title="Popular albums" results={filterResultsByPrice(false)} navigation={navigation}/>
            <ResultsList title="Music to stay up to date" results={filterResultsByPrice(false)} navigation={navigation}/>
            <ResultsList title="New releases for you" results={filterResultsByPrice(false)} navigation={navigation}/>
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