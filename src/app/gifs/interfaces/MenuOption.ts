import { IconValue } from '../../shared/constants/icons.constants';

/**
 * Interfaz que define la estructura de una opción del menú lateral
 */
export interface MenuOption {
  /** Clase CSS del icono (usando constantes de Font Awesome) */
  icon: IconValue;
  
  /** Texto principal que se muestra en el menú */
  label: string;
  
  /** Ruta de navegación de Angular Router */
  router: string;
  
  /** Texto descriptivo secundario */
  sublabel: string;
  
  /** Indica si la opción está habilitada (opcional, por defecto true) */
  enabled?: boolean;
  
  /** Indica si la opción es visible (opcional, por defecto true) */
  visible?: boolean;
  
  /** Orden de visualización (opcional) */
  order?: number;
  
  /** Roles requeridos para ver esta opción (opcional) */
  requiredRoles?: string[];
  
  /** Metadata adicional (opcional) */
  metadata?: Record<string, any>;
}

/**
 * Tipo para las opciones del menú con propiedades requeridas
 */
export type RequiredMenuOption = Required<Pick<MenuOption, 'icon' | 'label' | 'router' | 'sublabel'>>;

/**
 * Función helper para crear una opción de menú con valores por defecto
 * @param option - Opción parcial del menú
 * @returns Opción completa del menú
 */
export function createMenuOption(option: RequiredMenuOption & Partial<MenuOption>): MenuOption {
  return {
    enabled: true,
    visible: true,
    order: 0,
    ...option
  };
}

/**
 * Función para filtrar opciones de menú visibles y habilitadas
 * @param options - Array de opciones del menú
 * @returns Array filtrado de opciones
 */
export function getVisibleMenuOptions(options: MenuOption[]): MenuOption[] {
  return options
    .filter(option => option.visible !== false && option.enabled !== false)
    .sort((a, b) => (a.order || 0) - (b.order || 0));
}

/**
 * Función para verificar si un usuario tiene permisos para ver una opción
 * @param option - Opción del menú
 * @param userRoles - Roles del usuario actual
 * @returns true si el usuario puede ver la opción
 */
export function canUserSeeOption(option: MenuOption, userRoles: string[] = []): boolean {
  if (!option.requiredRoles || option.requiredRoles.length === 0) {
    return true;
  }
  
  return option.requiredRoles.some(role => userRoles.includes(role));
}