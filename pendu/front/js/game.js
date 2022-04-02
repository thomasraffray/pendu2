const word = "TAUMEJeTaime".toLocaleUpperCase()
const wordLetter = word.split("")           // divise le mot en tableau de lettres séparées

const emptyLetter = new Array(word.length)
console.log(emptyLetter)

let turn = 10;
const lettersAlreadyUsed = [];

function guestWordRender(emptyLetter){
    const display = []

    for (let index = 0; index < emptyLetter.length; index++) {
        if(emptyLetter[index]){
            display.push(emptyLetter[index])
        }
        else{
            display.push("_")
        }
        
    }
        
    document.getElementById('emptyLetter').innerHTML = display.join()
}


function render(){          //affichage

    document.getElementById('turn').innerHTML = "Tour : " + turn
    document.getElementById('lettersAlreadyUsed').innerHTML = "Lettres jouées : " + lettersAlreadyUsed.join(',')
    guestWordRender(emptyLetter)
    


}




function getAllIndex(myWord, mySelectedLetter){             //on pacours chacun des cases du tableau pour voir si il y a la lettre dedans
    const indexes = []
    for (let index = 0; index < myWord.length; index++) {
        const element = myWord[index];
        if(element === mySelectedLetter){
            indexes.push(index)
        }
    }
    return (indexes)
}



function selectedLetter(username){
    
    const letter = document.getElementById('selectedLetter').value
    //alert(letter)

    //letter = letter.trim()       //supprime les espaces
    
    
    const mySelectedLetter = letter[0].toUpperCase()      //selectionne la lettre de rang 0 et la met en majuscule
    //alert(mySelectedLetter)

    

    lettersAlreadyUsed.push(mySelectedLetter)               //ajouter une lettre à une chaine de caractère


    const temp = getAllIndex(word, mySelectedLetter)

    if(temp.length ===0){
        turn--
    }else{
        console.log(temp)
        for (let index = 0; index < temp.length; index++) {
            
            emptyLetter[temp[index]] = wordLetter[temp[index]]
            wordLetter[temp[index]] = ""
        }
    }

    render()
    


    if(turn === 0){         //affichage des messages de victoire et de defaite
        alert("OH NON, C'EST PERDU")
    }

    if( wordLetter.every( (el)=> el === "" )){
        alert('BRAVO '  + 'TU AS GAGNE')
    }

    
}

onload = function(){
    render()
}
