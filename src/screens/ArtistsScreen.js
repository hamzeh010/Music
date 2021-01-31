import React,{useState,useEffect} from 'react';
import  {View ,Text,StyleSheet,ScrollView,FlatList,TouchableOpacity,Image,SafeAreaView,StatusBar} from 'react-native';
import happi from '../api/happi'
import {  Dimensions } from 'react-native';

const ArtistsScreen = ({navigation}) =>   {

    const [results,setResults] = useState([]);
    const [errorMsg,setError] = useState('');

    const artists = async () => {
        try{
            const response = await happi.get('/music/artists', {
                params:{
                    page:1,
                    apikey:'42405dFzin2GNUB68DBOOniGJLng7JMKBTGzosIyjGiEDUjuWj1GNv8p',
                }

            });

            setResults(response.data.result);

        }
        catch(err){

          setError("somthing went wrong")
        }

    };
    const { width, height } = Dimensions.get('screen');
    useEffect(()=>{
        artists()
    },[])
    return(
   <View style={styles.container}>

        <FlatList
        showsHorizontalScrollIndicator={false}
        data={results}

        keyExtractor={result=>result.id_artist.toString()}
        renderItem={({item})=>{
            return(
              <TouchableOpacity
              onPress={() => {
                navigation.navigate('Albums',item);
              }}
              >
                  <View style={{alignItems:'center', padding:10}}>
                  <Image style={styles.image}  source={{uri:item.cover}}/>
                  <Text style={styles.name}>{item.artist}</Text>
                  </View>

              </TouchableOpacity>
            );
        }}
        numColumns={2}
        />

      </View>

    );
}

const styles = StyleSheet.create({
    container:{
      justifyContent: 'center',
        alignItems: 'center',
        marginTop:36,
        position:'absolute',
        top:0,
        backgroundColor:'white',
        padding:10,
        ...StyleSheet.absoluteFillObject,

        },
      title:{
        fontSize:18,
        fontWeight:'bold',
        marginBottom:10
      },
      name:{
        fontWeight:'bold',
        marginBottom:4,
        fontSize:16,
        width:180,
        textAlign:'center',
        marginTop:7

      },
      rate:{
        color:'gray',
        fontSize:12
      },
      image:{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:10,
        width:'100%',
        height:200,
        resizeMode:'contain',
        margin:10,
        padding:10
    }
    });
export default ArtistsScreen;