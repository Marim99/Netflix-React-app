
import axios from './axios';
import {useState,useEffect} from 'react';
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const Row = ({title,fetchUrl,isLarg}) => {
    const base_url="http://image.tmdb.org/t/p/original/";
    const [movies,setMovies]=useState([]);
    const [trailerUrl,setTrailerUrl]=useState("");

useEffect(()=>{
   async function fetchData(){
   const request= await axios.get(fetchUrl);
    setMovies(request.data.results);
    return request ;
}
fetchData();
},[fetchUrl]);


const opts={
    height:"390",
    width:"100%",
    playerVars:{
        autoplay:1,
    },
};
const handleUrl=(movie)=>{
    if(trailerUrl){
    setTrailerUrl('');
    }else {
    movieTrailer(movie?.name ||"")                       /* movieTrailer from npm*/ 
    .then((url)=>{
      const urlParams=new URLSearchParams(new URL(url).search);   /**search for it to understund */
      setTrailerUrl( urlParams.get("v"));
    }).catch((error)=>console.log(error)) ;
}
}
    return ( 
        <div className="row">
            <h1>{title}</h1>
            <div className="poster_container">
                {}
           {
               movies.map((movie)=>(
                   <img 
                   key={movie.id}
                   onClick={()=>handleUrl(movie)}
                   className={`poster ${isLarg&& "poster_larg"}`}
                   src={`${base_url}${isLarg?movie.poster_path:movie.backdrop_path}`}
                   alt={movie.name} />
                   ))
           }
            </div>
           {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
        </div>
     );
}
 
export default Row;