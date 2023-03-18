import React, { useState } from 'react'
import classes from './LatestTrailer.module.css'
import LatestTrailerModel from './LatestTrailerModel'

const LatestTrailer = () => {
    
    const results=[
      {
      "backdrop_path": "/56v2KjBlU4XaOv9rVYEQypROD7P.jpg",
      "id": 66732,
      "original_name": "Stranger Things",
      "poster_path": "/49WJfeN0moxb9IPfGn8AIqMGskD.jpg"
      },
      {
      "backdrop_path": "/mGVrXeIjyecj6TKmwPVpHlscEmw.jpg",
      "id": 76479,
      "original_name": "The Boys",
      "poster_path": "/stTEycfG9928HYGEISBFaG1ngjM.jpg"
      },
      {
      "backdrop_path": "/rlCRM7U5g2hcU1O8ylGcqsMYHIP.jpg",
      "id": 92782,
      "original_name": "Ms. Marvel",
      "poster_path": "/2Wf5ySCPcnp8lRhbSD7jt0YLz5A.jpg"
      },
      {
      "backdrop_path": "/nB8Z2lDOOSpZgTRLUVYSJ74RPof.jpg",
      "id": 75758,
      "original_name": "Lost in Space",
      "poster_path": "/4Ru1BwcAKWtpM345dWe8YgHf35V.jpg"
      }]

    const [background, setbackground] = useState("https://image.tmdb.org/t/p/w1920_and_h600_multi_faces/49WJfeN0moxb9IPfGn8AIqMGskD.jpg")

    const hoverhandler = (event)=>{
      setbackground(event.target.name) 
    }
  return (
    <div>
        <div style={{ padding:"20px",backgroundImage: `linear-gradient(#aaaaaa7c, #333333ee), url(${background})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", height:"350px"}} className="my-4">
          <h4 className='text-white mb-4'>Latest Trailer</h4>
          <div className='row'>
            {results.map((e)=>{return(
                <div key={e.id} className='col-md-3'>
                <div className={classes.ImgContainer} data-bs-toggle="modal" data-bs-target={`#modal${e.id}`}>
                <i className={`fa-solid fa-play text-white ${classes.playBtn}`}></i>
                <img className={classes.ImgWidth} width="300px" style={{borderRadius:"12px"}} name={`https://image.tmdb.org/t/p/w1920_and_h600_multi_faces${e.backdrop_path}`} src={`https://image.tmdb.org/t/p/w500${e.backdrop_path}`} onMouseOver={hoverhandler} alt=""/>
                </div>
                <h5 style={{textAlign:"center"}} className='text-white mt-2'>{e.original_name}</h5>
                <LatestTrailerModel id={e.id}/>
              </div>
            )})}
              
          </div>
        </div>
        </div>)
}

export default LatestTrailer