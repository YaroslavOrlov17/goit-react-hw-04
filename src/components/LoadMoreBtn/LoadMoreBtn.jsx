import s from './LoadMoreBtn.module.css'

const LoadMoreBtn = ({onChangePage}) => {
  function handleClick(){
  
    onChangePage()
  }

  return (
    <div className={s.btnBox}><button className={s.btnLoad} type="button" onClick={handleClick}>Load more...</button></div>
  )
}

export default LoadMoreBtn