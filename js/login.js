//Inicio de sesión con verificación de administrador
function loginUser(event) {
    event.preventDefault();
  
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
  
    const users = JSON.parse(localStorage.getItem('users')) || [];
  
    // Verificación del administrador
    if (username === 'admin' && password === '1234') {
      alert('Bienvenido, administrador');
      console.log("Administrador logueado");
      localStorage.setItem('loggedInUser', 'admin'); // Guardar en localStorage
      window.location.href = '../HTML/admin.html'; // Redirigir a la página de administración
      return;
    }
  
    // Verificación de un usuario normal
    const user = users.find(u => u.username === username && u.password === password);
  
    if (user) {
      alert(`Bienvenido, ${user.username}`);
      localStorage.setItem('loggedInUser', username); // Guardar el nombre de usuario logueado
      window.location.href = '../HTML/index.html'; // Redirigir a la página principal
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  }
  // Agregar los event listeners en los formularios
  document.addEventListener('DOMContentLoaded', function() {
      const registerForm = document.getElementById('register-form');
      const loginForm = document.getElementById('login-form');
    
      if (loginForm) {
        loginForm.addEventListener('submit', loginUser);
      }
    });
    
    document.getElementById('hamburger-btn').addEventListener('click', function() {
      const navbar = document.getElementById('navbar');
      navbar.classList.toggle('active'); // Activa o desactiva la clase "active" para m
    });
  
    document.addEventListener('DOMContentLoaded', function () {
      const themeToggleBtn = document.getElementById('theme-toggle');
      const currentTheme = localStorage.getItem('theme') || 'light';
    
      // Aplicar el tema guardado en localStorage
      if (currentTheme === 'dark') {
        document.body.classList.add('dark-mode');
        themeToggleBtn.textContent = 'Modo Claro';
      } else {
        themeToggleBtn.textContent = 'Modo Oscuro';
      }
    
      // Evento de clic en el botón para alternar el tema
      themeToggleBtn.addEventListener('click', function () {
        document.body.classList.toggle('dark-mode');
    
        // Verificar el estado actual y actualizar el botón
        if (document.body.classList.contains('dark-mode')) {
          themeToggleBtn.textContent = 'Modo Claro';
          localStorage.setItem('theme', 'dark');
        } else {
          themeToggleBtn.textContent = 'Modo Oscuro';
          localStorage.setItem('theme', 'light');
        }
      });
    });
    
    // Función para cambiar entre modos
    function toggleMode() {
      const currentMode = localStorage.getItem('mode') || 'light'; // Por defecto es claro
      let newMode;
    
      if (currentMode === 'light') {
        newMode = 'dark';
      } else if (currentMode === 'dark') {
        newMode = 'colorblind';
      } else {
        newMode = 'light';
      }
    
      // Actualizar clase en el body
      document.body.classList.remove('light-mode', 'dark-mode', 'colorblind-mode');
      if (newMode === 'dark') {
        document.body.classList.add('dark-mode');
      } else if (newMode === 'colorblind') {
        document.body.classList.add('colorblind-mode');
      }
    
      // Guardar la preferencia del usuario en localStorage
      localStorage.setItem('mode', newMode);
    }
    
    // Cargar el modo guardado cuando se cargue la página
    document.addEventListener('DOMContentLoaded', function() {
      const savedMode = localStorage.getItem('mode') || 'light';
      document.body.classList.add(`${savedMode}-mode`);
    
      // Evento para el botón de cambiar modo
      const toggleButton = document.getElementById('toggle-mode-btn');
      toggleButton.addEventListener('click', toggleMode);
    });
    