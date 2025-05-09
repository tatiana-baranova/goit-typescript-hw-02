import s from './SearchBar.module.css'
import { MdImageSearch } from "react-icons/md";
import toast from 'react-hot-toast';
import { FormEvent } from 'react';

type Props = {
    setQuery: (value: string) => void;
};

const SearchBar = ({ setQuery }: Props) => {
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const query = form.elements.namedItem('query') as HTMLInputElement;
        if (!query || !query.value.trim()) {
            return toast.error(
                'The field is empty, enter text to search for an image.'
            );
        }
        setQuery(query.value.trim());
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