import { Environment } from '../types';

export const environments: Environment[] = [
  {
    id: 'auditorio',
    name: 'Auditório',
    description: 'Bem-vindo ao Auditório! Aqui você pode presenciar diversas apresentações e eventos acadêmicos junto de um grande público.',
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
    description: 'Bem-vindo à biblioteca virtual! Aqui você pode acessar o nosso catálogo virtual de livros, que você também pode encontrar na nossa biblioteca real.',
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
    description: 'Bem-vindo à Cozinha Pedagógica! Aqui você pode conhecer mais sobre gastronomia e criar pratos incríveis.',
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
    description: 'Bem-vindo ao SENAC! Aqui você pode acessar nosso mapa interativo ou iniciar um tour guiado. Como posso ajudar?',
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
    description: 'Bem-vindo ao estacionamento! Aqui é onde nossos alunos e professores entram e saem da instituição. Temos espaço para carros, motos, e também uma guarita para garantir a segurança durante a entrada e saída.',
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
    description: 'Bem-vindo ao refeitório! Aqui é onde nossos alunos podem se alimentar ou comprar comida antes das aulas e durante intervalos, completo com ambiente acolhedor e moderno.',
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
    description: 'Bem-vindo à sala de aula! Aqui você pode mergulhar no universo da programação, ou conhecer práticas reais praticadas em hospitais.',
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

