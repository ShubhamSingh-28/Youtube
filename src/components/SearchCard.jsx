import { Link } from "react-router-dom";
import { BsFillCheckCircleFill } from "react-icons/bs";
//import VideoLength from "../util/VideoLength";
export default function SearchCard({data}) {

  return (
    <Link to={`/watch/${data.id.videoId}`} className="text-white">
      <div className=" flex flex-col md:flex-row mb-8 md:mb-3 lg:hover:bg-white/[0.1] rounded-xl md:p-4 ">
        <div className=" relative flex  shrink-0 h-48 md:h-28 lg:h-40 w-full md:w-48 lg:w-64 rounded-xl bg-slate-800 overflow-hidden">
          <img src={data.snippet.thumbnails.high.url} alt="thumbnails" 
          className=" h-full w-full object-fill"/>
        </div>
        <div className=" flex flex-col ml-4 md:ml-6 mt-4 md:mt-0 overflow-hidden">
          <span className=" text-lg md:text-2xl font-bold line-clamp-2 md:pr-24 md:my-4">
            {data.snippet.title}
            </span>
            <span className=" empty:hidden text-sm line-clamp-1 md:line-clamp-2 md:pr-24 md:my-4">
            {data.snippet.description}
            </span>
            <div className=" flex text-xs font-semibold truncate overflow-hidden">
             
              <span className=" truncate">{data.snippet.publishTime}</span>
            </div>
            <div className=" hidden md:flex items-center">
              <div className=" flex flex-col">
                <span className=" text-sm font-semibold mt-2 flex items-center">
                  {data.snippet.channelTitle}
                  <BsFillCheckCircleFill className=" text-[12px] ml-1"/>
                </span>
              </div>
            </div>
          </div> 
      </div>
      </Link>
  )
}
