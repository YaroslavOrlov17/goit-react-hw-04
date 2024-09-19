import ImageCard from "../ImageCard/ImageCard"
import s from "./ImageGallery.module.css"


const ImageGallery = ({galleryData,onImageClick}) => {


  return (
    <ul className={s.galleryList}>
{galleryData.map(item=><li key={item.id}>
<ImageCard galleryData={item} onClick={()=>onImageClick(item)} />
	</li> )}
	
</ul>

  )
}

export default ImageGallery 