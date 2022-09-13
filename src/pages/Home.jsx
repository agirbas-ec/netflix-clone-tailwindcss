import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import '../Requests'
import requests from '../Requests'

const Home = () => {
  return (
    <div>
      <Main/>
      <Row rowID='1' title='Yakında Gelecek..' fetchURL={requests.requestUpcoming}/>
      <Row rowID='2' title='En çok izlenenler' fetchURL={requests.requestPopular}/>
      <Row rowID='3' title='Trend' fetchURL={requests.requestTrending}/>
      <Row rowID='4' title='Harika Filmler' fetchURL={requests.requestTopRated}/>
      <Row rowID='5' title='Korkudan Öleceksin' fetchURL={requests.requestHorror}/>


    </div>
  )
}

export default Home