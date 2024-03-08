import Card from "../components/Card";
import Sidebar from "../components/Sidebar";
import { useEffect, useState } from "react";

export default function Feed() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const API_KEY = import.meta.env.VITE_API_KEY;

    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/search?maxResults=50&q="punjabi Song"&key=${API_KEY}&part=snippet&type=video`
        );
        const result = await response.json();
      
        if (result.items) {
          setData(result.items);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex h-[calc(100%-56px)] text-white">
      <Sidebar />
      <div className="grow w-[calc(100%-240px)] h-full overflow-y-auto overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-5 py-16">
          {loading ? (
            <p >Loading...</p>
          ) : (
            data.map((item) => {
              // Render your Card component or other content here using the 'item' data
              return <Card key={item.id.videoId} data={item} />;
            })
          )}
        </div>
      </div>
    </div>
  );
}
