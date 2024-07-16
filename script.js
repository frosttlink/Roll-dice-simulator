document.addEventListener("DOMContentLoaded", function() {
    const diceButtons = document.querySelectorAll(".dice-container button");
    const resultDiv = document.getElementById("result");

    function rollDice(sides) {
        return Math.floor(Math.random() * sides) + 1;
    }

    function rollMultipleDice(numDice, sides) {
        let results = [];
        for (let i = 0; i < numDice; i++) {
            results.push(rollDice(sides));
        }
        return results;
    }

    function animateResult(result, addValue) {
        const total = result.reduce((a, b) => a + b, 0) + addValue;
        resultDiv.style.opacity = 1;

        if (result.length > 10) { 
            if (addValue !== 0) {
                resultDiv.textContent = `Total: ${total}`;
            } else {
                resultDiv.textContent = `Result: ${result.reduce((a, b) => a + b, 0)}`;
            }
        } else {
            if (addValue !== 0) {
                resultDiv.textContent = `Result: ${result.join(', ')} (Total: ${total})`;
            } else {
                resultDiv.textContent = `Result: ${result.join(', ')}`;
            }
        }

        setTimeout(function() {
            resultDiv.style.opacity = 1;
        }, 200);
    }

    diceButtons.forEach(button => {
        button.addEventListener("click", function() {
            const inputContainers = document.querySelectorAll(".input-container");
            const inputContainer = this.nextElementSibling;

            if (inputContainer.style.display === 'block') {
                inputContainer.style.display = 'none';
                return;
            }

            inputContainers.forEach(container => {
                container.style.display = 'none';
            });

            inputContainer.style.display = 'block';

            const rollBtn = inputContainer.querySelector(".roll-btn");
            const quantityInput = inputContainer.querySelector("input[type='number']");
            const addInput = inputContainer.querySelectorAll("input[type='number']")[1];

            rollBtn.addEventListener("click", () => {
                const numDice = parseInt(quantityInput.value) || 1;  
                const addValue = parseInt(addInput.value) || 0;  
                const sides = parseInt(this.id.substring(1));
                if (numDice > 0 && sides > 0) {
                    const result = rollMultipleDice(numDice, sides);
                    animateResult(result, addValue);
                } else {
                    resultDiv.textContent = "Erro !";
                }
                inputContainer.style.display = 'none';
            });
        });
    });
});
