import React from 'react';
import  {View, StyleSheet} from 'react-native';
import MusicPlayer from './Components/MusicPlayer';

const defualtVal = {album: "Grandes Musicales Vol. 2",
    api_album: "https://api.happi.dev/v1/music/artists/430002/albums/916570",
    api_albums: "https://api.happi.dev/v1/music/artists/430002/albums",
    api_artist: "https://api.happi.dev/v1/music/artists/430002",
    api_lyrics: "https://api.happi.dev/v1/music/artists/430002/albums/916570/tracks/13063320/lyrics",
    api_track: "https://api.happi.dev/v1/music/artists/430002/albums/916570/tracks/13063320",
    api_tracks: "https://api.happi.dev/v1/music/artists/430002/albums/916570/tracks",
    artist: "The Royal Musical Band",
    bpm: 87,
    cover: "https://api.happi.dev/v1/music/cover/916570",
    haslyrics: false,
    id_album: 916570,
    id_artist: 430002,
    id_track: 13063320,
    track: "Hello Dolly (From Hello Dolly)"};

const TrackScreen = (navigation) =>   {
    console.log(navigation.route.params)
    if(!navigation.route.params){
        navigation.route.params = defualtVal;
    }
    
    return(
        <View style={styles.fill} >
            {navigation.route.params ? <MusicPlayer details={navigation.route.params }/>:null}
        </View>

    );
}

const styles = StyleSheet.create({
    fill:{
        marginTop:36,
        position:'absolute',
        top:0,
        backgroundColor:'#fff',
        ...StyleSheet.absoluteFillObject
    }
});
export default TrackScreen;