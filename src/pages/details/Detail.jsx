import React from 'react'
import './style.scss'
import { useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import DetailsBanner from './detailBanner/DetailBanner'
import Cast from './cast/Cast'
import VideosSection from './vedioSection/VedioSection'
import Similar from './carousels/Similar'
import Recommendation from './carousels/Recommandation'

const Detail = () => {
 const {mediaType , id} =useParams()
 const {data ,loading} = useFetch(`/${mediaType}/${id}/videos`)
 const {data:credits ,loading : creditsLoading} = useFetch(`/${mediaType}/${id}/credits`)
  return (
    <div>
      <DetailsBanner vedio={data?.results?.[0]} crew={credits?.crew}/>
      <Cast data={credits?.cast} loading={creditsLoading}/>
      <VideosSection data={data} loading={loading}/>
      <Similar mediaType={mediaType} id={id} />
      <Recommendation mediaType={mediaType} id={id}/>
    </div>
  )
}

export default Detail
