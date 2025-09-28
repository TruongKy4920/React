function ProfileCard({title,handle,img,origin}){
    return (<div className="card">
        <div class="card-image">
            <figure class="image is-4by3">
                <img alt="PDA logo" src={img}></img>
                </figure>
        </div>
        <div class="card-content">
                <div class="media-content">
                        <p class="title is-4">{title}</p>
                        <p class="subtitle is-6">{handle}</p>
                </div>
        </div>
        <div class="content">
            {origin}
        </div>
    </div>);
}
export default ProfileCard;