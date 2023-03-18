import React, { useEffect, useState } from 'react'

const Media = (props) => {
    const [videoResult, setVideoResult] = useState(null)
    const [posterResult, setposterResult] = useState(null)
    const [backdropResult, setbackdropresult] = useState(null)
    const videoApi = async () => {
        const url = `https://api.themoviedb.org/3/movie/${props.id}/videos?api_key=184d4ae5b2d8ff18eca3972237dc1b9f`

        const fetchApi = await fetch(url)
        const reponse = await fetchApi.json()
        setVideoResult(reponse)
    }

    const imageApi = async () => {
        const url = `https://api.themoviedb.org/3/movie/${props.id}/images?api_key=184d4ae5b2d8ff18eca3972237dc1b9f`

        const fetchApi = await fetch(url)
        const reponse = await fetchApi.json()
        setposterResult(reponse.posters)
        setbackdropresult(reponse.backdrops)
    }


    useEffect(() => {
        videoApi()
        imageApi()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <div>
            {backdropResult && posterResult && videoResult && <div>
            <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                    <h4 className='py-2 me-4'>Media</h4>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="popular-tab" data-bs-toggle="tab" data-bs-target="#popular-tab-pane" type="button" role="tab" aria-controls="popular-tab-pane" aria-selected="false">Most Popular</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="backdrops-tab" data-bs-toggle="tab" data-bs-target="#backdrops-tab-pane" type="button" role="tab" aria-controls="backdrops-tab-pane" aria-selected="false">Backdrops</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="videos-tab" data-bs-toggle="tab" data-bs-target="#videos-tab-pane" type="button" role="tab" aria-controls="videos-tab-pane" aria-selected="false">Videos</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="posters-tab" data-bs-toggle="tab" data-bs-target="#posters-tab-pane" type="button" role="tab" aria-controls="posters-tab-pane" aria-selected="false">Posters</button>
                </li>

            </ul>
            {videoResult && <div className="tab-content" id="myTabContent">

                <div className="tab-pane fade" id="popular-tab-pane" role="tabpanel" aria-labelledby="popular-tab" tabIndex="0">
                    <div className='row'>
                    {videoResult.results[0] && <div className='col-md-6'><img src={`https://img.youtube.com/vi/${videoResult.results[0].key}/hqdefault.jpg`} alt=""/></div>}


{backdropResult[0] && <div className='col-md-6'><img src={`https://image.tmdb.org/t/p/w500${backdropResult[0].file_path}`} alt=""/></div>}
                    </div>
                </div>
                <div className="tab-pane fade row" id="backdrops-tab-pane" role="tabpanel" aria-labelledby="backdrops-tab" tabIndex="0">
                    <div className='row'>
                    {backdropResult[0] && <div className='col-md-6'><img src={`https://image.tmdb.org/t/p/w500${backdropResult[0].file_path}`} alt=""/></div>}

{backdropResult[1] && <div className='col-md-6'><img src={`https://image.tmdb.org/t/p/w500${backdropResult[1].file_path}`} alt=""/></div>}
                    </div>
                </div>
                <div className="tab-pane fade" id="posters-tab-pane" role="tabpanel" aria-labelledby="posters-tab" tabIndex="0">
                    <div className='row'>
                    {posterResult.slice(0,3).map((e)=>{return(
                        <div className='col-md-3'><img width="100%" src={`https://image.tmdb.org/t/p/w185${e.file_path}`} alt=""/></div>
                    )})}
                    </div>
                </div>
                <div className="tab-pane fade" id="videos-tab-pane" role="tabpanel" aria-labelledby="videos-tab" tabIndex="0">
                    <div className='row'>
                    {videoResult.results[0] && <div className='col-md-6'><img src={`https://img.youtube.com/vi/${videoResult.results[0].key}/hqdefault.jpg`} alt=""/></div>}
                        {videoResult.results[1] && <div className='col-md-6'><img src={`https://img.youtube.com/vi/${videoResult.results[1].key}/hqdefault.jpg`} alt=""/></div>} 
                    </div>
                </div>
            </div>}
            </div>}
        </div>
    )
}

export default Media