import s from "./ImageCard.module.css"

const ImageCard = ({
  galleryData: {
    urls: { small },
    alt_description,
  },
  onClick,
}) => {
  return (
    <div className={s.imageBox}>
      <img
        className={s.image}
        src={small}
        alt={alt_description}
        onClick={onClick}
      />
    </div>
  )
}

export default ImageCard
