const membersArray= [
    {
        fullName : "Wayne Barnett",
        Role : "Founder & CEO",
        picture : "wayne-barnett-founder-ceo.jpg"
    },
    {
        fullName : "Angela Caroll",
        Role : "Chief Editor",
        picture : "angela-caroll-chief-editor.jpg"
    },
    {
        fullName : "Walter Gordon",
        Role : "Office Manager",
        picture : "walter-gordon-office-manager.jpg"
    },
    {
        fullName : "Angela Lopez",
        Role : "Social Media Manager",
        picture : "angela-lopez-social-media-manager.jpg"
    },
    {
        fullName : "Scott Estrada",
        Role : "Developer",
        picture : "scott-estrada-developer.jpg"
    },
    {
        fullName : "Barbara Ramos",
        Role : "Graphic Designer",
        picture : "barbara-ramos-graphic-designer.jpg"
    },
]
// così stampo l'intero array compresi gli oggetti all'interno
console.log(membersArray);

// così stampo ogni singolo elemento dell'array, quindi un oggetto alla volta
for (let i=0; i<membersArray.length; i++){
    console.log(membersArray[i]);
}

// stampo nome, ruolo, e immagine in 3 colonne diverse nell'html per renderlo più ordinato possibile
// per farlo creo 3 nodi di collegamento diversi per ogni colonna

const nameContainerEl = document.querySelector(".name-container");
const roleContainerEl = document.querySelector(".role-container");
const imgContainerEl = document.querySelector(".img-container");



for (let i=0; i<membersArray.length; i++){
    nameContainerEl.innerHTML += `<div class="text-center py-5">${membersArray[i].fullName}</div>`;
}

for (let i=0; i<membersArray.length; i++){
    roleContainerEl.innerHTML += `<div class="text-center py-5">${membersArray[i].Role}</div>`;
}

for (let i=0; i<membersArray.length; i++){
    imgContainerEl.innerHTML += `<img class="w-25 d-block m-auto my-4" src="img/${membersArray[i].picture}">`;
}