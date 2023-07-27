import { useState } from "react";
import React from "react";
import SearchBar from "./Components/SearchBar";
import VideoList from "./Components/VideoList";
import VideoPlay from "./Components/VideoPlay";
import "./App.css";




const App=()=>{
  let [videos,setVideos]=useState("");
  let [selectedVideos,setSelectedVideos]=useState("");

  return (
    <div>
      <SearchBar setVideos={setVideos} />
      <div className="videos">
           <VideoPlay selectedVideos={selectedVideos} />
           <VideoList videos={videos} setSelectedVideos={setSelectedVideos}/>
      </div>
      

    </div>
  )
}
export default App;