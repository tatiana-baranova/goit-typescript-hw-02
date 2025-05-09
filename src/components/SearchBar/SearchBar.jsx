import s from './SearchBar.module.css'
import { MdImageSearch } from "react-icons/md";
import toast from 'react-hot-toast';

const SearchBar = ({ setQuery }) => {
    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const query = form.elements.query.value.trim();
        if (!query) {
            return toast.error(
                'The field is empty, enter text to search for an image.'
            );
        }
        setQuery(query);
        form.reset();
    };
    return (
        <header className={s.header}>
            <form className={s.form} onSubmit={handleSubmit}>
                <input
                    className={s.input}
                    name="query"
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos" />
                <button className={s.btn} type='submit'>
                    <MdImageSearch size="20"/>
                    Search</button>
            </form>
        </header>
    )
}
export default SearchBar;