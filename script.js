const klimaContainer = document.getElementById('klima-container');

// Örnek klima verileri
let klimalar = [
    { name: 'Klima 1', ip: 'http://192.168.1.1' },
    { name: 'Klima 2', ip: 'http://192.168.1.2' }
];

// Klimaları yükleme
function loadKlimalar() {
    if (klimaContainer) {
        klimaContainer.innerHTML = '';
        klimalar.forEach(klima => {
            const klimaDiv = document.createElement('div');
            klimaDiv.className = 'klima';
            klimaDiv.innerHTML = `
                <img src="klima.png" alt="${klima.name}" onclick="goToIP('${klima.ip}')">
                <p>${klima.name}</p>
            `;
            klimaContainer.appendChild(klimaDiv);
        });
    }
}

function goToIP(ip) {
    window.location.href = ip;
}

// Yeni klima ekleme
const addKlimaForm = document.getElementById('add-klima-form');
if (addKlimaForm) {
    addKlimaForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const klimaAdi = document.getElementById('klimaAdi').value;
        const ipAdresi = document.getElementById('ipAdresi').value;
        klimalar.push({ name: klimaAdi, ip: ipAdresi });
        localStorage.setItem('klimalar', JSON.stringify(klimalar));
        window.location.href = 'index.html';
    });
}

// Sayfa yüklendiğinde klimaları yükle
document.addEventListener('DOMContentLoaded', function() {
    const storedKlimalar = localStorage.getItem('klimalar');
    if (storedKlimalar) {
        klimalar = JSON.parse(storedKlimalar);
    }
    loadKlimalar();
});
