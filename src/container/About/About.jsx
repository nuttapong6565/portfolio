import React, {useState, useEffect} from 'react'
import "./About.css"

function About() {
  const onButtonClick = (event) => {
    fetch('resume.pdf').then(response => {
        response.blob().then(blob => {
            const fileURL = window.URL.createObjectURL(blob);
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'resume.pdf';
            alink.click();
        })
    })
    event.preventDefault();
  } 

  const [load, setLoad] = useState({
    isLoading: true
  })

  useEffect(() => {
    setLoad({isLoading: false})
  }, [])

  return (
    <div>
      {load.isLoading? "" : 
        <div className="about section" id="about">
          <div className='container'>
            <h2 className="section-title padd-15">About Me</h2>  
            <div className="row">
              <div className="about-img padd-15">
                <img className="about-img-img" src="./profile2.jpg" alt='me'></img> 
              </div>
              <div className="about-content padd-15">
                <div className="rounded">
                  <div className="row">
                    <div className="about-text">
                      <p>
                        Hello there! I'm a web developer And Yes! I love coding! New knowledge is always a good thing. 
                        I want to learn everything as much as I can. I used to work with C# ASP.NET but my favorite programming language is Javascript.
                        I also love to take some online courses. Well... Let's check me out below!
                      </p>
                      <div>
                        <a href='#' className='btn btn-default' onClick={onButtonClick}>Download Resume</a>
                      </div>
                    </div>
                    <div className="skills padd-15">
                        <div className="row">
                          <div className="skill-item">
                            <h4>C#</h4>
                            <div className="progress">
                              <div id='progress1' className="progress-in"></div>
                              <div className="skill-percent">85%</div>
                            </div>
                          </div>
                          <div className="skill-item">
                            <h4>Javascript</h4>
                            <div className="progress">
                              <div id='progress2' className="progress-in"></div>
                              <div className="skill-percent">90%</div>
                            </div>
                          </div>
                          <div className="skill-item">
                            <h4>Python</h4>
                            <div className="progress">
                              <div id='progress3' className="progress-in"></div>
                              <div className="skill-percent">70%</div>
                            </div>
                          </div>
                        </div>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  )
}

export default About