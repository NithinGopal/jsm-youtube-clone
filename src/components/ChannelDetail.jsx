import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import { Videos, ChannelCard } from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null)
  const [videos, setVideos] = useState([])

  // console.log(channelDetail)
  // console.log(videos)

  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`channels?part=snipped&id=${id}`)
      .then(data => setChannelDetail(data?.items[0]));

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
      .then(data => setVideos(data?.items));
  }, [id])
  return (
    <Box minHeight='95vh'>
      <Box>
        <div 
          style={{
            background: 'linear-gradient(96deg, rgba(24,189,237,1) 0%, rgba(5,5,92,1) 51%, rgba(127,24,158,1) 100%)',
            zIndex: 10,
            height: '300px'
          }}
        />
        <ChannelCard channelDetail={channelDetail} marginTop='-130px' />
      </Box>
      <Box display='flex' p='2'>
        <Box sx={{ mr: { sm: '200px' }}} />
        <Videos videos={videos} />
      </Box>
    </Box>
  )
}

export default ChannelDetail