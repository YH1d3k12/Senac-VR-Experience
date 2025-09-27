import { Environment } from '../types';

export const environments: Environment[] = [
  {
    id: 'auditorio',
    name: 'Auditório',
    description: 'Espaço moderno para apresentações e eventos acadêmicos com capacidade para grandes audiências.',
    modelPath: '/Senac-VR-Experience/assets/Auditorio.glb',
    audioPath: '/Senac-VR-Experience/assets/audios/audio.mp3',
    infoPoints: [
      {
        id: 'stage',
        position: [0, 1, 2],
        title: 'Palco Principal',
        description: 'Área equipada com sistema de som e iluminação profissional para apresentações.',
        visible: false
      }
    ]
  },
  {
    id: 'biblioteca',
    name: 'Biblioteca',
    description: 'Centro de conhecimento com acervo digital e físico, espaços de estudo individual e em grupo.',
    modelPath: '/Senac-VR-Experience/assets/biblioteca.glb',
    audioPath: '/Senac-VR-Experience/assets/audios/audio.mp3',
    infoPoints: [
      {
        id: 'reading-area',
        position: [1, 0, 1],
        title: 'Área de Leitura',
        description: 'Espaço silencioso dedicado ao estudo e pesquisa individual.',
        visible: false
      }
    ]
  },
  {
    id: 'cozinha',
    name: 'Cozinha Pedagógica',
    description: 'Laboratório gastronômico equipado com tecnologia de ponta para cursos de culinária.',
    modelPath: '/Senac-VR-Experience/assets/cozinha.glb',
    audioPath: '/Senac-VR-Experience/assets/audios/audio.mp3',
    infoPoints: [
      {
        id: 'cooking-station',
        position: [0, 1, 0],
        title: 'Estação de Cozimento',
        description: 'Equipamentos profissionais para práticas culinárias avançadas.',
        visible: false
      }
    ]
  },
  {
    id: 'entrada',
    name: 'Entrada Principal',
    description: 'Recepção moderna que dá as boas-vindas aos estudantes e visitantes.',
    modelPath: '/Senac-VR-Experience/assets/entrada.glb',
    infoPoints: [
      {
        id: 'reception',
        position: [0, 0, 1],
        title: 'Recepção',
        description: 'Área de atendimento e informações para estudantes e visitantes.',
        visible: false
      }
    ]
  },
  {
    id: 'estacionamento',
    name: 'Estacionamento',
    description: 'Área de estacionamento segura e organizada para estudantes e funcionários.',
    modelPath: '/Senac-VR-Experience/assets/estacionamento.glb',
    infoPoints: [
      {
        id: 'parking-area',
        position: [2, 0, 0],
        title: 'Área de Estacionamento',
        description: 'Vagas organizadas com sistema de segurança e controle de acesso.',
        visible: false
      }
    ]
  },
  {
    id: 'refeitorio',
    name: 'Refeitório',
    description: 'Espaço de convivência e alimentação com ambiente acolhedor e moderno.',
    modelPath: '/Senac-VR-Experience/assets/refeitorio.glb',
    infoPoints: [
      {
        id: 'dining-area',
        position: [1, 0, 1],
        title: 'Área de Alimentação',
        description: 'Espaço confortável para refeições e socialização entre estudantes.',
        visible: false
      }
    ]
  },
  {
    id: 'sala-de-aula',
    name: 'Sala de Aula',
    description: 'Ambiente de aprendizagem equipado com tecnologia educacional avançada.',
    modelPath: '/Senac-VR-Experience/assets/Saladeaula.glb',
    infoPoints: [
      {
        id: 'smart-board',
        position: [0, 1, 2],
        title: 'Lousa Inteligente',
        description: 'Tecnologia interativa para aulas dinâmicas e engajadoras.',
        visible: false
      }
    ]
  }
];

