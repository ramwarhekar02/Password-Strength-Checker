document.addEventListener('DOMContentLoaded', function() {
    const passwordInput = document.getElementById('password');
    const strengthBar = document.getElementById('strength-level');
    const strengthText = document.getElementById('strength-text');
  
    passwordInput.addEventListener('input', function() {
      const password = passwordInput.value;
      const strength = getPasswordStrength(password);
      updateStrengthBar(strength);
    });
  
    function getPasswordStrength(password) {
      let strength = 0;
  
      if (password.length >= 6) strength++;
      if (/[A-Z]/.test(password)) strength++;
      if (/[a-z]/.test(password)) strength++;
      if (/[0-9]/.test(password)) strength++;
      if (/[@$!%*?&]/.test(password)) strength++;
  
      return strength;
    }
  
    function updateStrengthBar(strength) {
      strengthBar.className = '';
      strengthBar.style.width = '0';
      strengthText.textContent = 'Password Strength: ';
  
      if (strength === 1 || strength === 2) {
        strengthBar.style.width = '33%';
        strengthBar.classList.add('weak');
        strengthText.textContent = 'Password Strength: Weak';
      } else if (strength === 3 || strength === 4) {
        strengthBar.style.width = '66%';
        strengthBar.classList.add('medium');
        strengthText.textContent = 'Password Strength: Medium';
      } else if (strength === 5) {
        strengthBar.style.width = '100%';
        strengthBar.classList.add('strong');
        strengthText.textContent = 'Password Strength: Strong';
      }
    }
  });
  