import { Link } from "react-router-dom";


export default function Card({ data }) {
  //console.log(data);

  return (
    <Link to={`/watch/${data.id.videoId}`} className="text-white">
      <div className="flex flex-col mb-8">
        <div className="relative h-48 md:h-40 md:rounded-2xl overflow-hidden">
          <img
            src={data.snippet.thumbnails.high.url}
            alt="Thumbnail"
            className="h-full w-full object-cover rounded-2xl"
          />
        </div>
        <div className="mt-2">
          <h2 className="line-clamp-2">
            <a href="#" className="text-white">
              {data.snippet.title}
            </a>
          </h2>
          <div>
            <div>
              <a href="#">{data.snippet.channelTitle}</a>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
