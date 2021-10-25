import { useState } from "react";
import '../../../css/style03.css';
const IMG = () => {
    const [selectedImage, setSelectedImage] = useState();
  
    // This function will be triggered when the file field change
    const imageChange = (e) => {
      if (e.target.files && e.target.files.length > 0) {
        setSelectedImage(e.target.files[0]);
      }
    };
  
    // This function will be triggered when the "Remove This Image" button is clicked
    const removeSelectedImage = () => {
      setSelectedImage();
    };
    return (
        <>
        <div className="h-100 mt-4 d-flex justify-content-center align-items-center" >
            {selectedImage && (
            <div className="">            
                    <img
                    id="user03Img"
                    src={URL.createObjectURL(selectedImage)}
                    alt=""
                    style={{ width:'300px', height:'300px'}}
                    />                            
            </div>
            )}

        </div>
        <div className="h-25 mt-2 d-flex flex-column justify-content-center align-items-center">
            <div className="d-flex">
                <label className="btn btn-project d-flex justify-content-center" style={{ height:"40px", width:"50px"}}  htmlFor="imgUpload">                            
                    <div className="h-75 fw-bolder fs-1 d-flex justify-content-center align-items-center">
                        <span className="" >+</span>
                    </div>                                           
                </label> 
                <div className="btn mx-3"  onClick={removeSelectedImage}>
                    <span>換一張</span>
                </div> 
            </div>                     
            <span className="text-center fs-5 mt-4 fw-bolder">請上傳圖片</span>            
            <input type="file" accept="image/*" onChange={imageChange}  className="invisible" id="imgUpload"/>
        </div>
        </>
    );
};

export default IMG;