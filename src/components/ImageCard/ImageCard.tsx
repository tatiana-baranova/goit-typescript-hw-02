import s from './ImageCard.module.css'
import { Image } from '../App/App.types';

type Props = {
    data: Image;
};

const ImageCard = ({
    data: {
        alt_description,
        id,
        urls: { small },
    },
}: Props) => {
    return (
        <div className={s.wrapper}>
            <img className={s.img} src={small} alt={alt_description} id={id} />
        </div>
    );
};

export default ImageCard;