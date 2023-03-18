import React, { useEffect, useState } from 'react'

const LatestTrailerModel = (props) => {
  const {id} = props
  
  const [videoResult, setVideoResult] = useState(null)

  const videoApi = async () => {
    const url = `https://api.themoviedb.org/3/tv/${id}/videos?api_key=184d4ae5b2d8ff18eca3972237dc1b9f`

    const fetchApi = await fetch(url)
    const reponse = await fetchApi.json()
    setVideoResult(reponse)
    }

    useEffect(() => {
      videoApi()
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [])

     
  return (
    <div>
     {videoResult && <div className="modal fade" id={`modal${videoResult.id}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-xl">
          <div className="modal-content bg-dark">
            <div className="modal-header">
              <h5 className="modal-title text-white" id="exampleModalLabel">Official Trailer {videoResult.id}</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              
           {videoResult && <iframe title='myFrame' width="1080" height="600" src={`https://www.youtube.com/embed/${videoResult.results[1].key}`}>
           </iframe>}
            
            </div>
          </div>
        </div>
      </div>}
    </div>
  )
}

export default LatestTrailerModel