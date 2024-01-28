import React, {useState, useEffect} from 'react'
import './Footer.css'

const Footer = () => {
  const [load, setLoad] = useState({
    isLoading: true
  })

  useEffect(() => {
    setLoad({isLoading: false})
  }, [])

  return (
    <div>
      {load.isLoading? "" : 
        <div>
            <footer className='footer'>
                <div className='footer-text padd-15'>
                    <p>&copy; Developed by Nuttapong Ngoenkhanphetr</p>
                </div>
            </footer>
        </div>
      }
    </div>
  )
}

export default Footer