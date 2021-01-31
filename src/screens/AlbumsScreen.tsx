import React,{ useState, useEffect} from 'react';
import  {View , Text, StyleSheet, FlatList, Image} from 'react-native';
import happi from '../api/happi.js'
import { useIsFocused } from "@react-navigation/native";

const AlbumsScreen = (navigation) =>   {
    const isFocused = useIsFocused();
    const [results,setResults] = useState([]);
    const [errorMsg,setError] = useState('');
    let  artistId = 204;

    const albums = async (artistId) => {
        try{

            const response = await happi.get(`/music/artists/${artistId}/albums`, {
                params:{
                    apikey:'42405dFzin2GNUB68DBOOniGJLng7JMKBTGzosIyjGiEDUjuWj1GNv8p',
                }

            });
            setResults(response.data.result.albums);

        }
        catch(err){

          setError("somthing went wrong")
        }

    };


    if(navigation.route.params){
        artistId = navigation.route.params.id_artist;

        useEffect(() => {
            albums(artistId)

          }, [navigation, isFocused])
    }
        useEffect(()=>{
            albums(26688)
        },[])

        console.log("results",results)
    return(
   <View style={styles.container}>
        <FlatList
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={result=>result.id_album.toString()}
        renderItem={({item})=>{
            return(
                  <View style={{alignItems:'center' }}>
                    <Image style={styles.image}  source={{uri:item.cover}}/>
                    <Text style={styles.name}>{item.album}</Text>
                  </View>
            );
        }}
        numColumns={1}
        />

      </View>

    );
}

const styles = StyleSheet.create({
    container:{
        marginTop:36,
        justifyContent: 'center',
        alignItems: 'center',
        },
      title:{
        fontSize:18,
        fontWeight:'bold',
        marginBottom:10
      },
      name:{
        fontWeight:'bold',
        marginBottom:4,
        fontSize:18,
        width:300,
        textAlign:'center',
        marginTop:10
      },
      image:{
        marginTop:40,
        width: 300,
        height: 300,
        resizeMode:'contain'
    }
    });
export default AlbumsScreen;