import React from 'react';
import { StyleSheet, TouchableOpacity, View, Image ,Text, Alert} from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { Audio } from 'expo-av'
import { Sound } from 'expo-av/build/Audio';



const MusicPlayer = ({details}) =>   {

  const [sound, setSound] = React.useState<Sound>();

  async function playSound(name='test.mp3') {
    const { sound } = await Audio.Sound.createAsync(
      require('../../../assets/test.mp3'),
      { shouldPlay: true }

    );
    setSound(sound);
    //console.log('Playing Sound');
    await sound.playAsync(); }

    async function stopSound(){
     // console.log('Stop Sound');
      await  sound.pauseAsync()
    }
    React.useEffect(() => {
      return sound
        ? () => {
            console.log('Unloading Sound');
            sound.unloadAsync(); }
        : undefined;
    }, [sound]);

    return(
        <View style={styles.container}>
        <Image
          style={styles.albumCover}
          source={{ uri: details.cover }}
        />
        <View style={styles.controls}>

          <TouchableOpacity style={styles.control} onPress={() =>{
            console.log('test')
          }}>

          <AntDesign name="stepbackward" size={34} color="black" />
                    </TouchableOpacity>
          <TouchableOpacity style={styles.control} onPress={() =>  console.log('test')}>

            <AntDesign name="play" size={34} color="black"  onPress={()=>playSound} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.control} onPress={() => console.log('click')}>
          <AntDesign name="pause" size={34} color="black"  onPress={()=>stopSound} />
                    </TouchableOpacity>
          <TouchableOpacity style={styles.control} onPress={()=>playSound}>
          <AntDesign name="stepforward" size={34} color="black" />
                    </TouchableOpacity>
        </View>
        <Text style={styles.name}>{details.track}</Text>
      </View>
    );

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center'
    },
    albumCover: {
      width: '100%',
      height: 250
    },
    controls: {
      flexDirection: 'row'
    },
    control: {
      margin: 30
    },
    name:{
      fontWeight:'bold',
      fontSize:18
    }
  })
export default MusicPlayer;