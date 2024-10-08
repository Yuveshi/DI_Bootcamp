document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('myForm');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault(); 
  
 
      const formData = new FormData(form);
      const name = formData.get('name');
      const lastname = formData.get('lastname');
  
 
      const queryString = `?name=${encodeURIComponent(name)}&lastname=${encodeURIComponent(lastname)}`;
  
      window.location.href = `display.html${queryString}`;
    });
  });
  