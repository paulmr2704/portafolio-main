export interface NavItem {
  label: string;
  href: string;
  sectionId: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: "Perfil", href: "/#perfil", sectionId: "perfil" },
  { label: "4 Pilares", href: "/#pilares", sectionId: "pilares" },
  { label: "Casos de Estudio", href: "/#proyectos", sectionId: "proyectos" },
  { label: "Credenciales", href: "/#credenciales", sectionId: "credenciales" },
  { label: "Trayectoria", href: "/#experiencia", sectionId: "experiencia" },
];

