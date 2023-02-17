import React from 'react';
import './index.css';

const Index = () => {
    const updateImg = (event) => {
        const files = event.target.files;
        for (const image of files) {
            const reader = new FileReader();

            reader.readAsDataURL(image);

            reader.onload = () => {
                const imagesArray = localStorage.getItem('images');
                let images = [];

                if (imagesArray) {
                    images = [...JSON.parse(imagesArray)];

                    images.push(reader.result);
                } else {
                    images.push(reader.result);
                }

                localStorage.setItem('images', JSON.stringify(images));
            };
        }

    };
    return (
        <div className="container">
            <div className="left-container">
                <img className="homepage-banner" src="../../assets/images/memories.png" alt="" />
            </div>
            <div className="right-container">
                <h2>Upload your photos HERE !!!</h2>
                <div className="image-upload-box">
                    <div className="inside-img-box">
                        <img src="../../assets/images/images-icon.png" alt="" />
                    </div>
                    <form id='post-form' className='post-form' method='post'>
                        <input className='file' id="image-upload" type='file' multiple onChange={updateImg}
                            accept="image/jpeg , image/png , image/jpg" />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Index
