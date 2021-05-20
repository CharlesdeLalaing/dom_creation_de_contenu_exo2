// // > https://developer.mozilla.org/fr/docs/Web/API/Node/removeChild
// // > Avec la methode removeChild()
// // ## 1. 
// // - Utilise le second bouton pour supprimer le premier enfant

// let boutonFirst = document.getElementsByTagName('input')[0];

// let ul = document.getElementsByTagName('ul')[0];

// boutonFirst.addEventListener('click', () => {
//     ul.removeChild(ul.firstChild);
// });

// // ## 2. 
// // - Utilise le second bouton pour supprimer le dernier enfant 

// let boutonSecond = document.getElementsByTagName('input')[1];

// boutonSecond.addEventListener('click', () => {
//     ul.removeChild(ul.lastChild);
// });

// // ## 3 .
// // - Utilise le dernier bouton pour supprimer un enfant au hasard

// // let choix = document.querySelector('ul').children.length;

// let boutonRandom = document.getElementsByTagName('input')[2];

// boutonRandom.addEventListener('click' , () => {
//     let randomNumber = Math.floor(Math.random()*(ul.children.length-1));
//     ul.removeChild(ul.children[randomNumber]);
// });


// // > https://developer.mozilla.org/fr/docs/Web/API/Node/replaceChild
// // > Avec la methode replaceChild()


// // ## 4 . Dans la partie Remplacement de ton HTML
// // - Créer un élément li dans ton fichier JS
// // - Remplace le deuxième li par celui ci quand on clique sur le button exercice 4


// let newLi = document.createElement('li');
// newLi.innerHTML = "c'est moi le nouveau";

// let boutonReplace = document.getElementsByTagName('input')[3];

// let ul2 = document.getElementsByTagName('ul')[1]

// boutonReplace.addEventListener('click', () => {
//     ul2.replaceChild(newLi, ul2.children[1])
// });

// // ## 5. 
// // - Créer un programme qui permet avec l'input de créer un li et de remplacer le "li" 3 par celui ci en appuyant sur le bouton exercice 5

// let boutonExo5 = document.getElementsByTagName('input')[5];

// let liTrois = document.getElementsByTagName('ul')[1].children[2];

// let inputChoix = document.getElementsByTagName('input')[4];

// boutonExo5.addEventListener('click', () => {
//     liTrois.innerHTML = inputChoix.value
// });

// //creation nouvel element

// let newDiv = document.createElement('div');
// let newP = document.createElement('p');
// newP.innerHTML = 'Je suis un chocolat qui risque de se transformer en citron si le temps le permet-il?'
// let newInput = document.createElement('input')
// newInput.setAttribute('value', 'clique moi dessus')
// newInput.setAttribute('type', 'button');

// let body = document.getElementsByTagName('body')[0];

// body.appendChild(newDiv);
// newDiv.appendChild(newP);
// newDiv.appendChild(newInput);

// let colorText = 'color : red;';
// let colorBg = 'background-color : green;';
// let textDeco = 'text-decoration : underline;';

// newInput.addEventListener('click' , () => {
//     newP.style = colorText

// })


//correction - AVEC LE E.TARGET !!! très fort.

//exo1
let body = document.body;
let ul_1 = document.getElementsByTagName('ul')[0];
let ul_2 = document.getElementsByTagName('ul')[1];
let newLi_1 = document.createElement('li');
newLi_1.innerText = 'Je suis la maggle';

function randomNum(l) {
    return Math.floor(Math.random()*l)
};

body.addEventListener('click', (e) => {
    switch (e.target.value) {
        case "Delete First Child":
            ul_1.removeChild(ul_1.firstElementChild);
        break;

        case "Delete Last Child":
            ul_1.removeChild(ul_1.lastElementChild);
        break;
        
        case "Delete Random Child":
            ul_1.removeChild(ul_1.children[randomNum(ul_1.children.length)]);
        break;

        case "exercice 4":
            ul_2.replaceChild(newLi_1, ul_2.children[1]);
        break;

        case "exercice 5":
            let newLi_2 = document.createElement('li');
            let youtText = document.getElementById('replaceValue').value;
            newLi_2.innerText = youtText;
            ul_2.replaceChild(newLi_2, ul_2.children[2]);
        break;

        default:
            break;
    }
})