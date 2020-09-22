const form = document.querySelector('form')
const input = document.querySelector('input')

form.addEventListener('submit', (e) => {
  e.preventDefault()
  document.querySelector('.messageArea').insertAdjacentHTML('afterbegin', 
  '<div class="messageResponseBlock">'+
   '<div class="messageResponse">'+
    '<p class="messageContent">'+input.value+
    '</p>'+
    '<span class="messageDate">15/09/2020</span>'+
   '</div>'+
  '</div>');
  input.value = ""
})