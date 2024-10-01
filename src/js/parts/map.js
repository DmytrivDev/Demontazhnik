import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Знаходимо елемент карти
const mapElement = document.getElementById('map');

// Отримуємо значення широти, довготи і зуму з data-атрибутів
const lat = mapElement.dataset.lat;
const lng = mapElement.dataset.lng;
const zoom = mapElement.dataset.zoom;
const markerIcon = mapElement.dataset.marker;

// Ініціалізація карти з координатами та масштабом з data-атрибутів
const map = L.map('map').setView([lat, lng], zoom);

// Додавання тайлів з OpenStreetMap
L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
  maxZoom: 19,
}).addTo(map);

// Створення кастомної іконки для маркера
const customIcon = L.icon({
  iconUrl: markerIcon, // Посилання на твою іконку
  iconSize: [26, 44], // Розмір іконки
  iconAnchor: [13, 44], // Точка прив'язки іконки
  popupAnchor: [0, -40], // Точка відкриття попапу (не використовується без попапу)
});

// Додавання маркера з кастомною іконкою на карту без попапу
const marker = L.marker([lat, lng], { icon: customIcon }).addTo(map);
