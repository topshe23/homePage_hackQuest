  // Scroll animation using IntersectionObserver
    const cards = document.querySelectorAll('.card');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    cards.forEach(card => {
      observer.observe(card);
    });

    const bmiModal = document.getElementById("bmiModal");
const resultModal = document.getElementById("resultModal");
const bmiBtn = document.querySelector("#bmiCard button");
const closeBmi = document.querySelector("#bmiModal .close");
const closeResult = document.querySelector("#resultModal .closeResult");
const calculateBtn = document.getElementById("calculateBmi");
const bmiResult = document.getElementById("bmiResult");

// Open BMI modal
bmiBtn.addEventListener("click", () => {
  bmiModal.style.display = "flex";
});

// Close BMI modal
closeBmi.addEventListener("click", () => {
  bmiModal.style.display = "none";
});

// Close result modal
closeResult.addEventListener("click", () => {
  resultModal.style.display = "none";
});

// Calculate BMI
calculateBtn.addEventListener("click", () => {
  const height = parseFloat(document.getElementById("height").value) / 100; // cm → m
  const weight = parseFloat(document.getElementById("weight").value);

  if (!height || !weight) {
    alert("Please enter valid height and weight");
    return;
  }

  const bmi = (weight / (height * height)).toFixed(2);

  // Close BMI modal
  bmiModal.style.display = "none";

  // Show result modal above it
  bmiResult.textContent = `Your BMI is: ${bmi}`;
  resultModal.style.display = "flex";
});

// Close modals on outside click
window.addEventListener("click", (e) => {
  if (e.target === bmiModal) bmiModal.style.display = "none";
  if (e.target === resultModal) resultModal.style.display = "none";
});
