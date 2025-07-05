/**
 * Constantes para iconos de Font Awesome utilizados en la aplicación
 * Esto centraliza la gestión de iconos y facilita su mantenimiento
 */
export const ICONS = {
  // Navegación principal
  TRENDING: 'fa-solid fa-chart-line',
  SEARCH: 'fa-solid fa-magnifying-glass',
  FAVORITES: 'fa-solid fa-heart',
  HISTORY: 'fa-solid fa-clock-rotate-left',
  
  // Acciones
  DOWNLOAD: 'fa-solid fa-download',
  SHARE: 'fa-solid fa-share',
  COPY: 'fa-solid fa-copy',
  BOOKMARK: 'fa-solid fa-bookmark',
  
  // UI Elements
  CLOSE: 'fa-solid fa-xmark',
  MENU: 'fa-solid fa-bars',
  SETTINGS: 'fa-solid fa-gear',
  USER: 'fa-solid fa-user',
  
  // Estados
  LOADING: 'fa-solid fa-spinner',
  ERROR: 'fa-solid fa-triangle-exclamation',
  SUCCESS: 'fa-solid fa-check',
  INFO: 'fa-solid fa-info-circle',
  
  // Multimedia
  PLAY: 'fa-solid fa-play',
  PAUSE: 'fa-solid fa-pause',
  VOLUME_UP: 'fa-solid fa-volume-high',
  VOLUME_MUTE: 'fa-solid fa-volume-xmark',
  
  // Navegación
  ARROW_LEFT: 'fa-solid fa-arrow-left',
  ARROW_RIGHT: 'fa-solid fa-arrow-right',
  ARROW_UP: 'fa-solid fa-arrow-up',
  ARROW_DOWN: 'fa-solid fa-arrow-down',
  
  // Redes sociales (si se necesitan)
  TWITTER: 'fa-brands fa-twitter',
  FACEBOOK: 'fa-brands fa-facebook',
  INSTAGRAM: 'fa-brands fa-instagram',
  WHATSAPP: 'fa-brands fa-whatsapp'
} as const;

/**
 * Tipo que representa las claves válidas de iconos
 */
export type IconKey = keyof typeof ICONS;

/**
 * Tipo que representa los valores válidos de iconos
 */
export type IconValue = typeof ICONS[IconKey];

/**
 * Función helper para obtener un icono de forma type-safe
 * @param key - La clave del icono
 * @returns La clase CSS del icono
 */
export function getIcon(key: IconKey): IconValue {
  return ICONS[key];
}

/**
 * Función para validar si una string es un icono válido
 * @param icon - La string a validar
 * @returns true si es un icono válido
 */
export function isValidIcon(icon: string): icon is IconValue {
  return Object.values(ICONS).includes(icon as IconValue);
}