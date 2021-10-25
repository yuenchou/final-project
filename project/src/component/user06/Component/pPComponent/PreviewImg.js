import { useState } from "react";
import { TiDelete } from "react-icons/ti"
import { BsPlusCircleFill } from "react-icons/bs"


const PreviewImg = () => {
    const [selectedImage, setSelectedImage] = useState('');
    const [fileIcon, setFileIcon] = useState(<BsPlusCircleFill/>)

    // This function will be triggered when the file field change
    const imageChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            setFileIcon("");
            setSelectedImage(e.target.files[0]);
        
        }
    };

    // This function will be triggered when the "Remove This Image" button is clicked
    const removeSelectedImage = () => {
        setFileIcon(<BsPlusCircleFill/>)
        setSelectedImage();
    };

    return (
        <>
                <div style={styles.container}>
                    <label className="input-group-text upload_cover"  for="img1">
                        {fileIcon}
                    <input
                    id="img1"
                    accept="image/*"
                    type="file"
                    className="d-none"
                    onChange={imageChange}
                    />
                    {selectedImage && (
                    <div style={styles.preview}>
                        <img
                        src={URL.createObjectURL(selectedImage)}
                        style={styles.image}
                        alt="Thumb"
                        />
                        <button onClick={removeSelectedImage} style={styles.delete}>
                            <TiDelete/>
                        </button>
                    </div>
                    )}
                    </label>
                </div>

        </>
    );
};

export default PreviewImg;

// Just some styles
const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
       
    },
    preview: {
        display: "flex",
        flexDirection: "column",
    },
    image: { 
        maxWidth: "100px", 
        maxHeight: "100px" 
    },
    delete: {
        width: "30px",
        height: "30px",
        cursor: "pointer",
        color: "white",
        marginTop: "5px",
        paddingBottom: "4px",
        borderRadius: "50%"
    }
};