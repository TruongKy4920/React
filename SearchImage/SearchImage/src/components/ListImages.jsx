import ShowImage from "./ShowImage";

function ListImages({images}){
    const re_render=images.map((image)=>{
        return <ShowImage key={image.id} image={image} desc={image.alt_description}></ShowImage>
    });
    return (<div>
        {re_render}
    </div>);
}
export default ListImages;