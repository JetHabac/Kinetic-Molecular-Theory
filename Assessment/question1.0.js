let questions = [
    {
        numb: 1,
        question: " Which of the following changes to a system will not result in an increased pressure?",
        answer: "C. increasing the volume of the container",
        explanation: "The kinetic molecular theory assumes gas particles have negligible intermolecular forces.",
        options: [
            "A. adding more gas molecules",
            "B. decreasing the volume of the container",
            "C. increasing the volume of the container",
            "D. raising the temperature"
        ]
    },
    {
        numb: 2,
        question: "How do gas molecules move?",
        answer: "A. constantly and randomly",
        options: [
            "A. constantly and randomly",
            "B. in a circular motion",
            "C. in an orderly fashion",
            "D. in straight-line paths"
        ]
    },
    {
        numb: 3,
        question: "Why do gases differ from solids?",
        answer: "A. They can be compressed.",
        options: [
            "A. They can be compressed.",
            "B. They have a definite volume.",
            "C. They have a higher amount of kinetic energy.",
            "D. They have collisions with close neighbors."
        ]
    },
    {
        numb: 4,
        question: "Why are gases similar to liquids?",
        answer: "A. They are both considered fluids.",
        options: [
            "A. They are both considered fluids.",
            "B. They cannot be compressed.",
            "C. They have a definite volume.",
            "D. They take the shape of their container."
        ]
    },
    {
        numb: 5,
        question: "Which of the following is true about most gases?",
        answer: "C. They expand to completely fill their container.",
        options: [
            "A. All of the particles are of the same size.",
            "B. They cannot be compressed.",
            "C. They expand to completely fill their container.",
            "D. Their particles are very close together."
        ]
    },
    {
        numb: 6,
        question: "Which of the following assumptions of the kinetic molecular theory of gases explains that gas molecules after colliding with one another simply bounce off in different directions?",
        answer: "D. Gases undergo elastic collisions.",
        options: [
            "A. Gases are made up of tiny particles.",
            "B. Gas molecules move randomly in different directions.",
            "C. Gas molecules show no attraction for one another.",
            "D. Gases undergo elastic collisions."
        ]
    },
    {
        numb: 7,
        question: "Which of the following is the best place to store compressed gases?",
        answer: "D. secured areas where there is a proper ventilation.",
        options: [
            "A. areas where there is heat;",
            "B. confined or closed vessel;",
            "C. corridors or stairways;",
            "D. secured areas where there is a proper ventilation."
        ]
    },
    {
        numb: 8,
        question: "At which of the following temperatures will a gas diffuse through a room most rapidly?",
        answer: "D. 30 ⁰C",
        options: [
            "A. 0 ⁰C",
            "B. 10 ⁰C",
            "C. 20 ⁰C",
            "D. 30 ⁰C"
        ]
    },
    {
        numb: 9,
        question: "Last summer vacation, the Cruz family decided to go to Biliran to have a beach party. On their way to Biliran, all of them were surprised when the tire suddenly exploded. What is the probable explanation for the blown-out tire during a long summer drive?",
        answer: "D. The volume of gases increases as the temperature increases, causing a blown-up tire.",
        options: [
            "A. High temperature causes a decrease in volume.",
            "B. The amount of the gases inside the tire is increased.",
            "C. The mass of the gases inside the tire increases causing a blown-up tire.",
            "D. The volume of gases increases as the temperature increases, causing a blown-up tire."
        ]
    },
    {
        numb: 10,
        question: "Jane can still pump air in the party balloon even though it is already inflated. What explains this phenomenon?",
        answer: "A. Air molecules can be compressed.",
        options: [
            "A. Air molecules can be compressed.",
            "B. Balloons are made up of plastic.",
            "C. Balloons look better if their size is bigger.",
            "D. The air inside the balloon is hot."
        ]
    }
];

function checkAnswer(questionIndex, selectedOptionText) {
    let question = questions[questionIndex];
    let explanationBox = document.getElementById('explanation');
    
    if (!explanationBox) {
        console.error('Explanation element not found!');
        return;
    }
    
    if (selectedOptionText.trim() === question.answer.trim()) {
        explanationBox.innerHTML = `<p style='color: green;'>Correct! ${question.explanation}</p>`;
    } else {
        explanationBox.innerHTML = `<p style='color: red;'>Incorrect! ${question.explanation}</p>`;
    }
}

document.addEventListener("DOMContentLoaded", function() {
    let options = document.querySelectorAll(".option");
    options.forEach((option, index) => {
        option.addEventListener("click", function() {
            let questionIndex = parseInt(this.getAttribute("data-question-index"));
            checkAnswer(questionIndex, this.innerText);
        });
    });
});