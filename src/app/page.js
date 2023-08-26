"use client"
import './page.css'
import default_image from '../../public/assets/robot.jpg'
import Image from 'next/image'
import Main from './Components/Main/page'
import { cin } from './fonts'
import { useRef, useState } from 'react'

export default function Home() {

  const [imageUrl, setImageUrl] = useState("/")

  let inputRef = useRef(null)

  const genImage = async () => {
    if (inputRef.current.value === "") {
      return 0;
    }
    const response = await fetch()
  }

  const hidePlaceholder = () => {
    if (inputRef.current.placeholder !== '') {
      inputRef.current.placeholder = '';
    }
    else {
      inputRef.current.placeholder = 'Describe what you want to see';

    }
  }


  return (
    <div className="home-container">
      <Main />
      <div className="card">
        <div className="title">
          <h1 className="title-text">AI IMAGE GENRATOR</h1>
        </div>
        <div className="image-section">
          <Image
            src={imageUrl == "/" ? default_image : imageUrl}
            style={
              {
                height: "90%",
                width: "30%",
                borderRadius: '20px'
              }
            }

          />
          <div className="loader"></div>
        </div>

        <div className="input">
          <div className="search-box">
            <input type="text" ref={inputRef} placeholder='Describe what you want to see ' onClick={hidePlaceholder} className='search-input' />
            <button className='genrate' onClick={genImage}>GENERATE</button>

          </div>

        </div>
      </div>


    </div>

  )
}
