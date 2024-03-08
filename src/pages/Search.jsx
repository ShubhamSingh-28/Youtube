import  { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SearchCard from '../components/SearchCard';

export default function Search() {
  const [searchData, setSearchData] = useState([]);
  const { searchQuery } = useParams();

  useEffect(() => {
    const API_KEY = import.meta.env.VITE_API_KEY;

    const fetchSearchData = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/search?maxResults=50&q=${searchQuery}&key=${API_KEY}&part=snippet&type=video`
        );

        if (response.ok) {
          const result = await response.json();
          setSearchData(result.items);
        } else {
          console.error(`Failed to fetch data. Status: ${response.status}`);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchSearchData();
  }, [searchQuery]);
//console.log(searchData);
  return (
    <div className='flex flex-col items-center'>
      {searchData.map((item) => (
        <SearchCard key={item.id.videoId} data={item} />
      ))}
    </div>
  );
}
