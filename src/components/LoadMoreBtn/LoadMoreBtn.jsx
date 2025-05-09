import s from './LoadMoreBtn.module.css'

const LoadMoreBtn = ({ changePage }) => {
    return (
        <button className={s.button} onClick={changePage}>
            Load more
        </button>
    );
};
export default LoadMoreBtn;