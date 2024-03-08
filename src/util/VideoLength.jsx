//import React from 'react'
import moment from "moment/moment"
export default function VideoLength({time}) {
    const videoLengthInSeconds = moment()
    .format(time); 
  return (
    <div className=" absolute  bottom-2 right-2 bg-black py-1 px-2 text-white">
        {videoLengthInSeconds}
    </div>
  )
}
