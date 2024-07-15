document.addEventListener("DOMContentLoaded", function() {
  const d4Btn = document.getElementById("d4");
  const d6Btn = document.getElementById("d6");
  const d8Btn = document.getElementById("d8");
  const d10Btn = document.getElementById("d10");
  const d12Btn = document.getElementById("d12");
  const d20Btn = document.getElementById("d20");
  const customBtn = document.getElementById("custom");
  const customSidesInput = document.getElementById("customSides");
  const resultDiv = document.getElementById("result");

  function rollDice(sides) {
      return Math.floor(Math.random() * sides) + 1;
  }

  function animateResult(result) {
      resultDiv.style.opacity = 1;
      resultDiv.textContent = result;
      setTimeout(function() {
          resultDiv.style.opacity = 1;
      }, 200);
  }

  d4Btn.addEventListener("click", function() {
      const result = rollDice(4);
      animateResult(result);
  });

  d6Btn.addEventListener("click", function() {
      const result = rollDice(6);
      animateResult(result);
  });

  d8Btn.addEventListener("click", function() {
      const result = rollDice(8);
      animateResult(result);
  });

  d10Btn.addEventListener("click", function() {
      const result = rollDice(10);
      animateResult(result);
  });

  d12Btn.addEventListener("click", function() {
      const result = rollDice(12);
      animateResult(result);
  });

  d20Btn.addEventListener("click", function() {
      const result = rollDice(20);
      animateResult(result);
  });

  customBtn.addEventListener("click", function() {
      const customSides = parseInt(customSidesInput.value);
      if (!isNaN(customSides) && customSides > 0) {
          const result = rollDice(customSides);
          animateResult(result);
      } else {
          resultDiv.textContent = "Invalid input!";
      }
  });
});

