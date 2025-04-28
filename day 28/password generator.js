document.addEventListener('DOMContentLoaded', () => {
    const passwordEl = document.getElementById('password');
    const generateBtn = document.getElementById('generate');
  
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
  
    function generatePassword(length = 12) {
      let password = '';
      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
      }
      return password;
    }
  
    generateBtn.addEventListener('click', () => {
      const newPassword = generatePassword();
      passwordEl.textContent = newPassword;
    });
  });
  