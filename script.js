const validCredentials = {
    username: "Distrilorica",
    password: "7378950",
};

document.getElementById('login-btn').addEventListener('click', function() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');
    
    if (username === validCredentials.username && password === validCredentials.password) {
        document.getElementById('login-container').classList.add('hidden');
        document.getElementById('table-container').classList.remove('hidden');
        errorMessage.classList.add('hidden');
    } else {
        errorMessage.textContent = "Credenciales incorrectas. Intente de nuevo.";
        errorMessage.classList.remove('hidden');
    }
});
document.getElementById('logout-button').onclick = async function() {
    await   logout();
    location.reload()
};





document.getElementById('search').addEventListener('keyup', function() {
    const filter = this.value.toLowerCase();
    const rows = document.querySelectorAll('#data-table tbody tr');

    rows.forEach(row => {
        row.style.display = row.textContent.toLowerCase().includes(filter) ? '' : 'none';
    });
});



function logout() {
    document.getElementById('login-container').style.display = 'block';
    document.getElementById('table-container').style.display = 'none';
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
    clearTimeout(timeoutId);
}



 // Mostrar el botón cuando el usuario se desplaza hacia abajo
 window.onscroll = function() {
    const btn = document.getElementById("btnVolverArriba");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        btn.style.display = "block"; // Mostrar botón
    } else {
        btn.style.display = "none"; // Ocultar botón
    }
};

// Función para volver arriba
function volverArriba() {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Desplazamiento suave
    });
}