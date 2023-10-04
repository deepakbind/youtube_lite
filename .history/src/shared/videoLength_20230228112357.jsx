import React from 'react'
import moment from 'moment';
const videoLength = ({ time }) => {

    const videoLengthSeconds = moment()
    .startOf("day")
    .seconds(time)
    .format("H:mm:ss");

    return <div className='absolute bottom-2 right-2'>
    {videoLengthSeconds}</div>
};

export default videoLength