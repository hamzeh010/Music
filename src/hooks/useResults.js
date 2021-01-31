import React,{useState, useEffect, useRef} from 'react';
import happi from '../api/happi';


export default () => {

    const [results,setResults] = useState([]);
    const [errorMsg,setError] = useState('');
    const mountedRef = useRef(true);

    const searchApi = async searchTerm => {
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
        searchApi('sia');
        return () => {
            mountedRef.current = false;   // clean up function
          }
    },[])

    return [results,searchApi,errorMsg];
};