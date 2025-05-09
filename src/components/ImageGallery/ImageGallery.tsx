import s from "./ImageGallery.module.css"
import ImageCard from "../ImageCard/ImageCard"
import { Image } from "../App/App.types";
import { MouseEvent } from "react";

type Props = {
    images: Image[];
    openModal: (image: Image) => void;
}

const ImageGallery = ({ images, openModal }: Props) => {
    const clickImage = (e: MouseEvent<HTMLUListElement>): void => {
        const target = e.target as HTMLElement;
        const li = target.closest("li");
        if (!li) return;
        
        const imgId = li.dataset.id;
        if (!imgId) return;
        
        const findImage = images.find((image) => image.id === imgId);
        if (findImage) {
        openModal(findImage);
    }
};
    return (
    <ul className={s.listCard} onClick={clickImage}>
        {images.map((image) => (
        <li key={image.id} className={s.card} data-id={image.id}>
            <ImageCard data={image} />
        </li>
        ))}
    </ul>
    );
};


export default ImageGallery;

