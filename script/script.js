
    let red = document.getElementById('r');
    let green = document.getElementById('g');
    let blue = document.getElementById('b');
    let convert = document.getElementById('convert');
    let result = document.getElementById('result');
    
    convert.addEventListener('click', () => {
      const r = parseInt(red.value, 10);
      const g = parseInt(green.value, 10);
      const b = parseInt(blue.value, 10);
    
      if (isNaN(r) || isNaN(g) || isNaN(b)) {
        result.innerHTML += 'Please enter valid numbers';
        return;
      }
    
      const hex = rgbToHex(r, g, b);
      result.innerHTML += hex;
    });
    
    function rgbToHex(r, g, b) {
      const hex = '#' +
        componentToHex(r) +
        componentToHex(g) +
        componentToHex(b);
      return hex;
    }
    
    function componentToHex(c) {
      const hex = c.toString(16);
      return hex.length === 1 ? '0' + hex : hex;
    }