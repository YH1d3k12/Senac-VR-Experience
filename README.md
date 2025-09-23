# SENAC VR Experience

Uma experiência virtual imersiva desenvolvida para o Meta Quest 3, permitindo explorar os ambientes físicos do SENAC através de modelos 3D interativos.

## 🚀 Tecnologias Utilizadas

- **React 19** com **TypeScript**
- **Vite** como bundler
- **TailwindCSS** para estilização
- **React Three Fiber** para renderização 3D
- **Drei** para componentes 3D avançados
- **React Router** para navegação
- **Three.js** para manipulação 3D

## 📁 Estrutura do Projeto

```
src/
├── assets/          # Modelos GLB e recursos estáticos
├── components/      # Componentes reutilizáveis
│   ├── ui/         # Componentes UI do shadcn/ui
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── EnvironmentCard.tsx
│   └── ModelViewer.tsx
├── pages/          # Páginas principais
│   ├── Home.tsx
│   └── Viewer.tsx
├── hooks/          # Hooks customizados
├── types/          # Definições TypeScript
├── utils/          # Funções utilitárias
│   └── environments.ts
└── styles/         # Estilos globais
```

## 🎯 Funcionalidades

### Página Inicial (Home)
- **Navbar moderna** com logotipo SENAC e navegação
- **Seção hero** com apresentação institucional
- **Cards interativos** dos ambientes com efeitos hover
- **Design responsivo** para desktop, tablet e mobile
- **Footer** com links institucionais

### Página de Visualização 3D (Viewer)
- **Renderização 3D** dos modelos GLB
- **Controles intuitivos** para rotação e zoom
- **Pontos de informação** interativos
- **Controles de áudio** (preparado para implementação)
- **Compatibilidade** com Meta Quest 3
- **Interface responsiva** com controles adaptativos

## 🏢 Ambientes Disponíveis

1. **Auditório** - Espaço para apresentações e eventos
2. **Biblioteca** - Centro de conhecimento e estudos
3. **Cozinha Pedagógica** - Laboratório gastronômico
4. **Entrada Principal** - Recepção e boas-vindas
5. **Estacionamento** - Área de estacionamento
6. **Refeitório** - Espaço de convivência
7. **Sala de Aula** - Ambiente de aprendizagem

## 🛠️ Instalação e Execução

### Pré-requisitos
- Node.js 18+ 
- pnpm (recomendado) ou npm

### Passos para execução

1. **Clone o repositório**
```bash
git clone <url-do-repositorio>
cd senac-vr-experience
```

2. **Instale as dependências**
```bash
pnpm install
```

3. **Execute o servidor de desenvolvimento**
```bash
pnpm run dev
```

4. **Acesse a aplicação**
```
http://localhost:5173
```

## 📱 Responsividade

A aplicação foi desenvolvida com abordagem **mobile-first** e é totalmente responsiva:

- **Mobile** (320px+): Layout otimizado para smartphones
- **Tablet** (768px+): Interface adaptada para tablets
- **Desktop** (1024px+): Experiência completa para desktops
- **Meta Quest 3**: Compatibilidade total com WebXR

## 🎨 Design System

### Cores Principais
- **Background**: Gradiente escuro (#0f0f23 → #1a1a2e → #16213e)
- **Accent**: Cyan (#00ffff) e Blue (#0080ff)
- **Text**: Branco e tons de cinza
- **Cards**: Glass morphism com backdrop blur

### Efeitos Visuais
- **Hover effects** com transformações suaves
- **Glow effects** em elementos interativos
- **Animações** com transições CSS
- **Glass morphism** para elementos flutuantes

## 🥽 Compatibilidade Meta Quest 3

### Recursos WebXR
- **Renderização 3D** otimizada para VR
- **Controles de navegação** adaptados para VR
- **Interface responsiva** que se adapta ao ambiente VR
- **Performance otimizada** para dispositivos móveis

### Como usar no Meta Quest 3
1. Abra o navegador no Meta Quest 3
2. Acesse a URL da aplicação
3. Use os controles do headset para navegar
4. Interaja com os modelos 3D naturalmente

## 🔧 Scripts Disponíveis

```bash
# Desenvolvimento
pnpm run dev

# Build para produção
pnpm run build

# Preview da build
pnpm run preview

# Linting
pnpm run lint
```

## 📦 Build e Deploy

### Build para Produção
```bash
pnpm run build
```

Os arquivos otimizados serão gerados na pasta `dist/`.

### Deploy
A aplicação pode ser deployada em qualquer serviço de hospedagem estática:
- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront

## 🎯 Próximas Funcionalidades

- [ ] **Sistema de áudio** com narração dos ambientes
- [ ] **Modo VR nativo** com WebXR API
- [ ] **Animações** nos modelos 3D
- [ ] **Multiplayer** para experiências compartilhadas
- [ ] **Analytics** de uso e engajamento
- [ ] **CMS** para gerenciamento de conteúdo

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 📞 Contato

**SENAC** - Serviço Nacional de Aprendizagem Comercial
- Website: [senac.br](https://senac.br)
- Email: contato@senac.br
- Telefone: (11) 3471-4000

---

**Desenvolvido com ❤️ para o futuro da educação profissional**

