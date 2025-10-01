function ShowImage({image,desc}){
    return (<div>
        <img src={image.urls.small} alt={desc}></img>
    </div>);
}
export default ShowImage;