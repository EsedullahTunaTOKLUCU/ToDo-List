let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputText = document.getElementById('inputText');
let clearToDo = document.getElementById('clearToDo');

addToDoButton.addEventListener('click',function () {
  let paragraph = document.createElement('p');
  let sil = document.createElement('a');
  sil.classList.add('sil-styling');
  paragraph.classList.add('paragraph-styling');
  toDoContainer.appendChild(paragraph);
  toDoContainer.appendChild(sil);
  paragraph.innerHTML = inputText.value;
  sil.innerHTML = "Delete";
  inputText.value = "";

  paragraph.addEventListener('click',function(){

    paragraph.style.textDecoration = 'line-through';

  });
  paragraph.addEventListener('dblclick', function(){
    paragraph.style.textDecoration = 'none';
});

sil.addEventListener('click', function(){
    toDoContainer.removeChild(paragraph);
    toDoContainer.removeChild(sil);
});
clearToDo.addEventListener('click', function(){
    paragraph.remove();
    sil.remove();
})
});
