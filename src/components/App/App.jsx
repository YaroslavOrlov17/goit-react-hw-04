import ImageGallery from "../ImageGallery/ImageGallery";
import SearchBar from "../SearchBar/SearchBar";
import Loader from "../Loader/Loader.jsx";
import ErrorMessage from "../ErrorMessage/ErrorMessage.jsx";
import s from "./App.module.css"
import {fetchImage} from '../../assets/unsplash-api.js'
import { useEffect, useState } from "react";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn.jsx";
import ImageModal from "../ImageModal/ImageModal.jsx";


function App() {
  const [images,setImages] = useState([])
  const [loading,setLoading] = useState(false)
  const [error,setError] = useState(false)
  const [page,setPage] = useState(1)
  const [query,setQuery] = useState("")
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [totalImages, setTotalImages] = useState(0);


useEffect(()=>{
  if(!query){
    return
  }
  const getData = async()=>{
    try{
      setError(false)
      setLoading(true)
      const data = await fetchImage(page,query)
      console.log(data);
      setImages((prev)=> [...prev,...data.results])
      setTotalImages(data.total);
    }catch {
      setError(true)
    }finally{
      setLoading(false)
    }
  }
  getData()
},[query,page])

const handleSetQuery = (searchValue)=> {
  setQuery(searchValue)
  setImages([])
  setPage(1)
}

const handleChangePage = ()=>{
  setPage((prev)=> prev + 1)
}

function handleImageClick(image){
  setSelectedImage(image)
  setIsOpen(true)
}


function closeModal() {
  setIsOpen(false);
}

  return <div className={s.appContainer}>
<SearchBar onSubmit={handleSetQuery}/>
  <div className={s.mainContent}>
  {error && <ErrorMessage/>}
  {!loading && images.length === 0 && query && <p className={s.noResults}>Sorry, we could not find any photos matching your search. Please try another keyword</p>} 
  {images.length> 0 && <ImageGallery onImageClick={handleImageClick} galleryData={images} />}
  {loading && <Loader />}
  {images.length > 0 && images.length < totalImages && !loading && (
  <LoadMoreBtn onChangePage={handleChangePage} />
)}
  {modalIsOpen && <ImageModal isOpen={modalIsOpen} image={selectedImage} isClose={closeModal} />}
  </div>
  </div>
}

export default App;


