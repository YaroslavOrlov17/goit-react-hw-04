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


  function handleImageClick(image){
    setSelectedImage(image)
    setIsOpen(true)
  }


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
      setImages((prev)=> [...prev,...data])
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

function closeModal() {
  setIsOpen(false);
}

  return <div className={s.appContainer}>
  <SearchBar onSubmit={handleSetQuery}/>
  {error && <ErrorMessage/>}
  {images.length> 0 && <ImageGallery onImageClick={handleImageClick} galleryData={images} />}
  {loading && <Loader />}
  {images.length > 0 && <LoadMoreBtn onChangePage={handleChangePage}/>}
  {modalIsOpen && <ImageModal isOpen={modalIsOpen} image={selectedImage} isClose={closeModal} />}

 
  </div>
}

export default App;


// //()=> {
//   async function handleSearch (query){
//     try {
//   setImages([])
//   setError(false)
//   setLoading(true)
//       const data =  await fetchImage(page,query)
//       setImages(data)
//       setPage(page +1)
//       console.log(page);
//       console.log(data);
//     }catch {
//   setError(true)
//     }finally{
//       setLoading(false)
//     }
//    }
// },[page,query]