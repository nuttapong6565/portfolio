import React, {useState, useEffect} from 'react'
import "./Languages.css"

function Languages() {
  const [load, setLoad] = useState({
    isLoading: true
  })

  useEffect(() => {
    setLoad({isLoading: false})
  }, [])

  return (
    <div>
      {load.isLoading? "" : 
        <div className='languages section' id='skills'>
          <div className='container'>
            <h2 className="section-title padd-15">Tools And Skills I Used</h2>
            <div className='languages-items padd-15'>
                <p><img alt='item' height="50" src="https://user-images.githubusercontent.com/69140322/204384307-985c0187-0b47-4936-83bf-a2ba16a26eb2.png"/></p>
                <p><img alt='item' height="50" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Microsoft_.NET_logo.svg/180px-Microsoft_.NET_logo.svg.png"/></p>
                <p><img alt='item' height="50" src="https://cdn-icons-png.flaticon.com/512/4492/4492311.png"/></p>
                <p><img alt='item' height="50" src="https://cdn-icons-png.flaticon.com/512/875/875209.png"/></p>
                <p><img alt='item' height="50" src="https://cdn-icons-png.flaticon.com/512/5968/5968350.png"/></p>
                <p><img alt='item' height="50" src="https://cdn-icons-png.flaticon.com/512/331/331395.png"/></p>
                <p><img alt='item' height="50" src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png"/></p>
                <p><img alt='item' height="50" src="https://cdn-icons-png.flaticon.com/512/1427/1427121.png"/></p>
                <p><img alt='item' height="50" src="https://cdn-icons-png.flaticon.com/512/919/919825.png"/></p>
            </div>
          </div>
        </div>
      }
    </div>
  )
}

export default Languages