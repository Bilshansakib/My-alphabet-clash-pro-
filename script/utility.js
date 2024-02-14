function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');

}
function showElementById(id){
    const e = document.getElementById(id);
    e.classList.remove('hidden')
}