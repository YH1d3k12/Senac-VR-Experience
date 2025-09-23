# Estrutura de Pastas - SENAC VR Experience

Este projeto segue a estrutura de pastas conforme especificado:

```
src/
├── assets/          → imagens, ícones, modelos 3D (arquivos GLB)
├── components/      → componentes reutilizáveis
│   ├── ui/         → componentes UI do shadcn/ui
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── EnvironmentCard.tsx
│   └── ModelViewer.tsx
├── pages/          → páginas principais
│   ├── Home.tsx    → página inicial
│   └── Viewer.tsx  → página de visualização 3D
├── hooks/          → hooks customizados (vazio por enquanto)
├── styles/         → estilos globais
│   ├── App.css     → estilos principais com tema futurista
│   └── index.css   → estilos base
├── utils/          → funções utilitárias
│   └── environments.ts → dados dos ambientes do SENAC
├── types/          → definições de tipos TypeScript
│   └── index.ts    → interfaces e tipos principais
├── lib/            → bibliotecas e configurações (shadcn/ui)
├── App.tsx         → componente principal da aplicação
└── main.tsx        → ponto de entrada da aplicação
```

## Descrição das Pastas

### `/assets`
Contém todos os recursos estáticos:
- **Modelos GLB**: Auditorio.glb, biblioteca.glb, cozinha.glb, entrada.glb, estacionamento.glb, refeitorio.glb, Saladeaula.glb
- **Ícones e imagens**: react.svg e outros recursos visuais

### `/components`
Componentes React reutilizáveis:
- **Navbar.tsx**: Barra de navegação moderna com logotipo SENAC
- **Footer.tsx**: Rodapé institucional com links e informações
- **EnvironmentCard.tsx**: Cards interativos dos ambientes com efeitos hover
- **ModelViewer.tsx**: Componente de visualização 3D usando React Three Fiber

### `/pages`
Páginas principais da aplicação:
- **Home.tsx**: Página inicial com hero section e grid de ambientes
- **Viewer.tsx**: Página de visualização 3D com controles interativos

### `/hooks`
Pasta preparada para hooks customizados (atualmente vazia)

### `/styles`
Estilos globais da aplicação:
- **App.css**: Estilos principais com tema futurista, gradientes e efeitos
- **index.css**: Estilos base e configurações do Tailwind

### `/utils`
Funções utilitárias e dados:
- **environments.ts**: Configuração dos 7 ambientes do SENAC com metadados

### `/types`
Definições TypeScript:
- **index.ts**: Interfaces para Environment, InfoPoint, Props dos componentes

### `/lib`
Configurações de bibliotecas (shadcn/ui utils)

## Tecnologias Utilizadas

- **React 19** com **TypeScript**
- **Vite** como bundler
- **TailwindCSS** para estilização
- **React Three Fiber** + **Drei** para 3D
- **React Router** para navegação
- **shadcn/ui** para componentes UI

## Padrões Seguidos

✅ Separação clara de responsabilidades
✅ Componentes reutilizáveis
✅ Tipagem TypeScript completa
✅ Estrutura escalável
✅ Organização por funcionalidade
✅ Compatibilidade com Meta Quest 3

