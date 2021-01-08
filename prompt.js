
function askAnimalPref(){
    let animalPref = prompt('What is your favorite animal?');
   
    if (animalPref == 'dog')
    {
        document.write('<h1>' + 'Dog Adoption Center' + '</h1>');
    }   
    else 
    {
    document.write('<h1>' + 'We are fresh out of ' + animalPref + ' Here are some DOGS!', '</h1>');
    }
   return animalPref
}
askAnimalPref()
    
    
function bottomMsg(){
    let dogQ = confirm('do you like dogs? (Ok-yes  Cancel-no)S');
    if (dogQ == true){
        document.write('<h1> You like dogs! Take one!</h1>')
    } else {
        document.write('<h3> You should have a dog even if you dont like them! </h3>')
    }
}
        

function printImg(){

    let imgNum = prompt('What is your dog training skill level? (1 to 5)');
    while (imgNum < 1 || imgNum > 5){
        imgNum = prompt('Please try a number between 1 and 5');
    }
    document.write('Your Skill Level:')
    for(let i = 1; i <= imgNum; i++){
        document.write('<art>' + i + '<img class= "leash" src="https://icon-library.net/images/dog-leash-icon/dog-leash-icon-2.jpg"></art>')
    }
}

   