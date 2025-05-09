import s from './LoadMoreBtn.module.css'

type Props = {
    changePage: () => void;
};
const LoadMoreBtn = ({ changePage }: Props) => {
    return (
        <button className={s.button} onClick={changePage}>
            Load more
        </button>
    );
};
export default LoadMoreBtn;