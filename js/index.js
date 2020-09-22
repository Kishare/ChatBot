const form = document.querySelector('form')
const input = document.querySelector('input')

form.addEventListener('submit', (e) => {
  e.preventDefault()

  if(input.value != ""){
    document.querySelector('.messageArea').insertAdjacentHTML('afterbegin', 
    '<div class="messageResponseBlock">'+
     '<div class="messageResponse">'+
      '<p class="messageContent">'+input.value+
      '</p>'+
     '</div>'+
    '</div>')
  } else{
    alert('Please write something.')
  }
  if (rgxVerify.date.test(input.value)){
    document.querySelector('.messageArea').insertAdjacentHTML('afterbegin', 
    '<div class="messageBlock">'+
     '<div class="user">'+
      '<img src="assets/img/chat2.jpeg" class="messageAvatar">'+
      '<span class="messageUsername">Cat Date Bot</span>'+
     '</div>'+
     '<div class="message">'+
      '<p class="messageContent">Il est '+date+
      '</p>'+
     '</div>'+
    '</div>');
  }
  input.value = ""
})