import React, { useState } from 'react';
import "../../styles/translatestyles.css"
import axios from 'axios';

function Translate() {

    const [textImg, setTextImg] = useState('')
    const [manualText, setManualText] = useState('')
    const [translationImg, setTranslationImg] = useState('')
    const handleFileChange = async (event) => {
        console.log("entréx2?")
        const file = event.target.files[0];

        try {
            await handleSubmit(file);
            event.target.value = null;
        } catch (error) {
            console.error('Error handling file:', error);
        }
    };

    const handleDownload = () => {
        const element = document.createElement('a');
        const file = new Blob([translationImg], { type: 'text/plain' });
        element.href = URL.createObjectURL(file);
        element.download = 'translated_text.txt';
        document.body.appendChild(element);
        element.click();
    };

    const handleManualTranslate = async () => {        

        console.log("holi",manualText)
        try {
            const response = await axios.post('https://google-vision-thqf.onrender.com/translate', {
                text: manualText
            });
            
            const { translation } = response.data;
            setTranslationImg(translation);
        } catch (error) {
            console.error('Error sending manual text to backend:', error);
        }
    };

    const handleSubmit = async (file) => {
        console.log("entré?")
        if (!file) {
            console.error('No file selected');
            return;
        }

        const formData = new FormData();
        formData.append('image', file);

        try {
            const response = await axios.post('https://google-vision-thqf.onrender.com/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            const {text, translation} = response.data
            setTextImg(text)
            setTranslationImg(translation)
            console.log("hola?")
            console.log(textImg, translationImg)

        } catch (error) {
            console.error('Error sending file to backend:', error);
        }
    };

    const handleCameraCapture = () => {
        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.accept = 'image/*';
        fileInput.capture = 'camera';
    
        fileInput.onchange = async (event) => {
            const file = event.target.files[0];
    
            if (file) {
                try {
                    await handleSubmit(file);
    
                    if (fileInput) {
                        fileInput.value = null;
                    }
                } catch (error) {
                    console.error('Error handling camera capture:', error);
                }
            }
        };
    
        fileInput.click();
    };    

    

    const handleClearText = () => {
        setTextImg('');
        setManualText('');
        setTranslationImg('');
    };

    return (
        <div class="root-translate">
            <body class="translate">
                <div class="mode">
                    <label class="toggle" for="dark-mode-btn">
                        <div class="toggle-track">
                            <input type="checkbox" class="toggle-checkbox" id="dark-mode-btn" />
                            <span class="toggle-thumb"></span>
                            <img src="images/sun.png" alt="" />
                            <img src="images/moon.png" alt="" />
                        </div>
                    </label>
                </div>
                <div class="container">
                    <div class="card input-wrapper">
                        <div class="from">
                            <span class="heading">From :</span>
                            <div class="dropdown-container" id="input-language">
                                <div class="dropdown-toggle">
                                    <ion-icon name="globe-outline"></ion-icon>
                                    <span class="selected" data-value="auto">Auto Detect</span>
                                </div>
                                <ul class="dropdown-menu">
                                    <li class="option active">DropDown Menu Item 1</li>
                                    <li class="option">DropDown Menu Item 2</li>
                                </ul>
                            </div>
                        </div>
                        <div class="text-area">
                            <textarea
                                id="input-text"
                                cols="30"
                                rows="10"
                                value={textImg? textImg : manualText}
                                onChange={(e) => setManualText(e.target.value)}
                                placeholder="Enter your text here"
                            ></textarea>
                            <button className="swap-close" onClick={handleClearText}>
                                <ion-icon name="close-outline"></ion-icon>
                            </button>
                            <div class="chars"><span id="input-chars">0</span> / 5000</div>
                        </div>
                        <div class="card-bottom">
                            <p>Or choose your image!</p>
                            <label htmlFor="upload-document">
                                <span id="upload-title">Choose File</span>
                                <ion-icon name="cloud-upload-outline"></ion-icon>
                                <input onChange={handleFileChange} type="file" id="upload-document" hidden accept="image/*" />
                            </label>
                            <button onClick={handleCameraCapture}>
                                <span>Take Photo</span>
                                <ion-icon name="camera-outline"></ion-icon>
                            </button>
                        </div>
                    </div>

                    <div class="center">
                        <button className="swap-position" onClick={handleManualTranslate}>
                            <ion-icon name="send-outline"></ion-icon>
                        </button>
                    </div>

                    <div class="card output-wrapper">
                        <div class="to">
                            <span class="heading">To :</span>
                            <div class="dropdown-container" id="output-language">
                                <div class="dropdown-toggle">
                                    <ion-icon name="globe-outline"></ion-icon>
                                    <span class="selected" data-value="es">English</span>
                                    {/* <ion-icon name="chevron-down-outline"></ion-icon> */}
                                </div>
                                <ul class="dropdown-menu">
                                    <li class="option active">DropDown Menu Item 1</li>
                                    <li class="option">DropDown Menu Item 2</li>
                                </ul>
                            </div>
                        </div>
                        <textarea
                            id="output-text"
                            cols="30"
                            rows="10"
                            value={translationImg}
                            placeholder="Translated text will appear here"
                            disabled
                        ></textarea>
                        <div class="card-bottom">
                            <p>Download as a document!</p>
                            <button id="download-btn" onClick={handleDownload}>
                                <span>Download</span>
                                <ion-icon name="cloud-download-outline"></ion-icon>
                            </button>
                        </div>
                    </div>
                </div>

                <script src="languages.js"></script>
                <script src="script.js"></script>
            </body>
        </div>
    )
}
export default Translate