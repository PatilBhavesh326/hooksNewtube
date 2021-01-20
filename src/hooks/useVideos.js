import { useState, useEffect } from 'react';
import newtube from '../apis/newtube';

const useVideos = (defaultSearchTerm) => {
    const [videos, setVideos] = useState([]);

    useEffect(()=>{ 
        search(defaultSearchTerm);
    }, [defaultSearchTerm]);


    const search = async term => {
        const response = await newtube.get("/search", {
         params: {
           q: term            
         }
       });
            setVideos(response.data.items);
   };

   return [videos, search];
};

export default useVideos;