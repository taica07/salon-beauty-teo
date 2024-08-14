{
  /* <body>
<form>
  <h1>Send Data To WhatsApp</h1>
  <label for="">Name</label>
  <input type="text" class="name">

  <label for="">Email</label>
  <input type="text" class="email">

  <label for="">Country</label>
  <input type="text" class="country">

  <label for="">Message</label>
  <textarea class="message"></textarea>
  <button type="button" onclick="sendwhatsapp();">Send Via WhatsApp</button>
</form> */
}

function sendWhatsApp() {
  const phonenumber = '+40737150002';

  const name = document.querySelector('.visit-name').value;
  const email = document.querySelector('.visit-email').value;
  const country = document.querySelector('.visit-subject').value;
  const message = document.querySelector('.visit-message').value;

  const url =
    'https://wa.me/' +
    phonenumber +
    '?text=' +
    '*Name :* ' +
    name +
    '%0a' +
    '*Email :* ' +
    email +
    '%0a' +
    '*Country:* ' +
    country +
    '%0a' +
    '*Message :* ' +
    message +
    '%0a%0a' +
    'This is an example of send HTML form data to WhatsApp';

  window.open(url, '_blank').focus();
}

document
  .querySelector('#send-whats-app')
  .addEventListener('click', sendWhatsApp);
