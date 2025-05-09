import { useEffect } from "react";
import Modal from 'react-modal';
import { SlClose } from "react-icons/sl";
import s from './ImageModal.module.css';


const ImageModal = ({  isOpen, closeModal, image  }) => {
    useEffect(() => {
    Modal.setAppElement('#root');
}, []);
if(!image) return

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={closeModal}
            className={s.modal}
            overlayClassName={s.overlay}
            shouldCloseOnEsc={true}
            shouldCloseOnOverlayClick={true}
            closeTimeoutMS={100}
        >
            <button className={s.btn} onClick={closeModal}>
                <SlClose size="30" />
            </button>
            <div className={s.wrap}>
            <img className={s.img} src={image.urls.regular}
                    alt={image.alt_description} />
                <h3 className={s.title}>{image.description !== null ? image.description : image.alt_description}
                </h3>
                <p className={s.text}>Image author: {image.user.name}</p>
                <p className={s.text}>Image likes: {image.likes}</p>
            </div>
            
        </Modal>
    )
};

export default ImageModal;