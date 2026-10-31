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
  SacolinhaCondicional,
  SupportTicket 
} from '../types';

// ============================================================
// 1. ESTOQUE FÍSICO OFICIAL (Fiel ao Estoque_Glossy_revisado.pdf)
// ============================================================
export const INITIAL_INVENTORY: InventoryItem[] = [
  // --- LEGGINGS: Linha Tradicional ---
  { id: 'leg-trad-p-cookie', name: 'Legging Tradicional', category: 'Leggings', subcategory: 'Tradicional', size: 'P', color: 'Cookie', quantity: 2, price: 189.90, costPrice: 95.00, imageUrl: '/products/legging-cookie.jpg' },
  { id: 'leg-trad-p-barolo', name: 'Legging Tradicional', category: 'Leggings', subcategory: 'Tradicional', size: 'P', color: 'Barolo', quantity: 1, price: 189.90, costPrice: 95.00, imageUrl: '/products/IMG_1994.jpg' },
  { id: 'leg-trad-p-cafe', name: 'Legging Tradicional', category: 'Leggings', subcategory: 'Tradicional', size: 'P', color: 'Café', quantity: 1, price: 189.90, costPrice: 95.00, imageUrl: '/products/IMG_2228.jpg' },
  { id: 'leg-trad-p-croco', name: 'Legging Tradicional', category: 'Leggings', subcategory: 'Tradicional', size: 'P', color: 'Croco Verde', quantity: 1, price: 189.90, costPrice: 95.00 },
  { id: 'leg-trad-p-acropole', name: 'Legging Tradicional', category: 'Leggings', subcategory: 'Tradicional', size: 'P', color: 'Acrópole', quantity: 1, price: 189.90, costPrice: 95.00 },
  { id: 'leg-trad-p-marinho', name: 'Legging Tradicional', category: 'Leggings', subcategory: 'Tradicional', size: 'P', color: 'Azul-marinho', quantity: 1, price: 189.90, costPrice: 95.00 },
  { id: 'leg-trad-p-castanho', name: 'Legging Tradicional', category: 'Leggings', subcategory: 'Tradicional', size: 'P', color: 'Castanho', quantity: 1, price: 189.90, costPrice: 95.00 },
  { id: 'leg-trad-p-topazio', name: 'Legging Tradicional', category: 'Leggings', subcategory: 'Tradicional', size: 'P', color: 'Topázio', quantity: 1, price: 189.90, costPrice: 95.00 },
  { id: 'leg-trad-p-bonsai', name: 'Legging Tradicional', category: 'Leggings', subcategory: 'Tradicional', size: 'P', color: 'Bonsai', quantity: 1, price: 189.90, costPrice: 95.00 },
  { id: 'leg-trad-pp-preta', name: 'Legging Tradicional', category: 'Leggings', subcategory: 'Tradicional', size: 'PP', color: 'Preta', quantity: 1, price: 189.90, costPrice: 95.00 },
  { id: 'leg-trad-m-cookie', name: 'Legging Tradicional', category: 'Leggings', subcategory: 'Tradicional', size: 'M', color: 'Cookie', quantity: 2, price: 189.90, costPrice: 95.00, imageUrl: '/products/legging-cookie.jpg' },
  { id: 'leg-trad-m-barolo', name: 'Legging Tradicional', category: 'Leggings', subcategory: 'Tradicional', size: 'M', color: 'Barolo', quantity: 2, price: 189.90, costPrice: 95.00, imageUrl: '/products/IMG_1994.jpg' },
  { id: 'leg-trad-m-cafe', name: 'Legging Tradicional', category: 'Leggings', subcategory: 'Tradicional', size: 'M', color: 'Café', quantity: 1, price: 189.90, costPrice: 95.00, imageUrl: '/products/IMG_2228.jpg' },
  { id: 'leg-trad-m-preta', name: 'Legging Tradicional', category: 'Leggings', subcategory: 'Tradicional', size: 'M', color: 'Preta', quantity: 2, price: 189.90, costPrice: 95.00 },
  { id: 'leg-trad-m-croco', name: 'Legging Tradicional', category: 'Leggings', subcategory: 'Tradicional', size: 'M', color: 'Croco', quantity: 1, price: 189.90, costPrice: 95.00 },
  { id: 'leg-trad-m-carbox', name: 'Legging Tradicional', category: 'Leggings', subcategory: 'Tradicional', size: 'M', color: 'Carbox', quantity: 1, price: 189.90, costPrice: 95.00 },
  { id: 'leg-trad-m-marinho', name: 'Legging Tradicional', category: 'Leggings', subcategory: 'Tradicional', size: 'M', color: 'Azul-marinho', quantity: 1, price: 189.90, costPrice: 95.00 },
  { id: 'leg-trad-m-bluejeans', name: 'Legging Tradicional', category: 'Leggings', subcategory: 'Tradicional', size: 'M', color: 'Blue Jeans', quantity: 1, price: 189.90, costPrice: 95.00 },
  { id: 'leg-trad-m-bonsai', name: 'Legging Tradicional', category: 'Leggings', subcategory: 'Tradicional', size: 'M', color: 'Bonsai', quantity: 1, price: 189.90, costPrice: 95.00 },
  { id: 'leg-trad-g-bluejeans', name: 'Legging Tradicional', category: 'Leggings', subcategory: 'Tradicional', size: 'G', color: 'Blue Jeans', quantity: 2, price: 189.90, costPrice: 95.00 },
  { id: 'leg-trad-g-cafe', name: 'Legging Tradicional', category: 'Leggings', subcategory: 'Tradicional', size: 'G', color: 'Café', quantity: 1, price: 189.90, costPrice: 95.00 },
  { id: 'leg-trad-g-cookie', name: 'Legging Tradicional', category: 'Leggings', subcategory: 'Tradicional', size: 'G', color: 'Cookie', quantity: 1, price: 189.90, costPrice: 95.00 },
  { id: 'leg-trad-gg-preta', name: 'Legging Tradicional', category: 'Leggings', subcategory: 'Tradicional', size: 'GG', color: 'Preta', quantity: 1, price: 189.90, costPrice: 95.00 },

  // --- LEGGINGS: Linha Sport Race, Wave & Allure ---
  { id: 'leg-race-p-marinho', name: 'Legging Sport Race', category: 'Leggings', subcategory: 'Sport Race', size: 'P', color: 'Azul-marinho', quantity: 1, price: 209.90, costPrice: 105.00 },
  { id: 'leg-race-p-fresh', name: 'Legging Sport Race', category: 'Leggings', subcategory: 'Sport Race', size: 'P', color: 'Verde Fresh', quantity: 1, price: 209.90, costPrice: 105.00 },
  { id: 'leg-race-m-areia', name: 'Legging Sport Race', category: 'Leggings', subcategory: 'Sport Race', size: 'M', color: 'Areia', quantity: 1, price: 209.90, costPrice: 105.00 },
  { id: 'leg-race-m-marinho', name: 'Legging Sport Race', category: 'Leggings', subcategory: 'Sport Race', size: 'M', color: 'Marinho', quantity: 1, price: 209.90, costPrice: 105.00 },
  { id: 'leg-race-m-cafe', name: 'Legging Sport Race', category: 'Leggings', subcategory: 'Sport Race', size: 'M', color: 'Café', quantity: 1, price: 209.90, costPrice: 105.00 },
  { id: 'leg-wave-m-amarelo', name: 'Legging Wave', category: 'Leggings', subcategory: 'Wave', size: 'M', color: 'Amarelo manteiga', quantity: 1, price: 219.90, costPrice: 110.00, isLastPiece: true, isLimitedEdition: true },
  { id: 'leg-allure-cookie', name: 'Legging Allure', category: 'Leggings', subcategory: 'Allure', size: 'M', color: 'Cookie', quantity: 1, price: 219.90, costPrice: 110.00, isLastPiece: true, isLimitedEdition: true },

  // --- TOPS: Top Live, Glossy, Race, Allure ---
  { id: 'top-live-m-preto', name: 'Top Live', category: 'Tops', subcategory: 'Live', size: 'M', color: 'Preto', quantity: 2, price: 129.90, costPrice: 65.00, imageUrl: '/products/top-live-preto.jpg' },
  { id: 'top-live-m-cookie', name: 'Top Live', category: 'Tops', subcategory: 'Live', size: 'M', color: 'Cookie', quantity: 2, price: 129.90, costPrice: 65.00, imageUrl: '/products/top-live-cookie.jpg' },
  { id: 'top-live-m-acropole', name: 'Top Live', category: 'Tops', subcategory: 'Live', size: 'M', color: 'Acrópole', quantity: 2, price: 129.90, costPrice: 65.00 },
  { id: 'top-live-m-cafe', name: 'Top Live', category: 'Tops', subcategory: 'Live', size: 'M', color: 'Café', quantity: 2, price: 129.90, costPrice: 65.00 },
  { id: 'top-live-m-barolo', name: 'Top Live', category: 'Tops', subcategory: 'Live', size: 'M', color: 'Barolo', quantity: 1, price: 129.90, costPrice: 65.00 },
  { id: 'top-live-m-marinho', name: 'Top Live', category: 'Tops', subcategory: 'Live', size: 'M', color: 'Marinho', quantity: 1, price: 129.90, costPrice: 65.00 },
  { id: 'top-live-m-carbox', name: 'Top Live', category: 'Tops', subcategory: 'Live', size: 'M', color: 'Carbox', quantity: 1, price: 129.90, costPrice: 65.00 },
  { id: 'top-live-m-topazio', name: 'Top Live', category: 'Tops', subcategory: 'Live', size: 'M', color: 'Topázio', quantity: 1, price: 129.90, costPrice: 65.00 },
  { id: 'top-live-m-croco', name: 'Top Live', category: 'Tops', subcategory: 'Live', size: 'M', color: 'Croco', quantity: 1, price: 129.90, costPrice: 65.00 },
  { id: 'top-live-m-bonsai', name: 'Top Live', category: 'Tops', subcategory: 'Live', size: 'M', color: 'Bonsai', quantity: 1, price: 129.90, costPrice: 65.00 },
  { id: 'top-live-p-preto', name: 'Top Live', category: 'Tops', subcategory: 'Live', size: 'P', color: 'Preto', quantity: 1, price: 129.90, costPrice: 65.00, imageUrl: '/products/top-live-preto.jpg' },
  { id: 'top-glossy-m-preto', name: 'Top Glossy', category: 'Tops', subcategory: 'Glossy', size: 'M', color: 'Preto', quantity: 1, price: 139.90, costPrice: 70.00 },
  { id: 'top-glossy-m-castanho', name: 'Top Glossy', category: 'Tops', subcategory: 'Glossy', size: 'M', color: 'Castanho', quantity: 1, price: 139.90, costPrice: 70.00 },
  { id: 'top-race-m-carbox', name: 'Top Race', category: 'Tops', subcategory: 'Race', size: 'M', color: 'Carbox', quantity: 2, price: 139.90, costPrice: 70.00 },
  { id: 'top-allure-m-preto', name: 'Top Allure', category: 'Tops', subcategory: 'Allure', size: 'M', color: 'Preto', quantity: 1, price: 149.90, costPrice: 75.00 },
  { id: 'top-drape-m-preto', name: 'Top Drape Brisa', category: 'Tops', subcategory: 'Brisa', size: 'M', color: 'Preto', quantity: 2, price: 149.90, costPrice: 75.00 },
  { id: 'top-trapezio-g-croco', name: 'Top Trapézio', category: 'Tops', subcategory: 'Trapézio', size: 'G', color: 'Croco', quantity: 1, price: 139.90, costPrice: 70.00, isLastPiece: true },

  // --- CROPPED E PEÇAS CURTAS ---
  { id: 'crop-soft-cap', name: 'Cropped Soft', category: 'Cropped e Peças Curtas', subcategory: 'Soft', size: 'P', color: 'Cappuccino', quantity: 1, price: 119.90, costPrice: 60.00, isLimitedEdition: true },
  { id: 'crop-soft-preto', name: 'Cropped Soft', category: 'Cropped e Peças Curtas', subcategory: 'Soft', size: 'M', color: 'Preto', quantity: 1, price: 119.90, costPrice: 60.00 },
  { id: 'tapa-bumbum-preto', name: 'Tapa-bumbum Cropped', category: 'Cropped e Peças Curtas', subcategory: 'Acessório', size: 'Único', color: 'Preto', quantity: 1, price: 79.90, costPrice: 35.00 },
  { id: 'short-saia-brisa', name: 'Short-saia Brisa', category: 'Cropped e Peças Curtas', subcategory: 'Brisa', size: 'M', color: 'Off-white', quantity: 1, price: 159.90, costPrice: 80.00, isLastPiece: true },

  // --- BERMUDAS ---
  { id: 'berm-trad-p-cookie', name: 'Bermuda Tradicional', category: 'Bermudas', subcategory: 'Tradicional', size: 'P', color: 'Cookie', quantity: 2, price: 159.90, costPrice: 80.00, imageUrl: '/products/bermuda-cookie.jpg' },
  { id: 'berm-trad-p-croco', name: 'Bermuda Tradicional', category: 'Bermudas', subcategory: 'Tradicional', size: 'P', color: 'Croco', quantity: 2, price: 159.90, costPrice: 80.00 },
  { id: 'berm-trad-m-cookie', name: 'Bermuda Tradicional', category: 'Bermudas', subcategory: 'Tradicional', size: 'M', color: 'Cookie', quantity: 1, price: 159.90, costPrice: 80.00, imageUrl: '/products/bermuda-cookie.jpg' },
  { id: 'berm-trad-m-cafe', name: 'Bermuda Tradicional', category: 'Bermudas', subcategory: 'Tradicional', size: 'M', color: 'Café', quantity: 1, price: 159.90, costPrice: 80.00 },
  { id: 'berm-race-p-croco', name: 'Bermuda Sport Race', category: 'Bermudas', subcategory: 'Sport Race', size: 'P', color: 'Croco', quantity: 1, price: 169.90, costPrice: 85.00 },
  { id: 'berm-allure-g-cereja', name: 'Bermuda Allure', category: 'Bermudas', subcategory: 'Allure', size: 'G', color: 'Cereja', quantity: 1, price: 179.90, costPrice: 90.00, isLastPiece: true },

  // --- CAMISETAS: T-shirt Desejo, Raglan, Tela ---
  { id: 'tshirt-desejo-p-marinho', name: 'T-shirt Desejo', category: 'Camisetas', subcategory: 'Desejo', size: 'P', color: 'Azul-marinho', quantity: 2, price: 139.90, costPrice: 70.00 },
  { id: 'tshirt-desejo-p-preta', name: 'T-shirt Desejo', category: 'Camisetas', subcategory: 'Desejo', size: 'P', color: 'Preta', quantity: 1, price: 139.90, costPrice: 70.00 },
  { id: 'tshirt-desejo-m-cookie', name: 'T-shirt Desejo', category: 'Camisetas', subcategory: 'Desejo', size: 'M', color: 'Cookie', quantity: 1, price: 139.90, costPrice: 70.00 },
  { id: 'tshirt-raglan-p-cookie', name: 'T-shirt Raglan', category: 'Camisetas', subcategory: 'Raglan', size: 'P', color: 'Cookie', quantity: 1, price: 149.90, costPrice: 75.00 },
  { id: 'tshirt-raglan-p-carbox', name: 'T-shirt Raglan', category: 'Camisetas', subcategory: 'Raglan', size: 'P', color: 'Carbox', quantity: 1, price: 149.90, costPrice: 75.00 },
  { id: 'tshirt-raglan-m-amarelo', name: 'T-shirt Raglan', category: 'Camisetas', subcategory: 'Raglan', size: 'M', color: 'Amarelo manteiga', quantity: 1, price: 149.90, costPrice: 75.00 },
  { id: 'tshirt-tela-m-branco', name: 'T-shirt Tela', category: 'Camisetas', subcategory: 'Tela', size: 'M', color: 'Branco', quantity: 2, price: 149.90, costPrice: 75.00 },

  // --- REGATAS: Regata Tela & Regata Lara ---
  { id: 'regata-tela-p-preta', name: 'Regata Tela', category: 'Regatas', subcategory: 'Tela', size: 'P', color: 'Preta', quantity: 2, price: 129.90, costPrice: 65.00 },
  { id: 'regata-tela-p-marinho', name: 'Regata Tela', category: 'Regatas', subcategory: 'Tela', size: 'P', color: 'Marinho', quantity: 1, price: 129.90, costPrice: 65.00 },
  { id: 'regata-tela-m-croco', name: 'Regata Tela', category: 'Regatas', subcategory: 'Tela', size: 'M', color: 'Croco', quantity: 1, price: 129.90, costPrice: 65.00 },
  { id: 'regata-lara-m-preta', name: 'Regata Lara', category: 'Regatas', subcategory: 'Lara', size: 'M', color: 'Preta', quantity: 1, price: 139.90, costPrice: 70.00 },

  // --- MACACÕES ---
  { id: 'mac-longo-p-preto', name: 'Macacão Longo', category: 'Macacões', subcategory: 'Longo', size: 'P', color: 'Preto', quantity: 3, price: 279.90, costPrice: 140.00, imageUrl: '/products/macacao-longo-preto.jpg' },
  { id: 'mac-longo-m-barolo', name: 'Macacão Longo', category: 'Macacões', subcategory: 'Longo', size: 'M', color: 'Barolo', quantity: 1, price: 279.90, costPrice: 140.00 },
  { id: 'mac-longo-m-cafe', name: 'Macacão Longo', category: 'Macacões', subcategory: 'Longo', size: 'M', color: 'Café', quantity: 1, price: 279.90, costPrice: 140.00 },
  { id: 'mac-curto-p-marinho', name: 'Macacão Curto Drape', category: 'Macacões', subcategory: 'Curto', size: 'P', color: 'Azul-marinho', quantity: 1, price: 239.90, costPrice: 120.00 },
  { id: 'mac-curto-m-quartzo', name: 'Macacão Curto Drape', category: 'Macacões', subcategory: 'Curto', size: 'M', color: 'Quartzo', quantity: 1, price: 239.90, costPrice: 120.00 },
  { id: 'mac-regata-m-cafe', name: 'Macacão Regata', category: 'Macacões', subcategory: 'Regata', size: 'M', color: 'Café', quantity: 1, price: 249.90, costPrice: 125.00 }
];

export const INITIAL_SACOLINHA_CAMILA: SacolinhaCondicional = {
  id: 'sac-001',
  conversationId: 'conv-1',
  contactName: 'Camila Alencar',
  contactPhone: '+5534991245582',
  neighborhood: 'Morada da Colina',
  items: [
    { itemId: 'leg-trad-m-cookie', name: 'Legging Tradicional', size: 'M', color: 'Cookie', price: 189.90, status: 'comprado' },
    { itemId: 'leg-trad-m-cafe', name: 'Legging Tradicional', size: 'M', color: 'Café', price: 189.90, status: 'devolvido' },
    { itemId: 'top-live-m-cookie', name: 'Top Live', size: 'M', color: 'Cookie', price: 129.90, status: 'comprado' }
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
    lastMessage: 'Amei a Legging Cookie! O tecido é maravilhoso e não desce nada.',
    lastMessageTime: '15:42',
    unreadCount: 0,
    tags: ['Tamanho M', 'Sacolinha Condicional', 'Cliente VIP'],
    stage: 'Condicional Enviado',
    dealValue: 509.70,
    activeSacolinha: INITIAL_SACOLINHA_CAMILA,
    notes: 'Condomínio Bosque da Colina. Sacolinha entregue às 11h. Decisão: vai ficar com a Cookie M e o Top Live Cookie.'
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
    lastMessage: 'Comprovante do Pix enviado! Já estou usando a legging no plantão rsrs',
    lastMessageTime: 'Ontem',
    unreadCount: 0,
    tags: ['Tamanho P', 'Preta Cirrê', 'Pix Confirmado'],
    stage: 'Venda Concluída',
    dealValue: 189.90,
    notes: 'Dermatologista. Pagou via Pix. Adora peças clássicas escuras.'
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
    lastMessage: 'Olá! Você ainda tem a T-Shirt Desejo azul marinho no tamanho P?',
    lastMessageTime: '11:15',
    unreadCount: 2,
    tags: ['Tamanho P', 'T-Shirt Desejo', 'Novo Lead'],
    stage: 'Novo Lead',
    dealValue: 139.90,
    notes: 'Perguntou sobre disponibilidade de entrega hoje à tarde.'
  },
  {
    id: 'conv-4',
    contactId: 'ct-4',
    contactName: 'Juliana Prado (Personal Trainer)',
    contactPhone: '+5534996520114',
    neighborhood: 'Jardim Karaíba',
    city: 'Uberlândia - MG',
    queue: 'meus',
    assignedTo: 'Luana Frias',
    lastMessage: 'Meninas aqui no estúdio querem ver o macacão longo preto! Consegue mandar amanhã?',
    lastMessageTime: '09:30',
    unreadCount: 1,
    tags: ['Parceira', 'Macacão', 'Personal'],
    stage: 'Em Atendimento',
    dealValue: 279.90,
    notes: 'Estúdio de Treinamento Funcional no Karaíba. Alto volume de alunas interessadas.'
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
      content: 'Posso montar uma sacolinha condicional com a Cookie, a Café e o Top Live Cookie para você experimentar hoje na sua casa no Morada da Colina sem compromisso!',
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
      content: '🔒 NOTA INTERNA: Sacolinha condicional #SAC-001 despachada para Morada da Colina. Itens: Legging Cookie M (R$ 189,90), Legging Café M (R$ 189,90) e Top Live M Cookie (R$ 129,90). Devolução combinada para amanhã às 14h.',
      isInternalNote: true,
      status: 'read',
      createdAt: '11:05'
    },
    {
      id: 'm1-6',
      conversationId: 'conv-1',
      senderType: 'contact',
      senderName: 'Camila Alencar',
      content: 'Amei a Legging Cookie! O tecido é maravilhoso e não desce nada.',
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
      content: 'Lu, a entrega chegou certinho aqui na clínica! Aprovadíssima.',
      status: 'read',
      createdAt: 'Ontem 18:20'
    },
    {
      id: 'm2-2',
      conversationId: 'conv-2',
      senderType: 'contact',
      senderName: 'Dra. Fernanda Resende',
      content: 'Comprovante do Pix enviado! Já estou usando a legging no plantão rsrs',
      status: 'read',
      createdAt: 'Ontem 18:35'
    }
  ],
  'conv-3': [
    {
      id: 'm3-1',
      conversationId: 'conv-3',
      senderType: 'contact',
      senderName: 'Patrícia Borges',
      content: 'Olá! Você ainda tem a T-Shirt Desejo azul marinho no tamanho P?',
      status: 'delivered',
      createdAt: 'Hoje 11:15'
    }
  ],
  'conv-4': [
    {
      id: 'm4-1',
      conversationId: 'conv-4',
      senderType: 'contact',
      senderName: 'Juliana Prado (Personal Trainer)',
      content: 'Meninas aqui no estúdio querem ver o macacão longo preto! Consegue mandar amanhã?',
      status: 'delivered',
      createdAt: 'Hoje 09:30'
    }
  ]
};

export const INITIAL_QUICK_REPLIES: QuickReply[] = [
  {
    id: 'qr-1',
    shortcut: '/pix',
    title: 'Chave Pix Oficial',
    content: 'Segue nossa chave Pix oficial para confirmação do seu pedido:\n\n📱 Chave Celular: 34993002424\nFavorecido: Luana Frias\n\nAssim que efetuar o pagamento, por favor envie o comprovante aqui para liberarmos sua entrega! ✨'
  },
  {
    id: 'qr-2',
    shortcut: '/condicional',
    title: 'Regras da Sacolinha Condicional',
    content: 'Como funciona nossa Sacolinha Condicional em Uberlândia: 🛍️\n\n1. Você escolhe até 4 peças do nosso estoque físico;\n2. Entregamos via motoboy direto no seu endereço;\n3. Você experimenta com calma em casa no seu espelho;\n4. Fica 24 horas para decidir e recolhemos o que não ficar.\n\nQual o seu bairro e tamanho para eu separar sua sacolinha?'
  },
  {
    id: 'qr-3',
    shortcut: '/medidas',
    title: 'Tabela de Medidas e Caimento',
    content: 'Nossa grade de tamanhos anatômica:\n\n• PP: Manequim 34 / Busto 78-84cm / Quadril 86-92cm\n• P: Manequim 36-38 / Busto 84-90cm / Quadril 92-98cm\n• M: Manequim 40-42 / Busto 90-98cm / Quadril 98-106cm\n• G: Manequim 44-46 / Busto 98-106cm / Quadril 106-114cm\n• GG: Manequim 48+ / Busto 106-114cm / Quadril 114-122cm\n\nO tecido tem compressão com memória e zero transparência!'
  },
  {
    id: 'qr-4',
    shortcut: '/catalogo',
    title: 'Link dos Catálogos Digitais',
    content: 'Confira todos os nossos catálogos digitais com fotos em alta resolução:\n\n📂 Catálogos Oficiais Glossy:\nhttps://sistema-luana-glossy.vercel.app/bio\n\nOu me conta qual peça você procura que eu te mando as fotos agora!'
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

A nossa Legging Tradicional na tonalidade Cookie une compressão na medida certa com cós anatômico duplo que NÃO enrola durante o treino. Zero transparência no agachamento, toque acetinado e elasticidade premium!

Disponível nos tamanhos P e M com pronta-entrega ou sacolinha condicional para provar no conforto da sua casa! 🛍️

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
    title: 'Top Live Preto M - Sustentação & Conforto',
    format: 'apresentacao',
    productName: 'Top Live Preto',
    color: 'Preto',
    price: 129.90,
    caption: `O clássico indispensável que abraça o corpo com sustentação e leveza! 🖤✨

O Top Live Preto traz modelagem de alças confortáveis que não machucam os ombros e forro duplo com entrada para bojo. 

✔️ Tecido respirável de toque sedoso
✔️ Alta sustentação para qualquer modalidade de treino
✔️ Caimento perfeito com nossas leggings

Experimente no seu espelho através da nossa Sacolinha Condicional em Uberlândia! 🚗💨`,
    hashtags: ['#TopFitness', '#LookPreto', '#GlossyUberlandia', '#TreinoFeminino', '#ModaEsportiva'],
    imageUrl: '/products/top-live-preto.jpg',
    scheduledDate: '2026-11-01',
    scheduledTime: '14:00',
    status: 'aguardando_aprovacao',
    channels: {
      instagram: true,
      facebook: true,
      whatsappVip: true
    }
  },
  {
    id: 'sp-3',
    title: 'Macacão Longo Preto P - Modelagem Escultural',
    format: 'lifestyle',
    productName: 'Macacão Longo Preto',
    color: 'Preto',
    price: 279.90,
    caption: `Uma peça única, infinitas possibilidades de estilo e poder! ✨🖤

O Macacão Longo Preto desenha a silhueta com tecido de alta gramatura e elasticidade inteligente. Não marca, não fica transparente e transita com facilidade do treino para compromissos casuais do dia a dia.

Disponível no tamanho P para entrega rápida nos principais condomínios e bairros de Uberlândia. 

Chame no WhatsApp pelo link da bio e reserve o seu! 📲`,
    hashtags: ['#MacacaoFitness', '#ModaLuxo', '#GlossyBrasil', '#UberlandiaStyle', '#LookDeAcademia'],
    imageUrl: '/products/macacao-longo-preto.jpg',
    scheduledDate: '2026-11-02',
    scheduledTime: '18:30',
    status: 'aguardando_aprovacao',
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
    participantCount: 84,
    isVip: true,
    inviteLink: 'https://chat.whatsapp.com/JotyAslBsLJKfqfqAJe5wG',
    lastActivity: 'Hoje às 14:20'
  }
];

export const INITIAL_VIP_POSTS: VipGroupPost[] = [
  {
    id: 'vip-1',
    type: 'spoiler',
    title: 'Spoiler: Chegada de Peças em Uberlândia',
    text: `🚨😍 MENINAS, CHEGOU REPOSIÇÃO!

A tonalidade Cookie e o Macacão Longo acabaram de chegar no estoque físico de Uberlândia!
Separamos pouquíssimas unidades para o estoque local.

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
    title: 'Promoções da Semana: Condicional Express',
    text: `🛍️✨ SACOLINHA CONDICIONAL EXPRESS DA SEMANA!

Meninas de Uberlândia! Selecionamos peças exclusivas com entrega gratuita em domicílio para você experimentar no conforto do seu espelho:

✔ Legging Tradicional Cookie / Barolo / Café: R$ 189,90
✔ Top Live Preto / Cookie / Acrópole: R$ 129,90
✔ Macacão Longo Preto: R$ 279,90

Válido enquanto durar o estoque físico de Uberlândia. Chama no privado para agendar sua sacolinha! 💖`,
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
    subtitle: 'Fale direto para pronta-entrega ou sacolinha condicional',
    url: 'https://wa.me/553493002424?text=Ol%C3%A1!%20Vim%20pelo%20Linktree%20e%20gostaria%20de%20ver%20as%20pe%C3%A7as%20dispon%C3%ADveis%20no%20meu%20tamanho.',
    badge: 'Atendimento Rápido',
    type: 'whatsapp',
    active: true
  },
  {
    id: 'lt-2',
    title: 'ENTRE NO GRUPO VIP EXCLUSIVO',
    subtitle: 'Grupo silencioso com spoilers antecipados e promoções da semana',
    url: 'https://chat.whatsapp.com/JotyAslBsLJKfqfqAJe5wG',
    badge: 'Silencioso',
    type: 'group',
    active: true
  },
  {
    id: 'lt-3',
    title: 'CATÁLOGO DE COLEÇÕES PERMANENTES (PDF)',
    subtitle: 'Cores clássicas: Cookie, Café, Preto Cirrê, Barolo e Croco',
    url: 'https://drive.google.com/drive/folders/1LR8hW--sAJ76wngBoYibTNy9lPReYEbV',
    badge: 'Mais Vendidos',
    type: 'pdf',
    active: true
  },
  {
    id: 'lt-4',
    title: 'CATÁLOGO MACACÕES & CONJUNTOS (PDF)',
    subtitle: 'Modelagens curtas, longas e regatas esculturais',
    url: 'https://drive.google.com/drive/folders/1LR8hW--sAJ76wngBoYibTNy9lPReYEbV',
    badge: 'Exclusivo',
    type: 'pdf',
    active: true
  },
  {
    id: 'lt-5',
    title: 'SOLICITAR SACOLINHA CONDICIONAL EM CASA',
    subtitle: 'Entregamos em domicílio para você provar sem compromisso',
    url: 'https://wa.me/553493002424?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20uma%20sacolinha%20condicional%20no%20meu%20bairro.',
    badge: 'Condicional VIP',
    type: 'location',
    active: true
  }
];

export const INITIAL_USER_PROFILE: UserProfile = {
  name: 'Luana Frias',
  storeName: 'Glossy by Luana',
  email: 'luana@glossyluanaudia.com.br',
  phone: '+55 (34) 9300-2424',
  role: 'Revendedora Master',
  avatarUrl: '/brand/luana-frias.png',
  city: 'Uberlândia • MG',
  baseNeighborhood: 'Morada da Colina',
  pixKey: '34993002424',
  openRouterKey: '',
  instagramUser: 'glossyluanaudia',
  defaultCondicionalHours: 24
};

export const INITIAL_SUPPORT_TICKETS: SupportTicket[] = [
  {
    id: 'sup-1',
    protocol: 'SUP-8921',
    type: 'duvida',
    title: 'Como agendar post para horário de pico no Instagram',
    description: 'Gostaria de saber se a publicação automática respeita o fuso horário de Brasília ou se precisa configurar no perfil.',
    status: 'resolvido',
    screenUrl: '/posts',
    userName: 'Luana Frias',
    userRole: 'Revendedora Master',
    createdAt: 'Ontem às 16:30',
    response: 'Olá! O sistema opera nativamente no fuso horário de Brasília (UTC-3). Ao definir o horário da postagem, o disparo ocorre pontualmente no horário escolhido.'
  },
  {
    id: 'sup-2',
    protocol: 'SUP-8924',
    type: 'melhoria',
    title: 'Ajuste de opções de cores para nova coleção no catálogo',
    description: 'Solicitação de inclusão das novas tonalidades de Primavera/Verão diretamente no filtro de busca do estoque.',
    status: 'em_analise',
    screenUrl: '/inventory',
    userName: 'Luana Frias',
    userRole: 'Revendedora Master',
    createdAt: 'Hoje às 09:15',
    response: 'Recebido pela equipe de produto da Vértice. Em análise junto ao acervo da fábrica.'
  }
];

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
