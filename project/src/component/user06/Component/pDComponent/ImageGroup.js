import React from 'react';
import '../../css/myStyle06.css';
import { Image } from 'cloudinary-react';




const ImageGroup = ({imgList}) => {

    const handleClick = () => {
        var thumbnails = document.getElementsByClassName('thumbnail4')
    
        var activeImages = document.getElementsByClassName('active')
    
        for (var i=0; i < thumbnails.length; i++){
    
            thumbnails[i].addEventListener('click', function(){
                
                if (activeImages.length > 0){
                    activeImages[0].classList.remove('active')
                }
                
        
                this.classList.add('active')
                document.getElementById('featured').src = this.src
            })
        }
    
    }

    return (
        <div className="column">
                        
            <Image id="featured" className="thumbnail2" cloudName="domzm9awh" publicId={imgList[0]}></Image>
            <div id="slider" className="d-flex mt-4">
                {imgList.map(val => (
                    <Image className="thumbnail4 me-3 active" src={val} alt="..." onClick={handleClick}></Image>
                ))}
            </div>
        </div>    
    )
}

export default ImageGroup;