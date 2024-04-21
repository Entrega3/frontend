import React from 'react'
import "../../styles/translatestyles.css"

function Translate() {
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
                                placeholder="Enter your text here"
                            ></textarea>
                            <div class="chars"><span id="input-chars">0</span> / 5000</div>
                        </div>
                        <div class="card-bottom">
                            <p>Or choose your document!</p>
                            <label for="upload-document">
                                <span id="upload-title">Choose File</span>
                                <ion-icon name="cloud-upload-outline"></ion-icon>
                                <input type="file" id="upload-document" hidden />
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