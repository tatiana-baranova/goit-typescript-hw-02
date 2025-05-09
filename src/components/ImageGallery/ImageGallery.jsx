import s from "./ImageGallery.module.css"
import ImageCard from "../ImageCard/ImageCard"


const ImageGallery = ({ images, openModal }) => {
    return (
    <ul className={s.listCard}>
        {images.map((image) => (
        <li key={image.id} className={s.card} onClick={() => openModal(image)}>
            <ImageCard data={image} />
        </li>
        ))}
    </ul>
    );
};


export default ImageGallery;

