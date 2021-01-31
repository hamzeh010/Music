import React from 'react';
import  {View , Text, StyleSheet, FlatList, Image, TouchableOpacity} from 'react-native';


const ResultsList = ({title,results,navigation}) =>   {
    return(
        <View style={styles.container}>
          <Text style={styles.title}>{title}</Text>
          <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={results}
          keyExtractor={result=>result.id_track.toString()}
          renderItem={({item})=>{
              return(
                <TouchableOpacity style={styles.contain}
                onPress={() => {
                  navigation.navigate('Track',item);
                }}
                >
                    <Image style={styles.image}source={{uri:item.cover}}/>
                    <Text style={styles.name}>{item.track}</Text>
                    <Text style={styles.rate}>{item.artist}</Text>
                </TouchableOpacity>
              );
          }}
          />
        </View>
    );
}

const styles = StyleSheet.create({
container:{
    marginVertical:10,
    marginHorizontal:20,
    },
    contain:{
       //flexDirection:'row'
    },
  title:{
    fontSize:20,
    fontWeight:'bold',
    marginBottom:10
  },
  name:{
    fontWeight:'bold',
    marginBottom:4,
    width:200
  },
  rate:{
    color:'gray',
    fontSize:12
  },
  image:{
    borderRadius: 5,
    width:200,
    height:100,
    marginRight:20,
    overflow:'visible'
}
});
export default ResultsList;