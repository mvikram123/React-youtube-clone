import React ,{useState} from "react";
import axios from "axios";


const SearchBar=({setVideos})=>{
    let [search, setSearch]=useState("");
    //let [videos,setVideos]=useState("");

    function implementSearch(){
        axios.get("https://www.googleapis.com/youtube/v3/search",{
            params:{
                key:"AIzaSyBdKUV_CV9QqpoJq20q_83Rb1bgxCg6_IM",
                part:"snippet",
                maxResult:5,
                type:"video",
                q:search
            }
        })
        .then(response=>setVideos(response.data.items))
        .catch(err=>console.log(err))
    }
    return (
        <div className="searchbar">
                <input type="text" placeholder="search" 
                onChange={(e)=>setSearch(e.target.value)} />
                <button onClick={implementSearch}>search</button>
        </div>
    )
}
export default SearchBar;