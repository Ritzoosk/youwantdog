
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
    document.write(animalPref);
    
    function bottomMsg(){
        document.write("func ran");
        document.write(animalPref);
        if (animalPref == 'dog'){
            document.write('<h1>' + 'These dogs are the bestest boys!' + '</h1>');
        } else if (animalPref != 'dog'){
            document.write('<h3>' + 'I mean... ' + animalPref + ' are cool and all but... look at those dogs!', '</h3>')
        }
        }
        bottomMsg(animalPref);

// document.write(animalPref)