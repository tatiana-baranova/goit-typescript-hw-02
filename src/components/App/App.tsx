import { useEffect, useState } from 'react'
import SearchBar from '../SearchBar/SearchBar';
import getImages from '../../services/api'
import Loader from '../Loader/Loader';
import ImageGallery from '../ImageGallery/ImageGallery';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import { Toaster } from 'react-hot-toast';
import './App.css'
import ImageModal from '../ImageModal/ImageModal';
import { Image } from './App.types';

interface ImageData {
  total_pages: number;
  total: number;
  results: Image[];
}

function App() {
  const [query, setQuery] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const [error, setError] = useState<boolean>(false);
  const [image, setImage] = useState<Image[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [totalPage, setTotalPage] = useState<number>(0);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [selectImage, setSelectImage] = useState<Image | null>(null);

  useEffect(() => {
    if (!query) return;
    const getData = async (): Promise<void> => {
      try {
        setError(false);
        setLoading(true);
        const data: ImageData = await getImages(query, page);
        if (!data) {
          throw new Error('No data received from the API');
        }
      
        setImage(prev => [...prev, ...data.results]);
        setTotalPage(data.total_pages);
        console.log(data);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [query, page]);

  

  const handleSetQuery = (searchValue: string):void => {
    setQuery(searchValue);
    setImage([]);
    setPage(1);
  };

  const handleChangePage = (): void => {
    setPage(prev => prev + 1);
  }

  const openModal = (selectImage: Image): void => {
    setSelectImage(selectImage);
    setModalIsOpen(true);
  }

  const closeModal = (): void => {
    setModalIsOpen(false);
  }

  return (
    <>
      <SearchBar setQuery={handleSetQuery} />
      <Toaster position="bottom-right"/>
      {error && <ErrorMessage/>}
      <ImageGallery images={image} openModal={openModal}/>
      {loading && <Loader />}
      {image.length > 0 && page < totalPage && (
        <LoadMoreBtn changePage={handleChangePage}/>
      )}
      <ImageModal
        isOpen={modalIsOpen}
        closeModal={closeModal}
        image={selectImage}
      />
    </>
  )
}

export default App
