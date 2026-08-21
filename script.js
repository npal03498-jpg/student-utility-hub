// =====================================================
// STUDENT HUB
// Main JavaScript
// =====================================================


// =====================================================
// ELEMENTS
// =====================================================

const toolSearch = document.getElementById("toolSearch");
const toolsGrid = document.getElementById("toolsGrid");
const toolCards = document.querySelectorAll(".tool-card");
const toolCount = document.getElementById("toolCount");
const noResults = document.getElementById("noResults");

const toolModal = document.getElementById("toolModal");
const modalContent = document.getElementById("modalContent");
const closeModal = document.getElementById("closeModal");

const themeToggle = document.getElementById("themeToggle");


// =====================================================
// TOOL SEARCH
// =====================================================

toolSearch.addEventListener("input", function () {

    const searchText = this.value
        .toLowerCase()
        .trim();

    let visibleTools = 0;

    toolCards.forEach(function (card) {

        const toolName = card
            .dataset
            .name
            .toLowerCase();

        if (toolName.includes(searchText)) {

            card.style.display = "flex";

            visibleTools++;

        } else {

            card.style.display = "none";

        }

    });


    toolCount.textContent = visibleTools;


    if (visibleTools === 0) {

        noResults.classList.remove("hidden");

    } else {

        noResults.classList.add("hidden");

    }

});


// =====================================================
// OPEN TOOL BUTTONS
// =====================================================

const openToolButtons =
    document.querySelectorAll(".open-tool");


openToolButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const toolName =
            this.dataset.tool;

        openTool(toolName);

    });

});


// =====================================================
// OPEN TOOL FUNCTION
// =====================================================

function openTool(toolName) {

    let content = "";


    // -------------------------------------------------
    // Percentage Calculator
    // -------------------------------------------------

    if (toolName === "percentage") {

        content = `

            <h2>🧮 Percentage Calculator</h2>

            <p>
                Calculate what percentage one number
                is of another number.
            </p>

            <div class="tool-form">

                <label>
                    Percentage
                </label>

                <input
                    type="number"
                    id="percentageValue"
                    placeholder="Example: 20"
                >

                <label>
                    Number
                </label>

                <input
                    type="number"
                    id="percentageNumber"
                    placeholder="Example: 500"
                >

                <button
                    class="primary-btn"
                    id="calculatePercentage"
                >
                    Calculate
                </button>

                <div
                    id="percentageResult"
                    class="result-box"
                >
                    Result will appear here
                </div>

            </div>

        `;

    }


    // -------------------------------------------------
    // CGPA Calculator
    // -------------------------------------------------

    else if (toolName === "cgpa") {

        content = `

            <h2>🎓 CGPA Calculator</h2>

            <p>
                Enter your semester GPAs to calculate
                your average CGPA.
            </p>

            <div class="tool-form">

                <label>
                    Semester 1 GPA
                </label>

                <input
                    type="number"
                    class="gpa-input"
                    min="0"
                    max="10"
                    step="0.01"
                    placeholder="Example: 8.5"
                >

                <label>
                    Semester 2 GPA
                </label>

                <input
                    type="number"
                    class="gpa-input"
                    min="0"
                    max="10"
                    step="0.01"
                    placeholder="Example: 8.2"
                >

                <label>
                    Semester 3 GPA
                </label>

                <input
                    type="number"
                    class="gpa-input"
                    min="0"
                    max="10"
                    step="0.01"
                    placeholder="Example: 9.0"
                >

                <label>
                    Semester 4 GPA
                </label>

                <input
                    type="number"
                    class="gpa-input"
                    min="0"
                    max="10"
                    step="0.01"
                    placeholder="Example: 8.7"
                >

                <button
                    class="primary-btn"
                    id="calculateCGPA"
                >
                    Calculate CGPA
                </button>

                <div
                    id="cgpaResult"
                    class="result-box"
                >
                    Your CGPA will appear here
                </div>

            </div>

        `;

    }


    // -------------------------------------------------
    // Pomodoro Timer
    // -------------------------------------------------
          else if (toolName === "pomodoro") {

    content = `

        <h2>⏱️ Pomodoro Timer</h2>

        <p>
            Set your focus time and start studying.
        </p>

        <div class="tool-form">

            <label>
                Focus Time (minutes)
            </label>

            <input
                type="number"
                id="pomodoroMinutes"
                value="25"
                min="1"
                max="120"
                placeholder="Example: 25"
            >

        </div>

        <div class="timer">

            <div
                id="timerDisplay"
                class="timer-display"
            >
                25:00
            </div>

            <div class="timer-buttons">

                <button
                    class="primary-btn"
                    id="startTimer"
                >
                    Start
                </button>

                <button
                    class="primary-btn"
                    id="pauseTimer"
                >
                    Pause
                </button>

                <button
                    class="primary-btn"
                    id="resetTimer"
                >
                    Reset
                </button>

            </div>

        </div>

    `;
}   
    

    // -------------------------------------------------
    // Word Counter
    // -------------------------------------------------

    else if (toolName === "word") {

        content = `

            <h2>📝 Word Counter</h2>

            <p>
                Type or paste your text below.
            </p>

            <div class="tool-form">

                <textarea
                    id="wordText"
                    rows="8"
                    placeholder="Start typing..."
                ></textarea>

                <div
                    id="wordResult"
                    class="result-box"
                >
                    Words: 0 | Characters: 0
                </div>

            </div>

        `;

    }


    // -------------------------------------------------
    // Password Generator
    // -------------------------------------------------

    else if (toolName === "password") {

        content = `

            <h2>🔐 Password Generator</h2>

            <p>
                Generate a strong random password.
            </p>

            <div class="tool-form">

                <label>
                    Password Length
                </label>

                <input
                    type="number"
                    id="passwordLength"
                    value="16"
                    min="6"
                    max="50"
                >

                <button
                    class="primary-btn"
                    id="generatePassword"
                >
                    Generate Password
                </button>

                <div class="password-result">

                    <input
                        type="text"
                        id="passwordOutput"
                        readonly
                        placeholder="Your password"
                    >

                    <button
                        class="copy-btn"
                        id="copyPassword"
                    >
                        Copy
                    </button>

                </div>

            </div>

        `;

    }


    // -------------------------------------------------
    // QR Generator
    // -------------------------------------------------

    else if (toolName === "qr") {

        content = `

            <h2>🔳 QR Code Generator</h2>

            <p>
                Enter text or a website URL.
            </p>

            <div class="tool-form">

                <input
                    type="text"
                    id="qrText"
                    placeholder="https://example.com"
                >

                <button
                    class="primary-btn"
                    id="generateQR"
                >
                    Generate QR Code
                </button>

                <div
                    id="qrResult"
                    class="result-box"
                >
                    QR code will appear here
                </div>

            </div>

        `;

    }


    // Put content inside modal

    modalContent.innerHTML = content;

    toolModal.classList.remove("hidden");


    // Activate the selected tool

    setupTool(toolName);

}


// =====================================================
// TOOL FUNCTIONALITY
// =====================================================

function setupTool(toolName) {


    // =================================================
    // PERCENTAGE
    // =================================================

    if (toolName === "percentage") {

        const calculate =
            document.getElementById(
                "calculatePercentage"
            );


        calculate.addEventListener("click", function () {

            const percentage =
                parseFloat(
                    document.getElementById(
                        "percentageValue"
                    ).value
                );


            const number =
                parseFloat(
                    document.getElementById(
                        "percentageNumber"
                    ).value
                );


            const result =
                document.getElementById(
                    "percentageResult"
                );


            if (
                Number.isNaN(percentage) ||
                Number.isNaN(number)
            ) {

                result.textContent =
                    "Please enter both numbers.";

                return;

            }


            const answer =
                (percentage / 100) * number;


            result.textContent =
                `${percentage}% of ${number} = ${answer}`;

        });

    }


    // =================================================
    // CGPA
    // =================================================

    else if (toolName === "cgpa") {

        const calculate =
            document.getElementById(
                "calculateCGPA"
            );


        calculate.addEventListener("click", function () {

            const inputs =
                document.querySelectorAll(
                    ".gpa-input"
                );


            let total = 0;

            let count = 0;


            inputs.forEach(function (input) {

                const value =
                    parseFloat(input.value);


                if (!Number.isNaN(value)) {

                    total += value;

                    count++;

                }

            });


            const result =
                document.getElementById(
                    "cgpaResult"
                );


            if (count === 0) {

                result.textContent =
                    "Please enter at least one GPA.";

                return;

            }


            const cgpa =
                total / count;


            result.textContent =
                `Your CGPA is ${cgpa.toFixed(2)}`;

        });

    }


    // =================================================
    // POMODORO
    // =================================================

    else if (toolName === "pomodoro") {

    let timeLeft = 25 * 60;

    let timerInterval = null;

    let isRunning = false;


    const display =
        document.getElementById("timerDisplay");

    const minutesInput =
        document.getElementById("pomodoroMinutes");

    const start =
        document.getElementById("startTimer");

    const pause =
        document.getElementById("pauseTimer");

    const reset =
        document.getElementById("resetTimer");


    function updateDisplay() {

        const minutes =
            Math.floor(timeLeft / 60);

        const seconds =
            timeLeft % 60;


        display.textContent =
            `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

    }


    // Change timer when user changes minutes

    minutesInput.addEventListener(
        "change",
        function () {

            if (isRunning) {
                return;
            }


            let minutes =
                parseInt(this.value);


            if (Number.isNaN(minutes)) {
                minutes = 25;
            }


            if (minutes < 1) {
                minutes = 1;
            }


            if (minutes > 120) {
                minutes = 120;
            }


            this.value = minutes;

            timeLeft = minutes * 60;

            updateDisplay();

        }
    );


    // Start

    start.addEventListener(
        "click",
        function () {

            if (timerInterval !== null) {
                return;
            }


            isRunning = true;

            minutesInput.disabled = true;

            start.textContent = "Running...";


            timerInterval =
                setInterval(
                    function () {

                        if (timeLeft > 0) {

                            timeLeft--;

                            updateDisplay();

                        }


                        if (timeLeft <= 0) {

                            clearInterval(
                                timerInterval
                            );

                            timerInterval = null;

                            isRunning = false;

                            minutesInput.disabled = false;

                            start.textContent = "Start";

                            alert(
                                "🎉 Time's up! Take a break."
                            );

                        }

                    },
                    1000
                );

        }
    );


    // Pause

    pause.addEventListener(
        "click",
        function () {

            if (timerInterval !== null) {

                clearInterval(
                    timerInterval
                );

                timerInterval = null;

                isRunning = false;

                minutesInput.disabled = false;

                start.textContent = "Resume";

            }

        }
    );


    // Reset

    reset.addEventListener(
        "click",
        function () {

            clearInterval(
                timerInterval
            );

            timerInterval = null;

            isRunning = false;

            minutesInput.disabled = false;

            start.textContent = "Start";


            let minutes =
                parseInt(
                    minutesInput.value
                );


            if (
                Number.isNaN(minutes) ||
                minutes < 1
            ) {

                minutes = 25;

                minutesInput.value = 25;

            }


            timeLeft = minutes * 60;

            updateDisplay();

        }
    );


    updateDisplay();

}


    // =================================================
    // WORD COUNTER
    // =================================================

    else if (toolName === "word") {

        const textarea =
            document.getElementById(
                "wordText"
            );


        const result =
            document.getElementById(
                "wordResult"
            );


        textarea.addEventListener(
            "input",
            function () {

                const text =
                    this.value;


                const characters =
                    text.length;


                const words =
                    text.trim() === ""
                        ? 0
                        : text.trim().split(/\s+/).length;


                const sentences =
                    text.trim() === ""
                        ? 0
                        : text.split(/[.!?]+/)
                            .filter(
                                sentence =>
                                    sentence.trim().length > 0
                            )
                            .length;


                result.textContent =
                    `Words: ${words} | Characters: ${characters} | Sentences: ${sentences}`;

            }
        );

    }


    // =================================================
    // PASSWORD GENERATOR
    // =================================================

    else if (toolName === "password") {

        const generate =
            document.getElementById(
                "generatePassword"
            );


        const output =
            document.getElementById(
                "passwordOutput"
            );


        const copy =
            document.getElementById(
                "copyPassword"
            );


        generate.addEventListener(
            "click",
            function () {

                let length =
                    parseInt(
                        document.getElementById(
                            "passwordLength"
                        ).value
                    );


                if (
                    Number.isNaN(length) ||
                    length < 6
                ) {

                    length = 16;

                }


                if (length > 50) {

                    length = 50;

                }


                const characters =
                    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";


                let password = "";


                for (
                    let i = 0;
                    i < length;
                    i++
                ) {

                    const randomIndex =
                        Math.floor(
                            Math.random() *
                            characters.length
                        );


                    password +=
                        characters[randomIndex];

                }


                output.value =
                    password;

            }
        );


        copy.addEventListener(
            "click",
            async function () {

                if (!output.value) {

                    return;

                }


                try {

                    await navigator.clipboard.writeText(
                        output.value
                    );


                    copy.textContent =
                        "Copied!";


                    setTimeout(
                        function () {

                            copy.textContent =
                                "Copy";

                        },
                        1500
                    );

                } catch (error) {

                    alert(
                        "Unable to copy password."
                    );

                }

            }
        );

    }


    // =================================================
    // QR CODE
    // =================================================

    else if (toolName === "qr") {

        const generate =
            document.getElementById(
                "generateQR"
            );


        const input =
            document.getElementById(
                "qrText"
            );


        const result =
            document.getElementById(
                "qrResult"
            );


        generate.addEventListener(
            "click",
            function () {

                const text =
                    input.value.trim();


                if (!text) {

                    result.textContent =
                        "Please enter text or a URL.";

                    return;

                }


                const qrURL =
                    `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(text)}`;


                result.innerHTML = `

                    <img
                        src="${qrURL}"
                        alt="Generated QR Code"
                        width="220"
                        height="220"
                        style="
                            display:block;
                            margin:0 auto 15px;
                            border-radius:10px;
                        "
                    >

                    <p>
                        QR code generated successfully.
                    </p>

                `;

            }
        );

    }

}


// =====================================================
// CLOSE MODAL
// =====================================================

closeModal.addEventListener(
    "click",
    function () {

        toolModal.classList.add("hidden");

        modalContent.innerHTML = "";

    }
);


// Close when clicking outside modal

document
    .querySelector(".modal-overlay")
    .addEventListener(
        "click",
        function () {

            toolModal.classList.add("hidden");

            modalContent.innerHTML = "";

        }
    );


// =====================================================
// ESC KEY CLOSE
// =====================================================

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Escape" &&
            !toolModal.classList.contains("hidden")
        ) {

            toolModal.classList.add("hidden");

            modalContent.innerHTML = "";

        }

    }
);


// =====================================================
// DARK MODE
// =====================================================

themeToggle.addEventListener(
    "click",
    function () {

        document.body.classList.toggle("dark");


        const darkMode =
            document.body.classList.contains(
                "dark"
            );


        themeToggle.textContent =
            darkMode ? "☀️" : "🌙";


        localStorage.setItem(
            "studentHubDarkMode",
            darkMode
        );

    }
);


// Load saved theme

const savedTheme =
    localStorage.getItem(
        "studentHubDarkMode"
    );


if (savedTheme === "true") {

    document.body.classList.add("dark");

    themeToggle.textContent = "☀️";

}


// =====================================================
// CONSOLE MESSAGE
// =====================================================

console.log(
    "🚀 StudentHub JavaScript loaded successfully!"
);