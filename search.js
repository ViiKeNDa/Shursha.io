const directors = Array.from(document.querySelectorAll(".container"));
const directorsNames = directors.map(director=>director.querySelector('.post-title').innerHTML.toLowerCase());


const input = document.querySelector('.search');
input.addEventListener('input', ()=>{
    let indexes = []
    let openIndexes = []
    if(input.value==""){
        openAll();
    }
    for(let i = 0;i<directorsNames.length;i++){
        let name = directorsNames[i];
        
        if(!name.includes(input.value.toLowerCase())){
            indexes.push(i);
        }else{
            openIndexes.push(i);
        }
        indexes.forEach(index=>directors[index].classList.add('hidden'));
        openIndexes.forEach(index=>directors[index].classList.remove('hidden'));
    }
});
function openAll(){
    directors.forEach(director=>director.classList.remove('hidden'));
}