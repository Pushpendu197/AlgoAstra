import React from 'react'
import './Home.css'
import vid3 from "../assets/img/vid3.mp4";

const Home = () => {
    return (
        <>
            <div className='home'>
                <video autoPlay loop muted playsInline className='backVideo'>
                    <source src={vid3} type='video/mp4' />
                </video>
                <div className='homeSection'>
                    <div className='homeAbout'>
                        <h4>" Programming is the art of algorithm design and the craft of debugging errant code "</h4>
                    </div>

                    <div className='homeOptions'>
                        <div className='sorting'>
                            <h4 className='Para'>Sorting Algorithm Visualizer</h4>
                            <small className='subPara'></small>
                        </div>
                        <div className='searching'>
                            <h4 className='Para'>Sorting Algorithm Visualizer</h4>
                            <small className='subPara'></small>
                        </div>
                        <div className='pathways'>
                            <h4 className='Para'>Sorting Algorithm Visualizer</h4>
                            <small className='subPara'></small>
                        </div>



                    </div>
                </div>
            </div>
        </>
    )
}

export default Home