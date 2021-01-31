import happi from '../api/happi'

const searchApi = async searchTerm => {
      const response = await happi.get('/music', {
          params:{
              q:searchTerm,
              limit:50,
              apikey:'42405dFzin2GNUB68DBOOniGJLng7JMKBTGzosIyjGiEDUjuWj1GNv8p',
              type:'track'
          }
      });
      return response.data.result;

};

it('Check if search api return response', async () => {
  const res = await searchApi("h");
  expect(res.length).toEqual(50);
});