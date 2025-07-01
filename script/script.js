// Primo sotto problema: Raccolta e validazione dei dati
let km = parseFloat(prompt("Inserisci i km da percorrere"));
let age = parseInt(prompt("Inserisci la tua età"));
//Calcolo per il prezzo base del biglietto
let price = km * 0.21;

// Secondo sotto problema: Calcolo del prezzo scontato
if (age < 18) {
  price = price * 0.8; // Sconto del 20%
} else if (age >= 65) {
  price = price * 0.6; // Sconto del 40%
}
