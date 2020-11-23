import React from 'react';
import YouTube from 'react-youtube'

const YoutubeVideo = ({children}) => {
  const opts = {
    height:  820,
    width: '100%',
    playerVars: {
      autoplay: 1,
      loop: 1,
      controls: 0,
      fs: 1,
      showinfo: 0
    },
    
  };
  
    return ( 
        <YouTube videoId="B5gaKTHGMcE" opts={opts}  >
          {children}
        </YouTube>
     );
}
 
export default YoutubeVideo;