// Change text content dynamically
document.getElementById('changeTextBtn').addEventListener('click', function() {
    document.getElementById('textContent').textContent = 'The text has been changed!';
  });
  
  // Modify CSS styles via JavaScript
  document.getElementById('changeStyleBtn').addEventListener('click', function() {
    const styleBox = document.getElementById('styleBox');
    styleBox.style.backgroundColor = '#FFB6C1'; // Light Pink
    styleBox.style.fontSize = '24px';
    styleBox.style.color = '#333';
    styleBox.style.border = '2px solid #4CAF50';
  });
  
  // Add or remove an element when the button is clicked
  document.getElementById('toggleElementBtn').addEventListener('click', function() {
    const extraElement = document.getElementById('extraElement');
    if (extraElement.classList.contains('hidden')) {
      extraElement.classList.remove('hidden');
      this.textContent = 'Remove Element'; // Change button text
    } else {
      extraElement.classList.add('hidden');
      this.textContent = 'Add Element'; // Reset button text
    }
  });