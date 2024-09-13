import React from 'react'
import './About.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons'
import { } from '@fortawesome/free-brands-svg-icons'

const About = () => {
    return (
        <>
            <div className='about'>
                <div className='aboutSection'>
                    <div className='imageSection'>
                        <h4>What About AlgorithmAstra <FontAwesomeIcon icon={faCode} /></h4>
                    </div>
                    <div className='writeUp'>
                        <h4>What About AlgorithmAstra <FontAwesomeIcon icon={faCode} /></h4>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About