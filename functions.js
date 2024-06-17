function createElementWithClass(tag, classToAdd) {
    //creo il nuovo elemento
    const newElement = document.createElement(tag);
    //aggiungo la classe all'elemento
    newElement.classList.add(classToAdd);

    return newElement
}
function appendElement(appendTo, appendWhat) {
    appendTo.append(appendWhat)
}
function rangeNumber(min, max) {
    let number = Math.floor(Math.random() * (max - min + 1)) + min;
    return number
}
function genSequenzaNumRandom(min, max, length) {
    const arrToGen = [];
    while (arrToGen.length < length) {
        let newRandomNum = rangeNumber(min, max);
        
        
        if(!arrToGen.includes(newRandomNum)) {
            arrToGen.push(newRandomNum)
        }
    }

    return arrToGen
}
function oddEven(number) {
    let even = (number % 2 === 0)
    return even
}
function showHide(classToShow, classToHide) {
    let show = document.querySelector(classToShow)
    let hide = document.querySelector(classToHide)
    show.style.display = "flex"
    hide.style.display = "none"
}