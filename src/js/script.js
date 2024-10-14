
function showCard() {
  const tipoCarta = document.getElementById('tipoCarta').value;
  const cardContainer = document.getElementById('cartaContainer');

  const iconos = {
    Bomba: './src/images/bombaCarta.png',
    Desactivacion: './src/images/desactivacionCarta.png',
    SaltarTurno: './src/images/saltarTurnoCarta.png',
    Denegar: './src/images/denegarCarta.png',
    Puntos: './src/images/pointCarta.png'
  };
  const descripcion = {
    Bomba: 'Esta carta podría cambiar el juego...',
    Desactivacion: 'Úsala para desactivar una bomba y salvarte del peligro.',
    SaltarTurno: 'Salta tu turno y pasa la jugada al siguiente jugador.',
    Denegar: 'Niega la acción del jugador anterior.',
    Puntos: 'Gana puntos adicionales con esta carta.'
  }

  cardContainer.innerHTML = `
    <div class="card ${tipoCarta}">
        <div class="iconoEsquina top-left">
            <img src="${iconos[tipoCarta]}" alt="${tipoCarta}">
        </div>
        <div class="header">
            <span>${tipoCarta}</span>
        </div>
        <div class="icon">
            <img src="${iconos[tipoCarta]}" alt="${tipoCarta}">
        </div>
        <div class="footer">
              <span>${descripcion[tipoCarta]}</span>
        </div>
        <div class="iconoEsquina bottom-right">
            <img src="${iconos[tipoCarta]}" alt="${tipoCarta}">
        </div>
    </div>
`;
}
