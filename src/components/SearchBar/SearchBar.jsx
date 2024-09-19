import s from "./SearchBar.module.css"

import toast, { Toaster } from 'react-hot-toast';


const SearchBar = ({onSubmit}) => {

const handleSubmit = (e)=>{
e.preventDefault()
const form = e.target
const value = form.elements.searchQuery.value
if (value.trim()=== ""){
  form.reset()
  toast.error("Please enter your request!")
  return
}
onSubmit(value);
form.reset()

}

  return (
    <header className={s.header}>
      <Toaster/>
  <form onSubmit={handleSubmit}>
    <input
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
      name="searchQuery"
    />
    <button type="submit">Search</button>
  </form>
</header>

  )
}

export default SearchBar