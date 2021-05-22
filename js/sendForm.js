// Connection with free fake API for testing and prototyping
const server = 'https://jsonplaceholder.typicode.com/posts';

// It will be XMLHttpRequest technology

const sendData = (data, callBack, falseyCallBack) => {
  // Create new request object
  const request = new XMLHttpRequest();
  // Used method open() to open access to requests
  // There are default headers from server here
  request.open('POST', server);

  // Сhecking for errors in request processing.
  // readystatechange must successfully complete all
  // 4 steps of the request, otherwise it is interrupted.
  request.addEventListener('readystatechange', () => {
    if (request.readyState !== 4) return;
    // Checking server status
    // If OK, parsed response text.
    if (request.status === 200 || request.status === 201) {
      const response = JSON.parse(request.responseText);
      callBack(response.id);
    } else {
      falseyCallBack(request.status);
      throw new Error(request.status);
    }
  });
  // Method send() takes request data
  request.send(data);
};

const formHandler = (form) => {
  const smallElem = document.createElement('small');
  form.append(smallElem);

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = {};

    // Is something data in input-fields?
    let flag = true;

    const buttonSubmit = form.querySelector('.button[type="submit"]');
    // console.log(form.elements);
    // console.log(form.querySelector('.button[type="submit"]'))
    // Verification that value is true and it's not string of spaces
    for (const elem of form.elements) {
      const { name, value } = elem;
      if (name) {
        if (value.trim()) {
          elem.style.border = '';
          // send a request to the server without spaces (used trim() method)
          data[name] = value.trim();
        } else {
          flag = false;
          elem.style.border = '1px solid red';
          smallElem.style.color = 'red';
          // clear the field from spaces
          elem.value = '';
        }
      }
    }

    if (!flag) {
      return smallElem.textContent = 'Input data in all fields on the form';
    }

    sendData(JSON.stringify(data),
      (id) => {
        smallElem.textContent = `
        Your request №${id} has been sent. 
        We will contact you shortly
        `;
        smallElem.style.color = 'green';
        form.append(smallElem);
        // disabled button after you sending the form
        buttonSubmit.disabled = true;

        // After 5 seconds, the button will become available again, 
        // and the smallElem line will be cleared.
        setTimeout(() => {
          smallElem.textContent = '';
          buttonSubmit.disabled = false;
        }, 5000);
      },
      (err) => {
        smallElem.textContent = `
        Server error ${err}. 
        Please try to submit your request later.
        `;
        smallElem.style.color = 'red';
        form.append(smallElem);
      }
    );
    form.reset();
  });
};

export default function sendForm() {
  const formElems = document.querySelectorAll('.form');

  formElems.forEach(formHandler);
}
