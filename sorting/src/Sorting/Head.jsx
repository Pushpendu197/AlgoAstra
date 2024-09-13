import React, { useState } from 'react';
import './Header.css';
import './SideNav.css';  // Import the SideNav styles here
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo, faXmark } from '@fortawesome/free-solid-svg-icons';
import SideNav from './SideNav';  // Import the SideNav component

const Head = () => {
    const [isSideNavOpen, setIsSideNavOpen] = useState(false);
    const [modalContent, setModalContent] = useState('');  // Controls the modal content
    const [isModalOpen, setIsModalOpen] = useState(false);  // Controls the modal visibility

    const handleInfoClick = () => {
        setIsSideNavOpen(true);
    };

    const handleCloseSideNav = () => {
        setIsSideNavOpen(false);
    };

    const handleListItemClick = (content) => {
        setModalContent(content);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <nav className='HeaderSection bg-dark' data-bs-theme="dark">
                <div className="container">
                    <div className="row">
                        <div className="col-1">
                            <div className='Infoicon' onClick={handleInfoClick}>
                                <FontAwesomeIcon icon={faCircleInfo} />
                            </div>
                        </div>
                        <div className="col-4">
                            <div className='Range'>
                                <h6 className='Linktext range'>Size of The Array :</h6>
                                <h6 className='Linktext range'>Delay :</h6>
                                <button type="button" className="btn btn-secondary">Generate New Array</button>
                            </div>
                        </div>
                        <div className="col-md-auto">
                            <div className='navItems'>
                                <ul className="nav navBox">
                                    <li className="nav-item">
                                        <button type="button" className="btn btn-outline-primary">Bubble Sort</button>
                                    </li>
                                    <li className="nav-item">
                                        <button type="button" className="btn btn-outline-light">Quick Sort</button>
                                    </li>
                                    <li className="nav-item">
                                        <button type="button" className="btn btn-outline-success">Insertion Sort</button>
                                    </li>
                                    <li className="nav-item">
                                        <button type="button" className="btn btn-outline-danger">Merge Sort</button>
                                    </li>
                                    <li className="nav-item">
                                        <button type="button" className="btn btn-outline-warning">Selection Sort</button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <SideNav
                isOpen={isSideNavOpen}
                onClose={handleCloseSideNav}
                onListItemClick={handleListItemClick}
            />

            {isModalOpen && (
                <div className='modal'>
                    <div className='modal-content'>
                        <span className='close-modal' onClick={handleCloseModal}><FontAwesomeIcon icon={faXmark} /></span>
                        <p>{modalContent}</p>
                    </div>
                </div>
            )}
        </>
    );
}

export default Head;
