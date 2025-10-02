
//KYSYMYKSET JA VASTAUKSET OVAT TÄSSÄ
const quizData = [ 
  { question: "1. Mikä on Lapin suurin kaupunki?", options: ["Rovaniemi", "Kemi", "Tornio", "Sodankylä"], answer: "Rovaniemi" }, 
  { question: "2. Mikä luonnonilmiö on erityisen tunnettu Lapissa talvella?", options: ["Revontulet", "Helleaalto", "Sateenkaari", "Hiekkamyrsky"], answer: "Revontulet" }, 
  { question: "3. Mikä on yksi Lapin tärkeimmistä elinkeinoista?", options: ["Kalastus", "Poronhoito", "Maanviljely", "Teknologiateollisuus"], answer: "Poronhoito" }, 
  
  { question: "4. Mikä eläin on keskeinen osa saamelaiskulttuuria?", options: ["Hirvi", "Karhu", "Poro", "Susi"], answer: "Poro" }, 
  { question: "5. Mitä poroista EI yleensä saada?", options: ["Lihaa", "Maitoa", "Nahkaa", "Villaa" ], answer: "Villaa" }, 
  { question: "6. Kuinka monta poroa Suomessa on suunnilleen?", options: ["10 000", "50 000", "200 000", "500 000"], answer: "200 000" }, 
  
  { question: "7. Missä sijaitsee Suomen korkein tunturi, Halti?", options: ["Inarissa", "Enontekiössä", "Kittilässä", "Utsjoella"], answer: "Enontekiössä" }, 
  { question: "8. Mikä seuraavista EI ole tyypillinen tunturikasvi?", options: ["Vaivaiskoivu", "Kanerva", "Lehmus", "Variksenmarja"], answer: "Lehmus" }, 
  { question: "9. Mikä erottaa tunturin vuoresta?", options: ["Tunturi on jyrkempi", "Tunturi on matalampi ja pyöreämpi", "Tunturi on aina lumen peitossa", "Tunturi sijaitsee vain etelässä"], answer: "Tunturi on matalampi ja pyöreämpi" } 
]; 
 
let currentQuestion = 0; 
let score = 0; 
 
//Napataan elementit JS:n

const questionEl = document.getElementById("question"); 
const optionsEl = document.getElementById("options"); 
const nextBtn = document.getElementById("next-btn"); 
const resultEl = document.getElementById("result"); 
const scoreEl = document.getElementById("score"); 
 
//Funktiot, lataa kysymys

function loadQuestion() { 
  const currentQuiz = quizData[currentQuestion]; 
  questionEl.textContent = currentQuiz.question; 
  optionsEl.innerHTML = ""; 
  currentQuiz.options.forEach(option => { 
    const button = document.createElement("button"); 
    button.textContent = option; 
    button.classList.add("btn"); 
    button.onclick = () => checkAnswer(option); 
    optionsEl.appendChild(button); 
  }); 
} 

//Funktio, tarkistaa vastaukset ja laskee 'scoren'

function checkAnswer(selectedOption) { 
  if (selectedOption === quizData[currentQuestion].answer) { 
    score++; 
  } 
  
  currentQuestion++; 
  if (currentQuestion < quizData.length) { 
    loadQuestion(); 
  } else { 
    showResult(); 
  } 
} 
 
//Näytä tulokset

function showResult() { 
  document.getElementById("quiz-container").style.display = "none"; 
  resultEl.style.display = "block"; 
  scoreEl.textContent = `${score} / ${quizData.length}`; 
} 
 
//Event listener seuraava nappulaan

nextBtn.addEventListener("click", () => { 
  if (currentQuestion < quizData.length) { 
    loadQuestion(); 
  } 
}); 
 
// Initialize the quiz 
loadQuestion(); 
