import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BsFillCheckCircleFill } from "react-icons/bs";
import ReactPlayer from "react-player";

export default function Watch() {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    const API_KEY = import.meta.env.VITE_API_KEY;
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/videos?id=${id}&part=snippet&maxResults=20&key=${API_KEY}`
        );
        const result = await response.json();
        setData(result.items[0]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div className="flex flex-row justify-center h-[calc(100%-56px)] text-white">
      <div className="w-full max-w-[1280px] flex flex-col lg:flex-row">
        <div className="flex flex-col lg:w-[calc(100%-350px)] px-4 py-3 lg:py-6 overflow-y-hidden">
          <div className="h-[200px] md:h-[400px] lg:h-[500px] ml-[-16px] lg:ml-0 mr-[-16px] lg:mr-0">
            {data && (
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${id}`}
                controls
                width="100%"
                height="100%"
                style={{ backgroundColor: "#000000" }}
                playing={true}
              />
            )}
          </div>
          {data && (
            <>
              <div className="font-bold text-sm md:text-xl mt-4 line-clamp-2">
                {data.snippet.title}
              </div>
              <div className="flex justify-between flex-col md:flex-row mt-4">
                <div className="flex">
                  <div className="flex flex-col ml-3">
                    <div className="font-semibold flex items-center">
                      {data.snippet.channelTitle}
                      <BsFillCheckCircleFill className="ml-1 text-[16px] text-blue-800" />
                    </div>
                    <span className="text-sm line-clamp-1 md:line-clamp-2 md:pr-24 md:my-4">
                      {data.snippet.description}
                    </span>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
