import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './components/Card'
import { ArrowBigDown, Pointer } from 'lucide-react'

const App = () => {

  const [imgData, setImgData] = useState([])

  const [index, setIndex] = useState(1)

  const getData = async () => {

    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=21`)

    setImgData(response.data)
  }

  useEffect(() => {
    getData()

  }, [index])


  let printImage = <h3 className='text-gray-300 text-xs absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold'>Loading...</h3>

  if (imgData.length > 0) {
    printImage = imgData.map(function (elem, idx) {
      return <div>
        <Card elem={elem} />
      </div>
    })
  }

  return (
    <div className='p-4 bg-black h-screen text-white overflow-auto'>
      <div className='flex h-[82%] flex-wrap gap-5 mt-4 justify-center'>
        {printImage}
      </div>
      <div className='flex justify-center gap-10 mt-4'>
        <button style={{opacity:index==1?0.6 : 1,cursor:index==1?"default":"Pointer"}}
        className='bg-blue-950 p-4 cursor-pointer font-semibold text-gray-300 rounded-xl active:scale-95 text-xl mt-6'
          onClick={() => {
            if (index > 1) {
              setIndex(index - 1)
              setImgData([])
            }
          }}
        >Prev</button>
        <h2 className='text-2xl mt-9'>Page {index}</h2>
        <button className='bg-blue-950 p-3 cursor-pointer font-semibold text-gray-300 rounded-xl active:scale-95 text-xl mt-6'
          onClick={() => {
            setIndex(index + 1)
            setImgData([])
          }}
        >Next</button>
      </div>
    </div>
  )
}

export default App
