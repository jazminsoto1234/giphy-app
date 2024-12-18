import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import ViewGif from './Viewgif';
import { ScrollView } from 'react-native';

export const ListResultGifs = ({ word}) => {
  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGifs = async () => {
      if (word) {
        try {
          const response = await fetch(
            `https://api.giphy.com/v1/gifs/search?api_key=2sgcVAj7Fe7XLf1O38XiX6he8aWBuuFa&q=${word}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`
          );
          const data = await response.json();
          setGifs(data.data);
          setLoading(false);
        
        } catch (error) {
          console.error('Error gifs:', error);
          setLoading(false);
        }
      }
    };

    fetchGifs();
  },);

 

  return (
    <ScrollView>
        {gifs.map((gif) => (
              <ViewGif key={gif.id} gif={gif} /> 
          ))}

    </ScrollView>
  );
};




export default ListResultGifs;