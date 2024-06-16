function validateForm (e) {
  'use strict';

  if (typeof e == 'undefined') e = window.event;
  
  let firstName = U.$('firstName');
  let lastName = U.$('lastName');
  let email = U.$('email');
  let message = U.$('message');
  
  let error = false;

  if (/^[A-Z \-']{2,20}$/i.test(firstName.value)) { 
    removeErrorMessage('firstName');
  } else {
    addErrorMessage('firstName', 'Please enter your first name');
    error = true;
  }

  if (/^[A-Z \-']{2,20}$/i.test(lastName.value)) {
    removeErrorMessage('lastName');
  } else {
    addErrorMessage('lastName', 'Please enter your last name'); 
    error = true;
  }

  if (/^[\w.-]+@[\w.-]+\.[A-Za-z]{2,6}$/.test(email.value)) { 
    removeErrorMessage('email');
  } else {
    addErrorMessage('email', 'Please enter valid email address');
    error = true;
  }

  if (message.value.length > 10 ) {
    removeErrorMessage('message');
  } else {
    addErrorMessage('message', 'Please enter message');
    error = true; 
  }
  
  if (error) {
    if (e.preventDefault) {
        e.preventDefault();
    } else {
        e.returnValue = false;
    }
    return false;
  }
} 

window.onload = function() {
  'use strict';

  U.addEvent(U.$('theForm'), 'submit', validateForm);
  U.$('submit').disabled = false;
  
  U.enableTooltips('message');
  U.enableTooltips('firstName');
  U.enableTooltips('lastName');
  U.enableTooltips('email');
}