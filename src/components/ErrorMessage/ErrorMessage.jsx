import s from './ErrorMessage.module.css'

const ErrorMessage = () => {
    return (
        <h2 className={s.error}>Something went wrong! Try again later...</h2>
    )
};

export default ErrorMessage; 