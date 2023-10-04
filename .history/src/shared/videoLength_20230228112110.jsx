import React from 'react'
import moment from 'moment';
const videoLength = ({time}) => {

    const videoLengthSeconds = moment().startOf("day").seconds(time).format("H")
  return <div>videoLength</div>
}

export default videoLength