import React, { useState } from 'react';
import "../../styles/translatestyles.css"
import axios from 'axios';

function Translate() {

    const [selectedFile, setSelectedFile] = useState(null);
    const [textImg, setTextImg] = useState('')
    const [translationImg, setTranslationImg] = useState('')
    const handleFileChange = async (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);

        try {
            await handleSubmit(file);
        } catch (error) {
            console.error('Error handling file:', error);
        }
    };

    const handleSubmit = async (file) => {
        if (!file) {
            console.error('No file selected');
            return;
        }

        const formData = new FormData();
        formData.append('image', file);

        try {
            const response = await axios.post('http://localhost:3001/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            const {text, translation} = response.data
            setTextImg(text)
            setTranslationImg(translation)
            console.log(textImg, translationImg)

            // Aquí puedes manejar la respuesta del backend, como actualizar el estado con el texto traducido.
        } catch (error) {
            console.error('Error sending file to backend:', error);
        }
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
                                    <ion-icon name="chevron-down-outline"></ion-icon>
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
                                value={textImg}
                                placeholder="Enter your text here"
                            ></textarea>
                            <div class="chars"><span id="input-chars">0</span> / 5000</div>
                        </div>
                        <div class="card-bottom">
                            <p>Or choose your document!</p>
                            <label for="upload-document">
                                <span id="upload-title">Choose File</span>
                                <ion-icon name="cloud-upload-outline"></ion-icon>
                                <input onChange={handleFileChange} type="file" id="upload-document" hidden />
                            </label>
                        </div>
                    </div>

                    <div class="center">
                        <div class="swap-position">
                            <ion-icon name="swap-horizontal-outline"></ion-icon>
                        </div>
                    </div>

                    <div class="card output-wrapper">
                        <div class="to">
                            <span class="heading">To :</span>
                            <div class="dropdown-container" id="output-language">
                                <div class="dropdown-toggle">
                                    <ion-icon name="globe-outline"></ion-icon>
                                    <span class="selected" data-value="en">English</span>
                                    <ion-icon name="chevron-down-outline"></ion-icon>
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
                            <button id="download-btn">
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