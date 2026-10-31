import { 
  InventoryItem, 
  Conversation, 
  Message, 
  QuickReply, 
  ScheduledPost, 
  VipGroupPost,
  WhatsAppGroup,
  LinktreeItem,
  UserProfile,
  SacolinhaCondicional
} from '../types';

export const INITIAL_INVENTORY: InventoryItem[] = [
  // 1. LEGGINGS TRADICIONAL P
  { id: 'leg-trad-p-1', name: 'Legging Tradicional', category: 'Leggings', subcategory: 'Tradicional', size: 'P', color: 'Croco Verde', quantity: 1, price: 189.90, costPrice: 95.00, imageUrl: '/products/IMG_2241.jpg' },
  { id: 'leg-trad-p-2', name: 'Legging Tradicional', category: 'Leggings', subcategory: 'Tradicional', size: 'P', color: 'Acrópole', quantity: 1, price: 189.90, costPrice: 95.00, imageUrl: '/products/IMG_2243.jpg' },
  { id: 'leg-trad-p-3', name: 'Legging Tradicional', category: 'Leggings', subcategory: 'Tradicional', size: 'P', color: 'Cookie', quantity: 2, price: 189.90, costPrice: 95.00, imageUrl: '/products/legging-cookie.jpg' },
  { id: 'leg-trad-p-4', name: 'Legging Tradicional', category: 'Leggings', subcategory: 'Tradicional', size: 'P', color: 'Café', quantity: 1, price: 189.90, costPrice: 95.00, imageUrl: '/products/IMG_2228.jpg' },
  { id: 'leg-trad-p-5', name: 'Legging Tradicional', category: 'Leggings', subcategory: 'Tradicional', size: 'P', color: 'Barolo', quantity: 1, price: 189.90, costPrice: 95.00, imageUrl: '/products/IMG_1994.jpg' },
  { id: 'leg-trad-p-6', name: 'Legging Tradicional', category: 'Leggings', subcategory: 'Tradicional', size: 'P', color: 'Azul-marinho', quantity: 1, price: 189.90, costPrice: 95.00, imageUrl: '/products/IMG_2000.jpg' },
  { id: 'leg-trad-p-7', name: 'Legging Tradicional', category: 'Leggings', subcategory: 'Tradicional', size: 'P', color: 'Castanho', quantity: 1, price: 189.90, costPrice: 95.00, imageUrl: '/products/IMG_1998.jpg' },
  { id: 'leg-trad-p-8', name: 'Legging Tradicional', category: 'Leggings', subcategory: 'Tradicional', size: 'P', color: 'Topázio', quantity: 1, price: 189.90, costPrice: 95.00, imageUrl: '/products/IMG_2248.jpg' },
  { id: 'leg-trad-p-9', name: 'Legging Tradicional', category: 'Leggings', subcategory: 'Tradicional', size: 'P', color: 'Bonsai', quantity: 1, price: 189.90, costPrice: 95.00, imageUrl: '/products/IMG_2233.jpg' },
  { id: 'leg-trad-p-10', name: 'Legging Tradicional', category: 'Leggings', subcategory: 'Tradicional', size: 'P', color: 'Preta Cirrê', quantity: 1, price: 199.90, costPrice: 100.00, imageUrl: '/products/IMG_2008.jpg' },
  // Black Friday Leggings P
  { id: 'leg-trad-p-bf-1', name: 'Legging Tradicional', category: 'Leggings', subcategory: 'Tradicional', size: 'P', color: 'Oceano', quantity: 2, price: 149.90, costPrice: 85.00, isBlackFriday: true, notes: 'Lote Promocional Black Friday', imageUrl: '/products/IMG_2005.jpg' },
  { id: 'leg-trad-p-bf-2', name: 'Legging Tradicional', category: 'Leggings', subcategory: 'Tradicional', size: 'P', color: 'Orquídea', quantity: 1, price: 149.90, costPrice: 85.00, isBlackFriday: true, notes: 'Lote Promocional Black Friday', imageUrl: '/products/IMG_2005.jpg' },

  // LEGGINGS TRADICIONAL M
  { id: 'leg-trad-m-1', name: 'Legging Tradicional', category: 'Leggings', subcategory: 'Tradicional', size: 'M', color: 'Café', quantity: 1, price: 189.90, costPrice: 95.00, imageUrl: '/products/IMG_2228.jpg' },
  { id: 'leg-trad-m-2', name: 'Legging Tradicional', category: 'Leggings', subcategory: 'Tradicional', size: 'M', color: 'Cookie', quantity: 2, price: 189.90, costPrice: 95.00, imageUrl: '/products/legging-cookie.jpg' },
  { id: 'leg-trad-m-3', name: 'Legging Tradicional', category: 'Leggings', subcategory: 'Tradicional', size: 'M', color: 'Preta', quantity: 2, price: 189.90, costPrice: 95.00, imageUrl: '/products/IMG_2008.jpg' },
  { id: 'leg-trad-m-4', name: 'Legging Tradicional', category: 'Leggings', subcategory: 'Tradicional', size: 'M', color: 'Barolo', quantity: 2, price: 189.90, costPrice: 95.00, imageUrl: '/products/IMG_1994.jpg' },
  { id: 'leg-trad-m-5', name: 'Legging Tradicional', category: 'Leggings', subcategory: 'Tradicional', size: 'M', color: 'Croco', quantity: 1, price: 189.90, costPrice: 95.00, imageUrl: '/products/IMG_2241.jpg' },
  { id: 'leg-trad-m-6', name: 'Legging Tradicional', category: 'Leggings', subcategory: 'Tradicional', size: 'M', color: 'Carbox', quantity: 1, price: 189.90, costPrice: 95.00, imageUrl: '/products/IMG_2000.jpg' },
  { id: 'leg-trad-m-7', name: 'Legging Tradicional', category: 'Leggings', subcategory: 'Tradicional', size: 'M', color: 'Azul-marinho', quantity: 1, price: 189.90, costPrice: 95.00, imageUrl: '/products/IMG_2000.jpg' },
  { id: 'leg-trad-m-8', name: 'Legging Tradicional', category: 'Leggings', subcategory: 'Tradicional', size: 'M', color: 'Blue Jeans', quantity: 1, price: 189.90, costPrice: 95.00, imageUrl: '/products/IMG_2005.jpg' },
  { id: 'leg-trad-m-9', name: 'Legging Tradicional', category: 'Leggings', subcategory: 'Tradicional', size: 'M', color: 'Bonsai', quantity: 1, price: 189.90, costPrice: 95.00, imageUrl: '/products/IMG_2233.jpg' },
  // Black Friday Leggings M
  { id: 'leg-trad-m-bf-1', name: 'Legging Tradicional', category: 'Leggings', subcategory: 'Tradicional', size: 'M', color: 'Fuschia', quantity: 2, price: 149.90, costPrice: 85.00, isBlackFriday: true, notes: 'Lote Promocional Black Friday', imageUrl: '/products/IMG_2005.jpg' },
  { id: 'leg-trad-m-bf-2', name: 'Legging Tradicional', category: 'Leggings', subcategory: 'Tradicional', size: 'M', color: 'Ipê Roxo', quantity: 1, price: 149.90, costPrice: 85.00, isBlackFriday: true, notes: 'Lote Promocional Black Friday', imageUrl: '/products/IMG_2005.jpg' },

  // LEGGINGS G, GG, PP
  { id: 'leg-trad-g-bf-1', name: 'Legging Tradicional', category: 'Leggings', subcategory: 'Tradicional', size: 'G', color: 'Fuschia', quantity: 1, price: 149.90, costPrice: 85.00, isBlackFriday: true, notes: 'Lote Promocional Black Friday', imageUrl: '/products/IMG_2005.jpg' },
  { id: 'leg-trad-gg-1', name: 'Legging Tradicional', category: 'Leggings', subcategory: 'Tradicional', size: 'GG', color: 'Preta', quantity: 1, price: 189.90, costPrice: 95.00, imageUrl: '/products/IMG_2008.jpg' },
  { id: 'leg-trad-pp-1', name: 'Legging Tradicional', category: 'Leggings', subcategory: 'Tradicional', size: 'PP', color: 'Preta', quantity: 1, price: 189.90, costPrice: 95.00, imageUrl: '/products/IMG_2008.jpg' },

  // OUTRAS LEGGINGS (SPORT, SPORT RACE, WAVE, ALLURE)
  { id: 'leg-sport-1', name: 'Legging Sport', category: 'Leggings', subcategory: 'Sport', size: 'M', color: 'Azul-marinho', quantity: 1, price: 199.90, costPrice: 100.00, imageUrl: '/products/IMG_2000.jpg' },
  { id: 'leg-sport-2', name: 'Legging Sport', category: 'Leggings', subcategory: 'Sport', size: 'M', color: 'Verde Fresh', quantity: 1, price: 199.90, costPrice: 100.00, imageUrl: '/products/IMG_2241.jpg' },
  { id: 'leg-sport-3', name: 'Legging Sport', category: 'Leggings', subcategory: 'Sport', size: 'M', color: 'Azul-bebê', quantity: 1, price: 199.90, costPrice: 100.00, imageUrl: '/products/IMG_2005.jpg' },
  { id: 'leg-race-m-1', name: 'Legging Sport Race', category: 'Leggings', subcategory: 'Sport Race', size: 'M', color: 'Areia', quantity: 1, price: 209.90, costPrice: 105.00, imageUrl: '/products/IMG_1998.jpg' },
  { id: 'leg-race-m-2', name: 'Legging Sport Race', category: 'Leggings', subcategory: 'Sport Race', size: 'M', color: 'Marinho', quantity: 1, price: 209.90, costPrice: 105.00, imageUrl: '/products/IMG_2000.jpg' },
  { id: 'leg-race-m-3', name: 'Legging Sport Race', category: 'Leggings', subcategory: 'Sport Race', size: 'M', color: 'Rosa Calm', quantity: 1, price: 209.90, costPrice: 105.00, imageUrl: '/products/IMG_2005.jpg' },
  { id: 'leg-race-m-4', name: 'Legging Sport Race', category: 'Leggings', subcategory: 'Sport Race', size: 'M', color: 'Café', quantity: 1, price: 209.90, costPrice: 105.00, imageUrl: '/products/IMG_2228.jpg' },
  { id: 'leg-race-m-5', name: 'Legging Sport Race', category: 'Leggings', subcategory: 'Sport Race', size: 'M', color: 'Carbox', quantity: 1, price: 209.90, costPrice: 105.00, imageUrl: '/products/IMG_2000.jpg' },
  { id: 'leg-race-uni-1', name: 'Legging Sport Race', category: 'Leggings', subcategory: 'Sport Race', size: 'P', color: 'Verde Croco', quantity: 1, price: 209.90, costPrice: 105.00, imageUrl: '/products/IMG_2241.jpg' },
  { id: 'leg-race-uni-2', name: 'Legging Sport Race', category: 'Leggings', subcategory: 'Sport Race', size: 'M', color: 'Azul-marinho', quantity: 2, price: 209.90, costPrice: 105.00, imageUrl: '/products/IMG_2000.jpg' },
  { id: 'leg-wave-m-1', name: 'Legging Wave', category: 'Leggings', subcategory: 'Wave', size: 'M', color: 'Amarelo-manteiga', quantity: 1, price: 219.90, costPrice: 110.00, isLastPiece: true, isLimitedEdition: true, imageUrl: '/products/IMG_1998.jpg' },
  { id: 'leg-allure-1', name: 'Legging Allure', category: 'Leggings', subcategory: 'Allure', size: 'M', color: 'Cookie', quantity: 1, price: 219.90, costPrice: 110.00, isLastPiece: true, isLimitedEdition: true, imageUrl: '/products/legging-cookie.jpg' },

  // 2. TOPS
  { id: 'top-live-m-1', name: 'Top Live', category: 'Tops', subcategory: 'Live', size: 'M', color: 'Acrópole', quantity: 2, price: 129.90, costPrice: 65.00, imageUrl: '/products/IMG_2243.jpg' },
  { id: 'top-live-m-2', name: 'Top Live', category: 'Tops', subcategory: 'Live', size: 'M', color: 'Café', quantity: 2, price: 129.90, costPrice: 65.00, imageUrl: '/products/IMG_2228.jpg' },
  { id: 'top-live-m-3', name: 'Top Live', category: 'Tops', subcategory: 'Live', size: 'M', color: 'Preto', quantity: 2, price: 129.90, costPrice: 65.00, imageUrl: '/products/IMG_2008.jpg' },
  { id: 'top-live-m-4', name: 'Top Live', category: 'Tops', subcategory: 'Live', size: 'M', color: 'Cookie', quantity: 2, price: 129.90, costPrice: 65.00, imageUrl: '/products/legging-cookie.jpg' },
  { id: 'top-live-m-5', name: 'Top Live', category: 'Tops', subcategory: 'Live', size: 'M', color: 'Marinho', quantity: 1, price: 129.90, costPrice: 65.00, imageUrl: '/products/IMG_2000.jpg' },
  { id: 'top-live-m-6', name: 'Top Live', category: 'Tops', subcategory: 'Live', size: 'M', color: 'Carbox', quantity: 1, price: 129.90, costPrice: 65.00, imageUrl: '/products/IMG_2000.jpg' },
  { id: 'top-live-m-7', name: 'Top Live', category: 'Tops', subcategory: 'Live', size: 'M', color: 'Topázio', quantity: 1, price: 129.90, costPrice: 65.00, imageUrl: '/products/IMG_2248.jpg' },
  { id: 'top-live-m-8', name: 'Top Live', category: 'Tops', subcategory: 'Live', size: 'M', color: 'Croco', quantity: 1, price: 129.90, costPrice: 65.00, imageUrl: '/products/IMG_2241.jpg' },
  { id: 'top-live-m-9', name: 'Top Live', category: 'Tops', subcategory: 'Live', size: 'M', color: 'Bonsai', quantity: 1, price: 129.90, costPrice: 65.00, imageUrl: '/products/IMG_2233.jpg' },
  { id: 'top-live-m-10', name: 'Top Live', category: 'Tops', subcategory: 'Live', size: 'M', color: 'Barolo', quantity: 1, price: 129.90, costPrice: 65.00, imageUrl: '/products/IMG_1994.jpg' },
  { id: 'top-live-m-11', name: 'Top Live', category: 'Tops', subcategory: 'Live', size: 'M', color: 'Blue Jeans', quantity: 1, price: 129.90, costPrice: 65.00, imageUrl: '/products/IMG_2005.jpg' },
  { id: 'top-live-m-bf-1', name: 'Top Live', category: 'Tops', subcategory: 'Live', size: 'M', color: 'Ipê Roxo', quantity: 1, price: 99.90, costPrice: 50.00, isBlackFriday: true, imageUrl: '/products/IMG_2005.jpg' },
  { id: 'top-live-m-bf-2', name: 'Top Live', category: 'Tops', subcategory: 'Live', size: 'M', color: 'Oceano', quantity: 2, price: 99.90, costPrice: 50.00, isBlackFriday: true, imageUrl: '/products/IMG_2005.jpg' },

  // MACACÕES
  { id: 'mac-longo-m-2', name: 'Macacão Longo', category: 'Macacões', subcategory: 'Longo', size: 'M', color: 'Barolo', quantity: 1, price: 279.90, costPrice: 140.00, imageUrl: '/products/IMG_1994.jpg' },
  { id: 'mac-longo-m-1', name: 'Macacão Longo', category: 'Macacões', subcategory: 'Longo', size: 'M', color: 'Café', quantity: 1, price: 279.90, costPrice: 140.00, imageUrl: '/products/IMG_2228.jpg' },
  { id: 'mac-curto-p-1', name: 'Macacão Curto', category: 'Macacões', subcategory: 'Curto', size: 'P', color: 'Preto', quantity: 1, price: 239.90, costPrice: 120.00, imageUrl: '/products/IMG_2008.jpg' },
];

export const INITIAL_SACOLINHA_CAMILA: SacolinhaCondicional = {
  id: 'sac-001',
  conversationId: 'conv-1',
  contactName: 'Camila Alencar',
  contactPhone: '+5534991245582',
  neighborhood: 'Morada da Colina',
  items: [
    { itemId: 'leg-trad-m-2', name: 'Legging Tradicional', size: 'M', color: 'Cookie', price: 189.90, status: 'comprado' },
    { itemId: 'leg-trad-m-1', name: 'Legging Tradicional', size: 'M', color: 'Café', price: 189.90, status: 'devolvido' },
    { itemId: 'top-live-m-1', name: 'Top Live', size: 'M', color: 'Acrópole', price: 129.90, status: 'comprado' }
  ],
  totalValue: 509.70,
  dispatchedAt: 'Hoje às 11:00',
  returnDeadline: 'Amanhã às 14:00',
  status: 'ativa',
  deliveryFee: 0.00
};

export const INITIAL_CONVERSATIONS: Conversation[] = [
  {
    id: 'conv-1',
    contactId: 'ct-1',
    contactName: 'Camila Alencar',
    contactPhone: '+5534991245582',
    neighborhood: 'Morada da Colina',
    city: 'Uberlândia - MG',
    queue: 'meus',
    assignedTo: 'Luana Frias',
    lastMessage: 'Amei a Legging Cookie! O tecido é inacreditável de macio.',
    lastMessageTime: '15:42',
    unreadCount: 0,
    tags: ['Tamanho M', 'Malinha Condicional', 'Fiel'],
    stage: 'Condicional Enviado',
    dealValue: 509.70,
    activeSacolinha: INITIAL_SACOLINHA_CAMILA,
    notes: 'Condomínio Bosque da Colina. Malinha #SAC-001 entregue às 11h. Decisão: vai ficar com a Cookie M e o Top Live Acrópole.'
  },
  {
    id: 'conv-2',
    contactId: 'ct-2',
    contactName: 'Dra. Fernanda Resende',
    contactPhone: '+5534988412099',
    neighborhood: 'Granja Marileusa',
    city: 'Uberlândia - MG',
    queue: 'finalizados',
    assignedTo: 'Luana Frias',
    lastMessage: 'Comprovante do Pix enviado! Já estou usando a preta cirrê no plantão rsrs',
    lastMessageTime: 'Ontem',
    unreadCount: 0,
    tags: ['Tamanho P', 'Cirrê', 'Pix Confirmado'],
    stage: 'Venda Concluída',
    dealValue: 199.90,
    notes: 'Dermatologista. Pagou via Pix. Adora peças pretas acetinadas.'
  },
  {
    id: 'conv-3',
    contactId: 'ct-3',
    contactName: 'Patrícia Borges',
    contactPhone: '+5534997631120',
    neighborhood: 'Santa Mônica',
    city: 'Uberlândia - MG',
    queue: 'aguardando',
    assignedTo: undefined,
    lastMessage: 'Luana, boa tarde! Você ainda tem a T-Shirt Desejo azul marinho no tamanho P?',
    lastMessageTime: '11:15',
    unreadCount: 2,
    tags: ['Tamanho P', 'T-Shirt Desejo', 'Novo Lead'],
    stage: 'Novo Lead',
    dealValue: 139.90,
    notes: 'Vinda do Instagram @glossyluanaudia após o story da T-Shirt Desejo.'
  },
  {
    id: 'conv-4',
    contactId: 'ct-4',
    contactName: 'Juliana Castro',
    contactPhone: '+5534992338814',
    neighborhood: 'Jardim Karaíba',
    city: 'Uberlândia - MG',
    queue: 'espera',
    assignedTo: 'Luana Frias',
    lastMessage: 'Vou ver com meu marido hoje à noite e te dou certeza sobre o Macacão Longo Barolo!',
    lastMessageTime: '09:30',
    unreadCount: 0,
    tags: ['Tamanho M', 'Macacão', 'Aguardando Decisão'],
    stage: 'Em Atendimento',
    dealValue: 279.90,
    notes: 'Quer experimentar para usar na academia e corrida no final de semana.'
  },
  {
    id: 'conv-5',
    contactId: 'ct-5',
    contactName: 'Renata Mendonça (Personal)',
    contactPhone: '+5534996554312',
    neighborhood: 'Fundinho',
    city: 'Uberlândia - MG',
    queue: 'aguardando',
    assignedTo: undefined,
    lastMessage: 'Oi Lu!! Minhas alunas estão doidas querendo ver o catálogo novo da Glossy. Consegue mandar aqui?',
    lastMessageTime: '16:05',
    unreadCount: 1,
    tags: ['Parceira Personal', 'Grupo VIP', 'Revenda Potencial'],
    stage: 'Em Atendimento',
    dealValue: 650.00,
    notes: 'Personal trainer na academia Euro Fitness. Forte potencial para indicação de alunas.'
  }
];

export const INITIAL_MESSAGES: Record<string, Message[]> = {
  'conv-1': [
    {
      id: 'm1-1',
      conversationId: 'conv-1',
      senderType: 'contact',
      senderName: 'Camila Alencar',
      content: 'Oi Luana, bom dia! Vi seu post da Legging Tradicional cor Cookie. Ainda tem no tamanho M?',
      status: 'read',
      createdAt: '10:14'
    },
    {
      id: 'm1-2',
      conversationId: 'conv-1',
      senderType: 'agent',
      senderName: 'Luana Frias',
      content: 'Bom dia Camila! Tenho sim, separei 2 peças no tamanho M novinhas em estoque! ✨',
      status: 'read',
      createdAt: '10:18'
    },
    {
      id: 'm1-3',
      conversationId: 'conv-1',
      senderType: 'agent',
      senderName: 'Luana Frias',
      content: 'Posso montar uma sacolinha condicional com a Cookie, a Café e o Top Live Acrópole para você experimentar hoje na sua casa no Morada da Colina sem compromisso!',
      status: 'read',
      createdAt: '10:20'
    },
    {
      id: 'm1-4',
      conversationId: 'conv-1',
      senderType: 'contact',
      senderName: 'Camila Alencar',
      content: 'Nossa Luana, perfeito! Pode mandar sim, fico em home office até às 18h.',
      status: 'read',
      createdAt: '10:25'
    },
    {
      id: 'm1-5',
      conversationId: 'conv-1',
      senderType: 'system',
      content: '🔒 NOTA INTERNA VÉRTICE: Sacolinha condicional #SAC-001 despachada para Morada da Colina. Itens: Legging Cookie M (R$ 189,90), Legging Café M (R$ 189,90) e Top Live M Acrópole (R$ 129,90). Devolução combinada para amanhã às 14h.',
      isInternalNote: true,
      status: 'read',
      createdAt: '11:05'
    },
    {
      id: 'm1-6',
      conversationId: 'conv-1',
      senderType: 'agent',
      senderName: 'Luana Frias',
      content: 'Áudio com orientações de prova e cuidados com a poliamida acetinada Glossy.',
      mediaType: 'audio',
      audioDuration: '0:22',
      status: 'read',
      createdAt: '11:10'
    },
    {
      id: 'm1-7',
      conversationId: 'conv-1',
      senderType: 'contact',
      senderName: 'Camila Alencar',
      content: 'Amei a Legging Cookie! O tecido é inacreditável de macio. Já separei para ficar com ela e com o Top Live!',
      status: 'read',
      createdAt: '15:42'
    }
  ],
  'conv-2': [
    {
      id: 'm2-1',
      conversationId: 'conv-2',
      senderType: 'contact',
      senderName: 'Dra. Fernanda Resende',
      content: 'Lu, a preta cirrê tamanho P veste certinho? Não fica transparente no agachamento?',
      status: 'read',
      createdAt: 'Ontem 17:10'
    },
    {
      id: 'm2-2',
      conversationId: 'conv-2',
      senderType: 'agent',
      senderName: 'Luana Frias',
      content: 'Dra. Fernanda, zero transparência! A poliamida cirrê Glossy tem gramatura pesada e cós anatômico duplo. Pode agachar com segurança absoluta!',
      status: 'read',
      createdAt: 'Ontem 17:15'
    },
    {
      id: 'm2-3',
      conversationId: 'conv-2',
      senderType: 'contact',
      senderName: 'Dra. Fernanda Resende',
      content: 'Comprovante do Pix enviado! Já estou usando a preta cirrê no plantão rsrs',
      status: 'read',
      createdAt: 'Ontem 18:20'
    },
    {
      id: 'm2-4',
      conversationId: 'conv-2',
      senderType: 'system',
      content: '🔒 NOTA INTERNA VÉRTICE: Venda confirmada R$ 199,90 via Pix. Baixa realizada no item leg-trad-p-10.',
      isInternalNote: true,
      status: 'read',
      createdAt: 'Ontem 18:25'
    }
  ],
  'conv-3': [
    {
      id: 'm3-1',
      conversationId: 'conv-3',
      senderType: 'contact',
      senderName: 'Patrícia Borges',
      content: 'Luana, boa tarde! Você ainda tem a T-Shirt Desejo azul marinho no tamanho P?',
      status: 'delivered',
      createdAt: '11:15'
    },
    {
      id: 'm3-2',
      conversationId: 'conv-3',
      senderType: 'contact',
      senderName: 'Patrícia Borges',
      content: 'E qual o valor dela à vista no Pix?',
      status: 'delivered',
      createdAt: '11:16'
    }
  ],
  'conv-4': [
    {
      id: 'm4-1',
      conversationId: 'conv-4',
      senderType: 'contact',
      senderName: 'Juliana Castro',
      content: 'Oi Luana, vi a foto do Macacão Longo Barolo. Me apaixonei pelo decote das costas!',
      status: 'read',
      createdAt: 'Hoje 09:12'
    },
    {
      id: 'm4-2',
      conversationId: 'conv-4',
      senderType: 'agent',
      senderName: 'Luana Frias',
      content: 'Juliana, ele é escultural! Modela o corpo com sustentação perfeita. Tenho 1 unidade exclusiva no tamanho M.',
      status: 'read',
      createdAt: 'Hoje 09:18'
    },
    {
      id: 'm4-3',
      conversationId: 'conv-4',
      senderType: 'contact',
      senderName: 'Juliana Castro',
      content: 'Vou ver com meu marido hoje à noite e te dou certeza sobre o Macacão Longo Barolo!',
      status: 'read',
      createdAt: 'Hoje 09:30'
    }
  ],
  'conv-5': [
    {
      id: 'm5-1',
      conversationId: 'conv-5',
      senderType: 'contact',
      senderName: 'Renata Mendonça (Personal)',
      content: 'Oi Lu!! Minhas alunas estão doidas querendo ver o catálogo novo da Glossy. Consegue mandar aqui?',
      status: 'delivered',
      createdAt: 'Hoje 16:05'
    }
  ]
};

export const INITIAL_QUICK_REPLIES: QuickReply[] = [
  {
    id: 'qr-1',
    shortcut: '/chavepix',
    title: 'Chave Pix Oficial',
    content: 'Segue a nossa chave Pix oficial Glossy By Luana Frias:\n\n📱 Chave Celular: 34993002424\nFavorecido: Luana Frias\n\nAssim que efetuar o pagamento, por favor envie o comprovante aqui para liberarmos sua entrega! ✨'
  },
  {
    id: 'qr-2',
    shortcut: '/condicional',
    title: 'Regras da Sacolinha Condicional',
    content: 'Como funciona nossa Sacolinha Condicional em Uberlândia: 🛍️\n\n1. Você escolhe até 4 peças do nosso estoque;\n2. Entregamos via motoboy direto no seu endereço;\n3. Você experimenta com calma em casa no seu espelho;\n4. Fica 24 horas para decidir e recolhemos o que não ficar.\n\nQual o seu bairro e tamanho para eu separar sua sacolinha?'
  },
  {
    id: 'qr-3',
    shortcut: '/tabela-tamanhos',
    title: 'Grade e Tabela de Medidas Glossy',
    content: 'Nossa grade de tamanhos anatômica:\n\n• PP: Manequim 34 / Busto 78-84cm / Quadril 86-92cm\n• P: Manequim 36-38 / Busto 84-90cm / Quadril 92-98cm\n• M: Manequim 40-42 / Busto 90-98cm / Quadril 98-106cm\n• G: Manequim 44-46 / Busto 98-106cm / Quadril 106-114cm\n• GG: Manequim 48+ / Busto 106-114cm / Quadril 114-122cm\n\nO tecido tem compressão com memória e zero transparência!'
  },
  {
    id: 'qr-4',
    shortcut: '/catalogo',
    title: 'Catálogos em PDF para Download',
    content: 'Confira todos os nossos catálogos digitais com fotos em alta definição:\n\n📂 Catálogos Oficiais Glossy:\nhttps://linktr.ee/glossyluanaudia\n\nOu me conta qual peça você procura que eu te mando as fotos agora!'
  },
  {
    id: 'qr-5',
    shortcut: '/grupovip',
    title: 'Convite Grupo VIP Select',
    content: 'Você já participa do nosso Grupo VIP Exclusivo no WhatsApp? 🦩\n\nLá você recebe:\n✔ Spoilers de novas cores antes do Instagram\n✔ Avisos de reposição de estoque\n✔ Enquetes para escolher peças\n✔ Promoções especiais da semana\n\nÉ um grupo silencioso (só a Luana posta):\n👉 Entre agora: https://chat.whatsapp.com/JotyAslBsLJKfqfqAJe5wG'
  }
];

export const INITIAL_SCHEDULED_POSTS: ScheduledPost[] = [
  {
    id: 'sp-1',
    title: 'Legging Tradicional Cookie M - Pronta-Entrega',
    format: 'comercial',
    productName: 'Legging Tradicional Cookie',
    color: 'Cookie',
    price: 189.90,
    caption: `A tonalidade mais desejada da estação está disponível para você em Uberlândia! ✨🤎

A nossa Legging Tradicional na tonalidade Cookie une compressão na medida certa com cós anatômico duplo que NÃO enrola durante o treino. Zero transparência, toque acetinado e elasticidade premium Glossy!

Disponível nos tamanhos P e M com entrega rápida ou sacolinha condicional para você provar no conforto da sua casa! 🛍️

📲 Envie uma mensagem no direct ou clique no link da bio para reservar a sua antes que esgote!`,
    hashtags: ['#GlossyUberlandia', '#ModaFitness', '#LookDeTreino', '#UberlandiaFitness', '#LeggingCookie', '#RevendedoraGlossy'],
    imageUrl: '/products/legging-cookie.jpg',
    scheduledDate: '2026-10-31',
    scheduledTime: '11:30',
    status: 'aguardando_aprovacao',
    channels: {
      instagram: true,
      facebook: true,
      whatsappVip: true
    }
  },
  {
    id: 'sp-2',
    title: 'Legging Tradicional Barolo - Sofisticação & Cós Anatômico',
    format: 'lifestyle',
    productName: 'Legging Tradicional Barolo',
    color: 'Barolo',
    price: 189.90,
    caption: `Treinar com um look que abraça as suas curvas muda completamente a sua postura! 🍷🖤

A cor Barolo é o vinho mais sofisticado da coleção. Com tecido acetinado de alta gramatura e tecnologia de sustentação, você tem liberdade total de movimento do treino ao pós-treino sem se preocupar com marcações.

Conforto absoluto e caimento impecável. Quem aqui ama tons intensos para treinar? Conta pra mim nos comentários! 👇✨`,
    hashtags: ['#FitnessLifestyle', '#AutoEstimaFeminina', '#LookFitness', '#MulheresQueTreinam', '#GlossyUberlandia', '#TreinoComEstilo'],
    imageUrl: '/products/IMG_1994.jpg',
    scheduledDate: '2026-11-01',
    scheduledTime: '18:45',
    status: 'aguardando_aprovacao',
    channels: {
      instagram: true,
      facebook: true,
      whatsappVip: true
    }
  },
  {
    id: 'sp-3',
    title: 'Legging Tradicional Café - Toque Aveludado & Zero Transparência',
    format: 'apresentacao',
    productName: 'Legging Tradicional Café',
    color: 'Café',
    price: 189.90,
    caption: `Detalhes que fazem a diferença em cada movimento: tonalidade Café Glossy. ☕🤎

Observe o acabamento:
✔ Costura plana reforçada que não atrita na pele
✔ Cós duplo de cintura alta que segura o abdômen sem sufocar
✔ Poliamida encorpada com proteção UV50+ e toque sedoso

Peça exclusiva disponível para você em Uberlândia. Quer provar no seu tamanho? Manda mensagem no WhatsApp comercial e agendamos sua sacolinha condicional!`,
    hashtags: ['#ModaAcademia', '#GlossyVibes', '#Uberlandia', '#FitnessChic', '#CafeGlossy'],
    imageUrl: '/products/IMG_2228.jpg',
    scheduledDate: '2026-11-02',
    scheduledTime: '12:00',
    status: 'rascunho',
    channels: {
      instagram: true,
      facebook: false,
      whatsappVip: true
    }
  }
];

export const INITIAL_WHATSAPP_GROUPS: WhatsAppGroup[] = [
  {
    id: 'grp-vip-1',
    name: 'VIP GLOSSY - LUANA FRIAS (OFICIAL)',
    participantCount: 1042,
    isVip: true,
    inviteLink: 'https://chat.whatsapp.com/JotyAslBsLJKfqfqAJe5wG',
    lastActivity: 'Hoje às 14:20'
  }
];

export const INITIAL_VIP_POSTS: VipGroupPost[] = [
  {
    id: 'vip-1',
    type: 'spoiler',
    title: 'Spoiler: Cor Cookie em Uberlândia',
    text: `🚨😍 MENINAS, ELA CHEGOU!

A tonalidade Cookie é aquele neutro chic que combina com tudo e modela sem marcar nada!
Separamos pouquíssimas unidades para o estoque de Uberlândia.

Quem quiser reservar antes de postarmos no feed oficial do Instagram, me chama no privado! 👇🏃‍♀️`,
    mediaType: 'image',
    targetGroupId: 'grp-vip-1',
    targetGroupName: 'VIP GLOSSY - LUANA FRIAS (OFICIAL)',
    scheduledFor: 'Hoje às 17:00',
    status: 'pronto'
  },
  {
    id: 'vip-2',
    type: 'enquete',
    title: 'Enquete: Preferência de Cores para Próximo Pedido',
    text: `✨ ENQUETE EXCLUSIVA VIP SELECT ✨
Meninas, estamos fechando o próximo lote com a fábrica em São Paulo! 
Qual dessas tonalidades NÃO pode faltar no seu guarda-roupa fitness?`,
    mediaType: 'poll',
    pollOptions: ['Cookie & Café (Tons Terrosos)', 'Barolo & Vinho (Chic)', 'Croco & Bonsai (Verdes)', 'Preto Cirrê (Acetinado)'],
    targetGroupId: 'grp-vip-1',
    targetGroupName: 'VIP GLOSSY - LUANA FRIAS (OFICIAL)',
    scheduledFor: 'Amanhã às 10:00',
    status: 'pronto'
  },
  {
    id: 'vip-3',
    type: 'promocao',
    title: 'Promoções da Semana: Lote Black Friday com Desconto',
    text: `🛍️✨ PROMOÇÕES ESPECIAIS DA SEMANA!

Meninas de Uberlândia! Selecionamos peças exclusivas do lote promocional com valores imperdíveis para pagamento à vista no Pix:

✔ Legging Tradicional Oceano / Orquídea: De R$ 189,90 por R$ 149,90
✔ Top Live Oceano / Ipê Roxo: De R$ 129,90 por R$ 99,90
✔ Bermuda Tradicional Preto Cirrê: De R$ 159,90 por R$ 119,90

Válido enquanto durar o estoque físico de Uberlândia. Chama a Lu no privado para reservar a sua! 💖`,
    mediaType: 'image',
    targetGroupId: 'grp-vip-1',
    targetGroupName: 'VIP GLOSSY - LUANA FRIAS (OFICIAL)',
    scheduledFor: 'Quarta às 14:00',
    status: 'pronto'
  }
];

export const INITIAL_LINKTREE_ITEMS: LinktreeItem[] = [
  {
    id: 'lt-1',
    title: 'COMPRE AQUI / ATENDIMENTO WHATSAPP',
    subtitle: 'Fale direto com a Luana para pronta-entrega ou sacolinha condicional',
    url: 'https://wa.me/5534993002424?text=Ol%C3%A1%20Luana!%20Vim%20pelo%20Linktree%20e%20gostaria%20de%20ver%20as%20pe%C3%A7as%20dispon%C3%ADveis%20no%20meu%20tamanho.',
    badge: 'Atendimento Rápido',
    type: 'whatsapp',
    active: true
  },
  {
    id: 'lt-2',
    title: 'ENTRE NO GRUPO VIP SELECT',
    subtitle: 'Grupo silencioso com spoilers antecipados e promoções da semana',
    url: 'https://chat.whatsapp.com/JotyAslBsLJKfqfqAJe5wG',
    badge: 'Silencioso',
    type: 'group',
    active: true
  },
  {
    id: 'lt-3',
    title: 'CATÁLOGO COLEÇÃO SPORT 2026 (PDF)',
    subtitle: 'Linha de alta performance com compressão anatômica',
    url: 'https://drive.google.com/drive/folders/1LR8hW--sAJ76wngBoYibTNy9lPReYEbV',
    badge: 'Novo PDF',
    type: 'pdf',
    active: true
  },
  {
    id: 'lt-4',
    title: 'CATÁLOGO CORES PERMANENTES (LEGGINGS & TOPS)',
    subtitle: 'Cores clássicas: Cookie, Café, Preto Cirrê, Barolo e Croco',
    url: 'https://drive.google.com/drive/folders/1LR8hW--sAJ76wngBoYibTNy9lPReYEbV',
    badge: 'Mais Vendidos',
    type: 'pdf',
    active: true
  },
  {
    id: 'lt-5',
    title: 'CATÁLOGO MACACÕES & CONJUNTOS (PDF)',
    subtitle: 'Modelagens curtas, longas e regatas esculturais',
    url: 'https://drive.google.com/drive/folders/1LR8hW--sAJ76wngBoYibTNy9lPReYEbV',
    badge: 'Exclusivo',
    type: 'pdf',
    active: true
  },
  {
    id: 'lt-6',
    title: 'CATÁLOGO REGATA TELA & DESEJO (PDF)',
    subtitle: 'T-shirts leves e regatas frescas para treinos intensos',
    url: 'https://drive.google.com/drive/folders/1LR8hW--sAJ76wngBoYibTNy9lPReYEbV',
    badge: 'Coleção Leve',
    type: 'pdf',
    active: true
  },
  {
    id: 'lt-7',
    title: 'ONDE NOS ENCONTRAR (UBERLÂNDIA - MG)',
    subtitle: 'Condicionais em domicílio nos condomínios e bairros nobres de UDI',
    url: 'https://wa.me/5534993002424?text=Ol%C3%A1%20Luana!%20Gostaria%20de%20saber%20se%20voc%C3%AA%20atende%20no%20meu%20bairro.',
    badge: 'Condicional VIP',
    type: 'location',
    active: true
  }
];

export const INITIAL_USER_PROFILE: UserProfile = {
  name: 'Luana Frias',
  email: 'luana@glossyluanaudia.com.br',
  phone: '+55 (34) 99300-2424',
  role: 'Revendedora Master',
  city: 'Uberlândia',
  baseNeighborhood: 'Morada da Colina',
  pixKey: '34993002424',
  openRouterKey: '',
  instagramUser: '@glossyluanaudia',
  defaultCondicionalHours: 24
};

export const UBERLANDIA_NEIGHBORHOODS = [
  'Morada da Colina',
  'Granja Marileusa',
  'Santa Mônica',
  'Jardim Karaíba',
  'Fundinho',
  'Cazeca',
  'Tibery',
  'Santa Maria',
  'Martins',
  'Osvaldo Rezende',
  'Copacabana',
  'Altamira',
  'Gávea',
  'Shopping Park',
  'Jardim das Acácias'
];

export const CATALOG_LINKS = [
  { name: 'Catálogo Coleção Sport 2026 (PDF)', size: '135 MB', url: 'https://drive.google.com/drive/folders/1LR8hW--sAJ76wngBoYibTNy9lPReYEbV' },
  { name: 'Catálogo Glossy - Cores Permanentes (PDF)', size: '72 MB', url: 'https://drive.google.com/drive/folders/1LR8hW--sAJ76wngBoYibTNy9lPReYEbV' },
  { name: 'Catálogo Macacões Glossy (PDF)', size: '43 MB', url: 'https://drive.google.com/drive/folders/1LR8hW--sAJ76wngBoYibTNy9lPReYEbV' },
  { name: 'Catálogo Regata Tela & Desejo (PDF)', size: '56 MB', url: 'https://drive.google.com/drive/folders/1LR8hW--sAJ76wngBoYibTNy9lPReYEbV' },
  { name: 'Catálogo Linha Brisa Exclusiva (PDF)', size: '9 MB', url: 'https://drive.google.com/drive/folders/1LR8hW--sAJ76wngBoYibTNy9lPReYEbV' },
  { name: 'Inventário Físico Uberlândia (PDF 7 Páginas)', size: '14 KB', url: '#' },
];
