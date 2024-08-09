const scriptURL = 'https://script.google.com/macros/s/AKfycbwrslN5wLUBX_bXtzTHADS_D1DAN5XMJLHnsdHeO6HVIPvZwo944syI3HYFJDajQubX/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        
        let msg= document.getElementById("msg")
        msg.innerHTML= 'Thank you for Subscribing!';
        setTimeout(() => {
           msg.innerHTML= ''; 
        }, 3000);
        form.reset();
    })
    .catch(error => console.error('Error!', error.message))
})