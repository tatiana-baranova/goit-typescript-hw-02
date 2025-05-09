import s from './Loader.module.css'
import { ClimbingBoxLoader } from "react-spinners";

const Loader = () => {
    return (
        <ClimbingBoxLoader
            className={s.loader}
            color="#de4f4f"
            loading
            size={18}
            speedMultiplier={1.5}
/>
    )
};

export default Loader;