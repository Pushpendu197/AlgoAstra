import React from 'react'
import './Hero.css'
import SideNav from './SideNav'
import Head from './Head'

const Hero = () => {
    return (
        <>
            <SideNav />
            <Head />
            <div className='heroSection'>

                <div class="container text-center">
                    <div class="row">
                        <div class="col-sm-2 left">
                            TIME COMPLEXITY :
                        </div>
                        <div class="col-sm-10 right">col-sm-8</div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Hero