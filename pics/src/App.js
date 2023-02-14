import ImageList from "./components/ImageList";
import SearchBar from "./components/SearchBar";
import searchImages from "./api";
import {useState} from "react";


function App() {
    const [images , setImages] = useState([])
    const onSubmit = async (term) => {
    // ok, now we can search using this term
    const result = await searchImages(term)
        setImages(result)

}

  return (
    <div className="App">
      <SearchBar onSubmit={ onSubmit }/>
        <ImageList images={images}/>
    </div>
  );
}

export default App;
