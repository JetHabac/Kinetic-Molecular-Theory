let questions = [
    {
        numb: 1,
        question: " Which of the following is not a fundamental assumption of the kinetic molecular theory?",
        answer: "B. Since the collisions of molecules are perfectly elastic, there is a strong attractive force between molecules in the gaseous state.",
        explanation: "The kinetic molecular theory assumes gas particles have negligible intermolecular forces.",
        options: [
            "A. Gas particles are in a constant state of random motion and move in straight lines until they collide with another body. ",
            "B. Since the collisions of molecules are perfectly elastic, there is a strong attractive force between molecules in the gaseous state.",
            "C. Collisions between gas particles are completely elastic. In other words, there is no net loss or gain of kinetic energy when particles collide.",
            "D. The temperature of gas is proportional to the average kinetic energy of the molecules."
        ]
    },
    {
        numb: 2,
        question: "Which of the following causes gas pressure?",
        answer: "C. gas molecules hitting the walls of a container",
        options: [
            "A. gas molecules heating up",
            "B. gas molecules knocking other gas molecules",
            "C. gas molecules hitting the walls of a container",
            "D. gas molecules bonding with other gas molecules"
        ]
    },
    {
        numb: 3,
        question: "Which of the following properties does not describe a gas?",
        answer: "A. malleability",
        options: [
            "A. malleability",
            "B. pressure",
            "C. temperature",
            "D. volume"
        ]
    },
    {
        numb: 4,
        question: "Which of the following has particles that can be drawn closer to occupy smaller volume?",
        answer: "A. air inside the syringe",
        options: [
            "A. air inside the syringe",
            "B. firewood",
            "C. fruit juice",
            "D. ice cube"
        ]
    },
    {
        numb: 5,
        question: "Which of the following does not involve the application of gas pressure?",
        answer: "B. falling leaves",
        options: [
            "A. burning fuel",
            "B. falling leaves",
            "C. rising hot air balloons",
            "D. vulcanizing tire"
        ]
    },
    {
        numb: 6,
        question: "Which of the following statements is not in harmony with the kinetic-molecular theory of gases?",
        answer: "C. The average kinetic energies of different gases are different at the same temperature.",
        options: [
            "A. Individual gas molecules are relatively far apart.",
            "B. The actual volume of the gas molecules themselves is very small compared to the volume occupied by the gas at ordinary temperatures and pressures.",
            "C. The average kinetic energies of different gases are different at the same temperature.",
            "D. There is no net gain or loss of the total kinetic (translational) energy in collisions between gas molecules."
        ]
    },
    {
        numb: 7,
        question: "Which of the following statements is false?",
        answer: "A. The density of a gas is constant as long as its temperature remains constant.",
        options: [
            "A. The density of a gas is constant as long as its temperature remains constant.",
            "B. Gases can be expanded without limit.",
            "C. Two or more gases can mix quickly and easily with one another to form a homogeneous mixture.",
            "D. The molecular weight of a gaseous compound is a non-variable quantity."
        ]
    },
    {
        numb: 8,
        question: "Which of the following statements does not agree with the kinetic molecular theory of gas?",
        answer: "C. Gas particles move in predictable patterns.",
        options: [
            "A. Gas particles are in constant motion.",
            "B. Gas particles are spaced far apart from each other.",
            "C. Gas particles move in predictable patterns.",
            "D. Gas particles move independently of one another."
        ]
    },
    {
        numb: 9,
        question: "What is the average kinetic energy of the particles in a substance?",
        answer: "C. increased as the temperature of the substance increases",
        options: [
            "A. equal to the total thermal energy absorbed by the substance",
            "B. increased as the temperature of the substance decreases",
            "C. increased as the temperature of the substance increases",
            "D. unaffected by changes in the temperature if the substance increases"
        ]
    },
    {
        numb: 10,
        question: "What happens to the kinetic energy of the particles in a sample of gas as the temperature of the sample increases?",
        answer: "B. It increases.",
        options: [
            "A. It decreases.",
            "B. It increases.",
            "C. It increases, then decreases.",
            "D. It does not change."
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