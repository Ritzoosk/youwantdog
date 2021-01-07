
function checkAnimal(theirAnimal)
{
    if (theirAnimal == 'dog')
    {
        document.write('<h1>' + 'Dog Adoption Center' + '</h1>');
    }   
    else if (theirAnimal != 'dog')
    {
    document.write('<h1>' + 'We are fresh out of ' + theirAnimal + ' Here are some DOGS!', '</h1>')
    }
    return theirAnimal
} 

