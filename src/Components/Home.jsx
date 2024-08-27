import React from 'react';
import './Home.css';
import vid3 from "../assets/img/vid3.mp4";

const Home = () => {
    return (
        <>
            <div className='home'>
                <video autoPlay loop muted playsInline className='backVideo'>
                    <source src={vid3} type='video/mp4' />
                </video>

                <div className="container text-center">
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <div className='homeAbout animated-box in'>
                                <h4>" Programming is the art of algorithm design and the craft of debugging errant code "</h4>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className='homeOptions'>
                                <div className='sorting'>
                                    <h4 className='Para'>Sorting Algorithm Visualizer</h4>
                                    <small className='subPara'>Understand how sorting algorithms work with interactive visualizations.</small>
                                </div>
                                <div className='searching'>
                                    <h4 className='Para'>Searching Algorithm Visualizer</h4>
                                    <small className='subPara'>Visualize how different searching algorithms find data in a dataset.</small>
                                </div>
                                <div className='pathways'>
                                    <h4 className='Para'>Pathfinding Algorithm Visualizer</h4>
                                    <small className='subPara'>Explore how pathfinding algorithms determine the shortest path.</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
