import {useState, useEffect, useRef} from 'react';
import happi from '../api/happi';
import {track} from '../interfaces/track'

export default () => {
    const [results,setResults]:any = useState<track>();
    const [errorMsg,setError]:any = useState('');
    const mountedRef:any = useRef(true);

    const getTracksByName = async searchTerm => {
        try{
            const response = await happi.get('/music', {
                params:{
                    q:searchTerm,
                    limit:50,
                    apikey:'42405dFzin2GNUB68DBOOniGJLng7JMKBTGzosIyjGiEDUjuWj1GNv8p',
                    type:'track'
                }
            });

            setResults(response.data.result);
        }
        catch(err){

          setError("somthing went wrong")
        }

    };
    useEffect(()=>{
        getTracksByName('sia');
        return () => {
            mountedRef.current = false;   // clean up function
          }
    },[])

    return [results,getTracksByName,errorMsg];
};