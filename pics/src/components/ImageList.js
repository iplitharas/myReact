import ImageShow from "./ImageShow";
import "./ImageList.css"
function ImageList( {images}) {
    return (
        <div class="image-list">
            {images.map( (image) => {
                    return <ImageShow image={image} key={image.id}/>
            })}
        </div>
    )
}


export default ImageList