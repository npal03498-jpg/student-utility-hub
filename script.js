// =====================================================
// STUDENTHUB
// CLEAN FINAL JAVASCRIPT
// =====================================================


// =====================================================
// ELEMENTS
// =====================================================

const toolSearch =
    document.getElementById("toolSearch");

const toolCards =
    document.querySelectorAll(".tool-card");

const toolCount =
    document.getElementById("toolCount");

const noResults =
    document.getElementById("noResults");

const toolModal =
    document.getElementById("toolModal");

const modalContent =
    document.getElementById("modalContent");

const closeModal =
    document.getElementById("closeModal");

const themeToggle =
    document.getElementById("themeToggle");

const categoryButtons =
    document.querySelectorAll(".category-card");

const mobileMenuBtn =
    document.getElementById("mobileMenuBtn");

const mainNav =
    document.getElementById("mainNav");


// =====================================================
// CATEGORY
// =====================================================

let activeCategory = "all";


// =====================================================
// SEARCH + FILTER
// =====================================================

function filterTools() {

    const searchText =
        toolSearch.value
            .toLowerCase()
            .trim();

    let visibleTools = 0;


    toolCards.forEach(function (card) {

        const toolName =
            (card.dataset.name || "")
                .toLowerCase();

        const categories =
            (card.dataset.category || "")
                .toLowerCase();


        const matchesSearch =
            toolName.includes(searchText);


        const matchesCategory =
            activeCategory === "all" ||
            categories.includes(activeCategory);


        if (
            matchesSearch &&
            matchesCategory
        ) {

            card.style.display = "flex";

            visibleTools++;

        } else {

            card.style.display = "none";

        }

    });


    toolCount.textContent = visibleTools;


    if (visibleTools === 0) {

        noResults.classList.remove(
            "hidden"
        );

    } else {

        noResults.classList.add(
            "hidden"
        );

    }

}


if (toolSearch) {

    toolSearch.addEventListener(
        "input",
        filterTools
    );

}


// =====================================================
// CATEGORY BUTTONS
// =====================================================

categoryButtons.forEach(
    function (button) {

        button.addEventListener(
            "click",
            function () {

                activeCategory =
                    this.dataset.category;


                categoryButtons.forEach(
                    function (btn) {

                        btn.classList.remove(
                            "active"
                        );

                    }
                );


                this.classList.add(
                    "active"
                );


                filterTools();


                const toolsSection =
                    document.getElementById(
                        "tools"
                    );


                if (toolsSection) {

                    toolsSection.scrollIntoView({
                        behavior: "smooth"
                    });

                }

            }
        );

    }
);


// =====================================================
// CTRL + K
// =====================================================

document.addEventListener(
    "keydown",
    function (event) {

        if (
            (event.ctrlKey || event.metaKey) &&
            event.key.toLowerCase() === "k"
        ) {

            event.preventDefault();

            if (toolSearch) {

                toolSearch.focus();

                toolSearch.select();

            }

        }

    }
);


// =====================================================
// MOBILE MENU
// =====================================================

if (
    mobileMenuBtn &&
    mainNav
) {

    mobileMenuBtn.addEventListener(
        "click",
        function () {

            const isOpen =
                mainNav.classList.toggle(
                    "mobile-open"
                );


            mobileMenuBtn.setAttribute(
                "aria-expanded",
                isOpen
            );


            mobileMenuBtn.textContent =
                isOpen ? "✕" : "☰";

        }
    );


    const navLinks =
        mainNav.querySelectorAll("a");


    navLinks.forEach(
        function (link) {

            link.addEventListener(
                "click",
                function () {

                    mainNav.classList.remove(
                        "mobile-open"
                    );


                    mobileMenuBtn.textContent =
                        "☰";


                    mobileMenuBtn.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                }
            );

        }
    );

}


// =====================================================
// OPEN TOOL BUTTONS
// =====================================================

const openToolButtons =
    document.querySelectorAll(
        ".open-tool"
    );


openToolButtons.forEach(
    function (button) {

        button.addEventListener(
            "click",
            function () {

                const toolName =
                    this.dataset.tool;


                openTool(toolName);

            }
        );

    }
);


// =====================================================
// OPEN TOOL
// =====================================================

function openTool(toolName) {

    let content = "";


    // =================================================
    // PERCENTAGE
    // =================================================

    if (toolName === "percentage") {

        content = `

            <h2>🧮 Percentage Calculator</h2>

            <p>
                Calculate a percentage of any number.
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
                    Result will appear here.
                </div>

            </div>

        `;

    }


    // =================================================
    // CGPA
    // =================================================

    else if (toolName === "cgpa") {

        content = `

            <h2>🎓 CGPA Calculator</h2>

            <p>
                Calculate your average CGPA from
                semester GPAs.
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
                    Your CGPA will appear here.
                </div>

            </div>

        `;

    }


    // =================================================
    // POMODORO
    // =================================================

    else if (toolName === "pomodoro") {

        content = `

            <h2>⏱️ Pomodoro Timer</h2>

            <p>
                Focus on your studies with a
                customizable timer.
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


    // =================================================
    // WORD COUNTER
    // =================================================

    else if (toolName === "word") {

        content = `

            <h2>📝 Word Counter</h2>

            <p>
                Count words, characters and sentences.
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
                    Words: 0 | Characters: 0 | Sentences: 0
                </div>

            </div>

        `;

    }


    // =================================================
    // PASSWORD
    // =================================================

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


    // =================================================
    // QR CODE
    // =================================================

    else if (toolName === "qr") {

        content = `

            <h2>🔳 QR Code Generator</h2>

            <p>
                Convert text or a URL into a QR code.
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
                    QR code will appear here.
                </div>

            </div>

        `;

    }


    // =================================================
    // AGE CALCULATOR
    // =================================================

    else if (toolName === "age") {

        content = `

            <h2>🎂 Age Calculator</h2>

            <p>
                Calculate your exact age from your
                date of birth.
            </p>

            <div class="tool-form">

                <label>
                    Date of Birth
                </label>

                <input
                    type="date"
                    id="dateOfBirth"
                >

                <button
                    class="primary-btn"
                    id="calculateAge"
                >
                    Calculate Age
                </button>

                <div
                    id="ageResult"
                    class="result-box"
                >
                    Your exact age will appear here.
                </div>

            </div>

        `;

    }


    // =================================================
    // DISCOUNT CALCULATOR
    // =================================================

    else if (toolName === "discount") {

        content = `

            <h2>💰 Discount Calculator</h2>

            <p>
                Calculate your savings and final price.
            </p>

            <div class="tool-form">

                <label>
                    Original Price
                </label>

                <input
                    type="number"
                    id="originalPrice"
                    min="0"
                    step="0.01"
                    placeholder="Example: 1000"
                >

                <label>
                    Discount Percentage
                </label>

                <input
                    type="number"
                    id="discountPercent"
                    min="0"
                    max="100"
                    step="0.01"
                    placeholder="Example: 20"
                >

                <button
                    class="primary-btn"
                    id="calculateDiscount"
                >
                    Calculate Discount
                </button>

                <div
                    id="discountResult"
                    class="result-box"
                >
                    Your result will appear here.
                </div>

            </div>

        `;

    }


    // =================================================
    // BMI CALCULATOR
    // =================================================

    else if (toolName === "bmi") {

        content = `

            <h2>⚖️ BMI Calculator</h2>

            <p>
                Calculate your Body Mass Index
                using height and weight.
            </p>

            <div class="tool-form">

                <label>
                    Height (cm)
                </label>

                <input
                    type="number"
                    id="bmiHeight"
                    min="50"
                    max="250"
                    step="0.1"
                    placeholder="Example: 170"
                >

                <label>
                    Weight (kg)
                </label>

                <input
                    type="number"
                    id="bmiWeight"
                    min="10"
                    max="300"
                    step="0.1"
                    placeholder="Example: 65"
                >

                <button
                    class="primary-btn"
                    id="calculateBMI"
                >
                    Calculate BMI
                </button>

                <div
                    id="bmiResult"
                    class="result-box"
                >
                    Your BMI result will appear here.
                </div>

            </div>

        `;

    }


    // =================================================
    // AI PROMPT GENERATOR
    // =================================================

    else if (toolName === "prompt") {

        content = `

            <h2>🤖 AI Prompt Generator</h2>

            <p>
                Create a useful AI prompt for study,
                coding, writing, research and more.
            </p>

            <div class="tool-form">

                <label>
                    Prompt Type
                </label>

                <select id="promptType">

                    <option value="study">
                        📚 Study
                    </option>

                    <option value="coding">
                        💻 Coding
                    </option>

                    <option value="writing">
                        ✍️ Writing
                    </option>

                    <option value="research">
                        🔬 Research
                    </option>

                    <option value="resume">
                        📄 Resume
                    </option>

                    <option value="presentation">
                        🎤 Presentation
                    </option>

                </select>


                <label>
                    Topic
                </label>

                <input
                    type="text"
                    id="promptTopic"
                    placeholder="Example: Physics"
                >


                <label>
                    Goal
                </label>

                <textarea
                    id="promptGoal"
                    rows="4"
                    placeholder="What do you want the AI to help you with?"
                ></textarea>


                <label>
                    Level
                </label>

                <select id="promptLevel">

                    <option value="beginner">
                        Beginner
                    </option>

                    <option value="intermediate">
                        Intermediate
                    </option>

                    <option value="advanced">
                        Advanced
                    </option>

                </select>


                <button
                    class="primary-btn"
                    id="generatePrompt"
                >
                    Generate Prompt
                </button>


                <div
                    id="promptResult"
                    class="result-box"
                    style="
                        text-align:left;
                        white-space:pre-wrap;
                    "
                >
                    Your AI prompt will appear here.
                </div>


                <button
                    class="copy-btn"
                    id="copyPrompt"
                    style="
                        width:100%;
                        margin-top:10px;
                        padding:12px;
                    "
                >
                    Copy Prompt
                </button>

            </div>

        `;

    }


    // =================================================
    // SHOW MODAL
    // =================================================

    modalContent.innerHTML =
        content;

    toolModal.classList.remove(
        "hidden"
    );


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

        const result =
            document.getElementById(
                "percentageResult"
            );


        calculate.addEventListener(
            "click",
            function () {

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

            }
        );

    }


    // =================================================
    // AGE
    // =================================================

    else if (toolName === "age") {

        const dobInput =
            document.getElementById(
                "dateOfBirth"
            );

        const calculateButton =
            document.getElementById(
                "calculateAge"
            );

        const result =
            document.getElementById(
                "ageResult"
            );


        const today =
            new Date();


        const todayString =
            [
                today.getFullYear(),
                String(today.getMonth() + 1).padStart(2, "0"),
                String(today.getDate()).padStart(2, "0")
            ].join("-");


        dobInput.max =
            todayString;


        calculateButton.addEventListener(
            "click",
            function () {

                if (!dobInput.value) {

                    result.textContent =
                        "Please select your date of birth.";

                    return;

                }


                const birthDate =
                    new Date(
                        dobInput.value +
                        "T00:00:00"
                    );


                const currentDate =
                    new Date();


                if (
                    birthDate >
                    currentDate
                ) {

                    result.textContent =
                        "Date of birth cannot be in the future.";

                    return;

                }


                let years =
                    currentDate.getFullYear() -
                    birthDate.getFullYear();


                let months =
                    currentDate.getMonth() -
                    birthDate.getMonth();


                let days =
                    currentDate.getDate() -
                    birthDate.getDate();


                if (days < 0) {

                    months--;


                    const previousMonth =
                        new Date(
                            currentDate.getFullYear(),
                            currentDate.getMonth(),
                            0
                        );


                    days +=
                        previousMonth.getDate();

                }


                if (months < 0) {

                    years--;

                    months += 12;

                }


                result.innerHTML = `

                    <strong>
                        ${years} years,
                        ${months} months,
                        ${days} days
                    </strong>

                    <br><br>

                    🎉 That's your exact age!

                `;

            }
        );

    }


    // =================================================
    // DISCOUNT
    // =================================================

    else if (toolName === "discount") {

        const originalPrice =
            document.getElementById(
                "originalPrice"
            );

        const discountPercent =
            document.getElementById(
                "discountPercent"
            );

        const calculateButton =
            document.getElementById(
                "calculateDiscount"
            );

        const result =
            document.getElementById(
                "discountResult"
            );


        calculateButton.addEventListener(
            "click",
            function () {

                const price =
                    parseFloat(
                        originalPrice.value
                    );

                const discount =
                    parseFloat(
                        discountPercent.value
                    );


                if (
                    Number.isNaN(price) ||
                    price < 0
                ) {

                    result.textContent =
                        "Please enter a valid original price.";

                    return;

                }


                if (
                    Number.isNaN(discount) ||
                    discount < 0 ||
                    discount > 100
                ) {

                    result.textContent =
                        "Discount must be between 0% and 100%.";

                    return;

                }


                const savings =
                    price *
                    (discount / 100);


                const finalPrice =
                    price -
                    savings;


                result.innerHTML = `

                    <div>
                        💰 You Save:
                        <strong>
                            ₹${savings.toFixed(2)}
                        </strong>
                    </div>

                    <br>

                    <div>
                        🛒 Final Price:
                        <strong>
                            ₹${finalPrice.toFixed(2)}
                        </strong>
                    </div>

                `;

            }
        );

    }


    // =================================================
    // BMI
    // =================================================

    else if (toolName === "bmi") {

        const heightInput =
            document.getElementById(
                "bmiHeight"
            );

        const weightInput =
            document.getElementById(
                "bmiWeight"
            );

        const calculateButton =
            document.getElementById(
                "calculateBMI"
            );

        const result =
            document.getElementById(
                "bmiResult"
            );


        calculateButton.addEventListener(
            "click",
            function () {

                const heightCm =
                    parseFloat(
                        heightInput.value
                    );

                const weightKg =
                    parseFloat(
                        weightInput.value
                    );


                if (
                    Number.isNaN(heightCm) ||
                    heightCm <= 0
                ) {

                    result.textContent =
                        "Please enter a valid height.";

                    return;

                }


                if (
                    Number.isNaN(weightKg) ||
                    weightKg <= 0
                ) {

                    result.textContent =
                        "Please enter a valid weight.";

                    return;

                }


                const heightM =
                    heightCm / 100;


                const bmi =
                    weightKg /
                    (heightM * heightM);


                let category;


                if (bmi < 18.5) {

                    category =
                        "Underweight";

                }

                else if (bmi < 25) {

                    category =
                        "Normal weight";

                }

                else if (bmi < 30) {

                    category =
                        "Overweight";

                }

                else {

                    category =
                        "Obesity";

                }


                result.innerHTML = `

                    <div>
                        ⚖️ Your BMI:
                        <strong>
                            ${bmi.toFixed(1)}
                        </strong>
                    </div>

                    <br>

                    <div>
                        Category:
                        <strong>
                            ${category}
                        </strong>
                    </div>

                `;

            }
        );

    }


    // =================================================
    // CGPA
    // =================================================

    else if (toolName === "cgpa") {

        const calculate =
            document.getElementById(
                "calculateCGPA"
            );


        calculate.addEventListener(
            "click",
            function () {

                const inputs =
                    document.querySelectorAll(".gpa-input");


                let total = 0;

                let count = 0;


                inputs.forEach(
                    function (input) {

                        const value =
                            parseFloat(
                                input.value
                            );


                        if (
                            !Number.isNaN(value)
                        ) {

                            if (
                                value >= 0 &&
                                value <= 10
                            ) {

                                total += value;

                                count++;

                            }

                        }

                    }
                );


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

            }
        );

    }


    // =================================================
    // POMODORO
    // =================================================

    else if (toolName === "pomodoro") {

        let timeLeft =
            25 * 60;

        let timerInterval =
            null;


        const display =
            document.getElementById(
                "timerDisplay"
            );

        const minutesInput =
            document.getElementById(
                "pomodoroMinutes"
            );

        const start =
            document.getElementById(
                "startTimer"
            );

        const pause =
            document.getElementById(
                "pauseTimer"
            );

        const reset =
            document.getElementById(
                "resetTimer"
            );


        function updateDisplay() {

            const minutes =
                Math.floor(
                    timeLeft / 60
                );

            const seconds =
                timeLeft % 60;


            display.textContent =
                `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

        }


        minutesInput.addEventListener(
            "change",
            function () {

                if (
                    timerInterval !== null
                ) {

                    return;

                }


                let minutes =
                    parseInt(
                        this.value
                    );


                if (
                    Number.isNaN(minutes)
                ) {

                    minutes = 25;

                }


                minutes =
                    Math.max(
                        1,
                        Math.min(
                            120,
                            minutes
                        )
                    );


                this.value =
                    minutes;


                timeLeft =
                    minutes * 60;


                updateDisplay();

            }
        );


        start.addEventListener(
            "click",
            function () {

                if (
                    timerInterval !== null
                ) {

                    return;

                }


                minutesInput.disabled =
                    true;


                start.textContent =
                    "Running...";


                timerInterval =
                    setInterval(
                        function () {

                            if (
                                timeLeft > 0
                            ) {

                                timeLeft--;

                                updateDisplay();

                            }


                            if (
                                timeLeft <= 0
                            ) {

                                clearInterval(
                                    timerInterval
                                );

                                timerInterval =
                                    null;

                                minutesInput.disabled =
                                    false;

                                start.textContent =
                                    "Start";


                                alert(
                                    "🎉 Time's up! Take a break."
                                );

                            }

                        },
                        1000
                    );

            }
        );


        pause.addEventListener(
            "click",
            function () {

                if (
                    timerInterval !== null
                ) {

                    clearInterval(
                        timerInterval
                    );

                    timerInterval =
                        null;

                    minutesInput.disabled =
                        false;

                    start.textContent =
                        "Resume";

                }

            }
        );


        reset.addEventListener(
            "click",
            function () {

                clearInterval(
                    timerInterval
                );


                timerInterval =
                    null;


                minutesInput.disabled =
                    false;


                start.textContent =
                    "Start";


                let minutes =
                    parseInt(
                        minutesInput.value
                    );


                if (
                    Number.isNaN(minutes)
                ) {

                    minutes = 25;

                }


                minutes =
                    Math.max(
                        1,
                        Math.min(
                            120,
                            minutes
                        )
                    );


                minutesInput.value =
                    minutes;


                timeLeft =
                    minutes * 60;


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
                        : text
                            .trim()
                            .split(/\s+/)
                            .length;


                const sentences =
                    text.trim() === ""
                        ? 0
                        : text
                            .split(/[.!?]+/)
                            .filter(
                                function (sentence) {

                                    return (
                                        sentence.trim()
                                            .length > 0
                                    );

                                }
                            )
                            .length;


                result.textContent =
                    `Words: ${words} | Characters: ${characters} | Sentences: ${sentences}`;

            }
        );

    }


    // =================================================
    // PASSWORD
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
                    Number.isNaN(length)
                ) {

                    length = 16;

                }


                length =
                    Math.max(
                        6,
                        Math.min(
                            50,
                            length
                        )
                    );


                const characters =
                    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";


                let password =
                    "";


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
                        characters[
                            randomIndex
                        ];

                }


                output.value =
                    password;

            }
        );


        copy.addEventListener(
            "click",
            async function () {

                if (
                    !output.value
                ) {

                    return;

                }


                try {

                    await navigator.clipboard
                        .writeText(
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

                }

                catch (error) {

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


    // =================================================
    // AI PROMPT GENERATOR
    // =================================================

    else if (toolName === "prompt") {

        const generateButton =
            document.getElementById(
                "generatePrompt"
            );

        const copyButton =
            document.getElementById(
                "copyPrompt"
            );

        const result =
            document.getElementById(
                "promptResult"
            );


        generateButton.addEventListener(
            "click",
            function () {

                const type =
                    document.getElementById(
                        "promptType"
                    ).value;

                const topic =
                    document.getElementById(
                        "promptTopic"
                    ).value.trim();

                const goal =
                    document.getElementById(
                        "promptGoal"
                    ).value.trim();

                const level =
                    document.getElementById(
                        "promptLevel"
                    ).value;


                if (!topic) {

                    result.textContent =
                        "Please enter a topic.";

                    return;

                }


                if (!goal) {

                    result.textContent =
                        "Please enter your goal.";

                    return;

                }


                const typeNames = {

                    study:
                        "expert study tutor",

                    coding:
                        "senior software developer",

                    writing:
                        "professional writer and editor",

                    research:
                        "academic research assistant",

                    resume:
                        "professional resume and career advisor",

                    presentation:
                        "professional presentation designer"

                };


                const role =
                    typeNames[type] ||
                    "helpful expert";


                const prompt = `Act as an ${role}.

Topic:
${topic}

Goal:
${goal}

Level:
${level}

Instructions:
1. Explain everything clearly and logically.
2. Use simple language where possible.
3. Break complex information into clear steps.
4. Provide practical examples.
5. Highlight important points.
6. Avoid unnecessary information.
7. If something is unclear, state the assumption before answering.
8. Give the final answer in a well-structured format.

Please help me achieve my goal effectively.`;


                result.textContent =
                    prompt;

            }
        );


        copyButton.addEventListener(
            "click",
            async function () {

                const text =
                    result.textContent.trim();


                if (
                    !text ||
                    text ===
                    "Your AI prompt will appear here."
                ) {

                    return;

                }


                try {

                    await navigator.clipboard
                        .writeText(text);


                    copyButton.textContent =
                        "Copied!";


                    setTimeout(
                        function () {

                            copyButton.textContent =
                                "Copy Prompt";

                        },
                        1500
                    );

                }

                catch (error) {

                    alert(
                        "Unable to copy prompt."
                    );

                }

            }
        );

    }

}


// =====================================================
// CLOSE MODAL
// =====================================================

function closeToolModal() {

    toolModal.classList.add(
        "hidden"
    );

    modalContent.innerHTML = "";
    document.body.classList.remove("modal-open");

}


if (closeModal) {

    closeModal.addEventListener(
        "click",
        closeToolModal
    );

}


const modalOverlay =
    document.querySelector(
        ".modal-overlay"
    );


if (modalOverlay) {

    modalOverlay.addEventListener(
        "click",
        closeToolModal
    );

}


// =====================================================
// ESC TO CLOSE
// =====================================================

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Escape" &&
            toolModal &&
            !toolModal.classList.contains(
                "hidden"
            )
        ) {

            closeToolModal();

        }

    }
);


// =====================================================
// DARK MODE
// =====================================================

if (themeToggle) {

    themeToggle.addEventListener(
        "click",
        function () {

            document.body.classList.toggle(
                "dark"
            );


            const darkMode =
                document.body.classList.contains(
                    "dark"
                );


            themeToggle.textContent =
                darkMode
                    ? "☀️"
                    : "🌙";


            localStorage.setItem(
                "studentHubDarkMode",
                darkMode
            );

        }
    );

}


// =====================================================
// LOAD DARK MODE
// =====================================================

const savedTheme =
    localStorage.getItem(
        "studentHubDarkMode"
    );


if (
    savedTheme === "true"
) {

    document.body.classList.add(
        "dark"
    );


    if (themeToggle) {

        themeToggle.textContent =
            "☀️";

    }

}


// =====================================================
// INITIAL FILTER
// =====================================================

filterTools();


// =====================================================
// CONSOLE
// =====================================================

console.log(
    "🚀 StudentHub V3 loaded successfully!"
);