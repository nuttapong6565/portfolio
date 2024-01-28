import React, {useState, useEffect} from 'react'
import "./Experience.css"

function Experience() {
  const [load, setLoad] = useState({
    isLoading: true
  })

  useEffect(() => {
    setLoad({isLoading: false})
  }, [])

  const onButtonClick = (event) => {
    fetch('certificate.pdf').then(response => {
        response.blob().then(blob => {
            const fileURL = window.URL.createObjectURL(blob);
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'certificate.pdf';
            alink.click();
        })
    })
    event.preventDefault();
  } 

  return (
    <div>
      {load.isLoading? "" :  
        <div className='section' id='experience'>
          <h2 className='section-title padd-15'>Experience</h2>
          <div className="row">
            <div className="education padd-15">
              <div className="row">
                <div className="timeline-box">
                  <div className="timeline">
                    <div className="timeline-item">
                      <i className="lni lni-graduation timeline-icon"></i>
                      <h3 className="timeline-date">
                        <i className="lni lni-calendar"></i> 2017 - present
                      </h3>
                      <h3 className="timeline-title">
                        Vocational Certificate
                      </h3>
                      <p className='timeline-text'>
                        Data Technician specialising in programming
                        <br />
                        <br />
                        The data technician specialising in programming will work with advanced programme development of IT systems and applications
                        with associated integration of security solutions and graphical user interfaces. In addition, the data technician specialising in
                        programming will work with development tasks within embedded systems as well as the design, construction and implementation of
                        database solutions.
                        The data technician specialising in programming works with programme development based on standardised programming and
                        project management methods.
                        <br />
                        <br />
                      </p>
                      <div style={{textAlign: 'center'}}>
                          <a href='#' className='btn btn-default' onClick={onButtonClick}>Learn more about certificate</a>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          <div className="experience padd-15">
            <div className="row">
                <div className="timeline-box">
                  <div className="timeline">
                    <div className="timeline-item">
                      <i className="lni lni-briefcase timeline-icon"></i>
                      <h3 className="timeline-date">
                        <i className="lni lni-calendar"></i> 2019 - present
                      </h3>
                      <h3 className="timeline-title">
                        Intern Developer
                      </h3>
                      <p className='timeline-text'>
                        SkolePlan Aps - Denmark
                        <br /><br />
                        coming soon...
                      </p>
                    </div>
                    <div className="timeline-item">
                      <i className="lni lni-briefcase timeline-icon"></i>
                      <h3 className="timeline-date">
                        <i className="lni lni-calendar"></i> 2017 - 2018
                      </h3>
                      <h3 className="timeline-title">
                        Intern Developer
                      </h3>
                      <p className='timeline-text'>
                        BUMQ - Thailand
                        <br /><br />
                        coming soon...
                      </p>
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

export default Experience