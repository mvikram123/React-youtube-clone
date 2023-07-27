import React from "react";

const VideoList=({videos,setSelectedVideos})=>{
    
    return (
        <div className="VideoList">
            {
            videos && 
                videos.map((video,index)=>(
                    
                    <div onClick={()=>setSelectedVideos(video)} key={index}>
                       <img src={video.snippet.thumbnails.default.url} alt={video.snippet.description} />
                    </div>
                    
                )
                )
    }

        </div>
    )
 }
export default VideoList;