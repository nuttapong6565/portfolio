import React, {useState, useEffect} from 'react'
import { TypeAnimation } from 'react-type-animation';
import "./Header.css";

function Header() {
  const [phrase, setPhrase] = useState({
    isLoading: true,
    items: null
  })
  const phraseChange = () => {
    let contactPhrases = ["I'm a web developer...", 3000, "And I love cat! ♡", 3000]
    setPhrase({isLoading: false, items: contactPhrases});
  }
  useEffect(() => {
    phraseChange();
  }, [])

  return (
    <div className='home' id="home">
      <div className="intro">
          <div className="center">
            <img className='profile-logo' src='./profile.jpg' alt="nuttapong"></img>
          </div>
          <h1>Nuttapong Ngoenkhanphetr</h1>
          {phrase.isLoading ? "" : 
            <TypeAnimation
              sequence={phrase.items}
              speed={60}
              wrapper="span"
              style={{ fontSize: '1.75rem' }}
              repeat={Infinity}
            />
          }
          <ul className="social-icons">
              <li><a href='https://www.facebook.com/nuttapong9595' title='nuttapong9595'><i className='lni lni-facebook-original'></i></a></li>
              <li><a href='https://discordapp.com/users/492987529448914944' title='Fluffy#0007'><i className='lni lni-discord'></i></a></li>
              <li><a href='https://github.com/nuttapong6565' title='nuttapong6565'><i className='lni lni-github-original'></i></a></li>
          </ul>
      </div>
    </div>
  )
}

export default Header