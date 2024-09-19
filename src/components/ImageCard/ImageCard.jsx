import s from "./ImageCard.module.css"

const ImageCard = ({galleryData:{urls: {small},
  description},onClick
 
}) => {



  return (
    <div className={s.imageBox}>
  <img className={s.image} src={small} alt={description} onClick={onClick} />
</div>
  )
}

export default ImageCard