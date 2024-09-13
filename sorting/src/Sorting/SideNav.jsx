import React, { useState } from 'react';
import './SideNav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo, faXmark } from '@fortawesome/free-solid-svg-icons';
import Modal from 'react-modal';

const SideNav = ({ isOpen, onClose }) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalContent, setModalContent] = useState(null);

    const loadContent = (content) => {
        setModalContent(content);
        setModalIsOpen(true);
    };

    const handleListItemClick = async (item) => {
        if (item === 'Bubble Sort') {
            const { default: AboutBubble } = await import('./aboutSorts/AboutBubble');
            loadContent(<AboutBubble />);
        }
        // Add similar cases for other sorting algorithms here
    };

    return (
        <div className={`sidenav ${isOpen ? 'open' : 'closed'}`}>
            <div className='navArea'>
                <div className='close' onClick={onClose}>
                    <FontAwesomeIcon icon={faXmark} />
                </div>
                <ul className='UL'>
                    <li onClick={() => handleListItemClick('Bubble Sort')}>
                        <FontAwesomeIcon icon={faCircleInfo} /> About Bubble Sort
                    </li>
                    {/* Add other list items and handle them similarly */}
                </ul>
            </div>
            <Modal
                closeTimeoutMS={150}
                style={{
                    overlay: {
                        backgroundColor: 'rgba(0,0,0,0.4)'
                    },
                    content: {
                        boxShadow: '2px 2px 30px black',
                        background: '#2C2C34',
                        top: '60px',
                        bottom: '60px',
                        left: '60px',
                        border: 'none',
                        right: '60px',
                    }
                }}
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
            >
                <div>{modalContent}</div>
                <button align="center" className="close-button" onClick={() => setModalIsOpen(false)}>
                    <FontAwesomeIcon icon={faXmark} />
                </button>
            </Modal>
        </div>
    );
};

export default SideNav;
