export interface Environment {
  id: string;
  name: string;
  description: string;
  modelPath: string;
  audioPath?: string;
  thumbnail?: string;
  infoPoints?: InfoPoint[];
}

export interface InfoPoint {
  id: string;
  position: [number, number, number];
  title: string;
  description: string;
  visible: boolean;
}

export interface ViewerProps {
  environment: Environment;
  onBack: () => void;
}

export interface EnvironmentCardProps {
  environment: Environment;
  onClick: (environment: Environment) => void;
}

export interface NavbarProps {
  onLogoClick?: () => void;
}

export interface FooterProps {
  className?: string;
}

export interface ModelViewerProps {
  modelPath: string;
  infoPoints?: InfoPoint[];
  onInfoPointToggle?: (id: string) => void;
}

