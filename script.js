//ETAPE 1 - Creations des variables

const formulaire = document.getElementById("formulaire")
const inscription = document.querySelector(".inscription")
const resultat = document.getElementById("resultat")
const message = document.getElementById("message")    

formulaire.addEventListener("submit", (event) => {
  event.preventDefault()
  console.log("clic !")



let texte = ""
let scr = ""

  // ETAPE 4 — Récupérer les valeurs saisies

  const prenom   = document.getElementById("prenom").value    
  const creature = document.getElementById("creature").value  
  const image = document.querySelector(".zoneinvoc")


  // ETAPE 4 — Construire et afficher le message
 if (creature === "Lucario") {
    texte = `${prenom}, tu as appelé Lucario ! Grâce à ses auras il peut détecter les émotions de ses adversaires.`
    src   = "Machine-a-invocation/images/448.webp"

  } else if (creature === "Noctalie") {
    texte = `${prenom}, tu fais appel à Noctalie ! Quand il s'expose aux ondes lunaires, ses anneaux brillent légèrement.`
    src   = "Machine-a-invocation/images/197.webp"

  } else if (creature === "Ho-Oh") {
    texte = `${prenom}, tu fais appel à Ho-Oh ! Ses plumes brillent de sept couleurs selon son orientation au soleil.`
    src   = "Machine-a-invocation/images/250.webp"
  
  } else if (creature === "Ronflex") {
    texte = `${prenom}, tu as appelé Ronflex... et il s'est endormi. Sors la Pokéflûte !`
    src   = "Machine-a-invocation/images/143.webp"

  } else {
    // Si aucun Pokémon n'est sélectionné
    alert("Choisis un Pokémon avant d'invoquer !")
    return
  }

   message.textContent = texte
  image.src           = src

  // Cacher le formulaire
  document.getElementById("formulaire").classList.add("cache")

  // Afficher la section résultat
  document.getElementById("resultat").classList.remove("cache")


})

// ÉTAPE 5 (BONUS) — Bouton recommencer

const btnRecommencer = document.getElementById("recommencer")

btnRecommencer.addEventListener("click", () => {
  formulaire.classList.remove("cache")
  resultat.classList.add("cache")

  image.src = ""
  message.textContent = ""

})

