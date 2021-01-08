function printImg(){
    // var imgNum = 0;
    let imgNum = prompt('What is your dog training skill level?');
    for(let i = imgNum; i < 10; i++){
        document.write('<li> <img class= "leash" src="https://icon-library.net/images/dog-leash-icon/dog-leash-icon-2.jpg"></li>')
    }
}
printImg()