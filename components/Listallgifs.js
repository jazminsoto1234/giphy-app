
import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import ViewGif from './Viewgif';
import { ScrollView } from 'react-native';



function ListAllGifs() {
  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    const fetchGifs = async () => {
      try {
        const response = await fetch(
          'https://api.giphy.com/v1/gifs/trending?api_key=2sgcVAj7Fe7XLf1O38XiX6he8aWBuuFa&limit=25&offset=0&rating=g&bundle=messaging_non_clips'
        );
        const data = await response.json();
        setGifs(data.data);
        setLoading(false);
      } catch (error) {
        console.error('Error gifs:', error);
        setLoading(false);
      }
    };

    fetchGifs();
  }, []);

  
  return (
        <ScrollView>
        {/* <View> */}
            {gifs.map((gif) => (
                <ViewGif key={gif.id} gif={gif} /> 
            ))}
        {/* </View> */}
        </ScrollView>
  );
        

}

export default ListAllGifs;