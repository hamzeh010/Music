import {useState, useEffect, useRef} from 'react';
import happi from '../api/happi';
import {track} from '../interfaces/track'

export default () => {
    const [results,setResults] = useState<track>();
    const mountedRef = useRef(true);

    const getTracks = async searchTerm => {
        try{
            const response = await happi.get('/music/bpm/playlist/80-90', {
                params:{
                    tempo:"80-90",
                    limit:50,
                    apikey:'42405dFzin2GNUB68DBOOniGJLng7JMKBTGzosIyjGiEDUjuWj1GNv8p',
                }
            });
            setResults(response.data.tracks);
        }
        catch(err){

        }

    };
    useEffect(()=>{
        getTracks('sia');
        return () => {
            mountedRef.current = false;   // clean up function
          }
    },[])

    return [results];
};