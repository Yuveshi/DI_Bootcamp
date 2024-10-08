document.addEventListener('DOMContentLoaded', function() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
  
    const name = urlParams.get('name');
    const lastname = urlParams.get('lastname');
  
    const submittedDataElement = document.getElementById('submittedData');
  
    const p1 = document.createElement('p');
    p1.textContent = `Name: ${name}`;
    submittedDataElement.appendChild(p1);
  
    const p2 = document.createElement('p');
    p2.textContent = `Last Name: ${lastname}`;
    submittedDataElement.appendChild(p2);
  });
  