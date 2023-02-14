function ImageShow( {image}) {
    return (
        <div>
            <img className="image" alt="some-image" src={image.urls.small}/>
        </div>
    )
}

export default ImageShow