import { 
  InventoryItem, 
  Conversation, 
  Message, 
  QuickReply, 
  ScheduledPost, 
  VipGroupPost 
} from '../types';

export const INITIAL_INVENTORY: InventoryItem[] = [
  // 1. LEGGINGS TRADICIONAL P
  { id: 'leg-trad-p-1', name: 'Legging Tradicional', category: 'Leggings', subcategory: 'Tradicional', size: 'P', color: 'Croco Verde', quantity: 1, price: 189.90, imageUrl: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=500&auto=format&fit=crop&q=60' },
  { id: 'leg-trad-p-2', name: 'Legging Tradicional', category: 'Leggings', subcategory: 'Tradicional', size: 'P', color: 'Acrópole', quantity: 1, price: 189.90, imageUrl: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=500&auto=format&fit=crop&q=60' },
  { id: 'leg-trad-p-3', name: 'Legging Tradicional', category: 'Leggings', subcategory: 'Tradicional', size: 'P', color: 'Cookie', quantity: 2, price: 189.90, imageUrl: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=500&auto=format&fit=crop&q=60' },
  { id: 'leg-trad-p-4', name: 'Legging Tradicional', category: 'Leggings', subcategory: 'Tradicional', size: 'P', color: 'Café', quantity: 1, price: 189.90, imageUrl: 'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?w=500&auto=format&fit=crop&q=60' },
  { id: 'leg-trad-p-5', name: 'Legging Tradicional', category: 'Leggings', subcategory: 'Tradicional', size: 'P', color: 'Barolo', quantity: 1, price: 189.90, imageUrl: 'https://images.unsplash.com/photo-1483721074573-58630b3ee08b?w=500&auto=format&fit=crop&q=60' },
  { id: 'leg-trad-p-6', name: 'Legging Tradicional', category: 'Leggings', subcategory: 'Tradicional', size: 'P', color: 'Azul-marinho', quantity: 1, price: 189.90, imageUrl: 'https://images.unsplash.com/photo-1552196563-5523e43272d7?w=500&auto=format&fit=crop&q=60' },
  { id: 'leg-trad-p-7', name: 'Legging Tradicional', category: 'Leggings', subcategory: 'Tradicional', size: 'P', color: 'Castanho', quantity: 1, price: 189.90, imageUrl: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=500&auto=format&fit=crop&q=60' },
  { id: 'leg-trad-p-8', name: 'Legging Tradicional', category: 'Leggings', subcategory: 'Tradicional', size: 'P', color: 'Topázio', quantity: 1, price: 189.90, imageUrl: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=500&auto=format&fit=crop&q=60' },
  { id: 'leg-trad-p-9', name: 'Legging Tradicional', category: 'Leggings', subcategory: 'Tradicional', size: 'P', color: 'Bonsai', quantity: 1, price: 189.90, imageUrl: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=500&auto=format&fit=crop&q=60' },
  { id: 'leg-trad-p-10', name: 'Legging Tradicional', category: 'Leggings', subcategory: 'Tradicional', size: 'P', color: 'Preta Cirrê', quantity: 1, price: 199.90, imageUrl: 'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?w=500&auto=format&fit=crop&q=60' },
  // Black Friday Leggings P
  { id: 'leg-trad-p-bf-1', name: 'Legging Tradicional', category: 'Leggings', subcategory: 'Tradicional', size: 'P', color: 'Oceano', quantity: 2, price: 149.90, isBlackFriday: true, notes: 'Lote Promocional Black Friday' },
  { id: 'leg-trad-p-bf-2', name: 'Legging Tradicional', category: 'Leggings', subcategory: 'Tradicional', size: 'P', color: 'Orquídea', quantity: 1, price: 149.90, isBlackFriday: true, notes: 'Lote Promocional Black Friday' },

  // LEGGINGS TRADICIONAL M
  { id: 'leg-trad-m-1', name: 'Legging Tradicional', category: 'Leggings', subcategory: 'Tradicional', size: 'M', color: 'Café', quantity: 1, price: 189.90 },
  { id: 'leg-trad-m-2', name: 'Legging Tradicional', category: 'Leggings', subcategory: 'Tradicional', size: 'M', color: 'Cookie', quantity: 2, price: 189.90 },
  { id: 'leg-trad-m-3', name: 'Legging Tradicional', category: 'Leggings', subcategory: 'Tradicional', size: 'M', color: 'Preta', quantity: 2, price: 189.90 },
  { id: 'leg-trad-m-4', name: 'Legging Tradicional', category: 'Leggings', subcategory: 'Tradicional', size: 'M', color: 'Barolo', quantity: 2, price: 189.90 },
  { id: 'leg-trad-m-5', name: 'Legging Tradicional', category: 'Leggings', subcategory: 'Tradicional', size: 'M', color: 'Croco', quantity: 1, price: 189.90 },
  { id: 'leg-trad-m-6', name: 'Legging Tradicional', category: 'Leggings', subcategory: 'Tradicional', size: 'M', color: 'Carbox', quantity: 1, price: 189.90 },
  { id: 'leg-trad-m-7', name: 'Legging Tradicional', category: 'Leggings', subcategory: 'Tradicional', size: 'M', color: 'Azul-marinho', quantity: 1, price: 189.90 },
  { id: 'leg-trad-m-8', name: 'Legging Tradicional', category: 'Leggings', subcategory: 'Tradicional', size: 'M', color: 'Blue Jeans', quantity: 1, price: 189.90 },
  { id: 'leg-trad-m-9', name: 'Legging Tradicional', category: 'Leggings', subcategory: 'Tradicional', size: 'M', color: 'Bonsai', quantity: 1, price: 189.90 },
  // Black Friday Leggings M
  { id: 'leg-trad-m-bf-1', name: 'Legging Tradicional', category: 'Leggings', subcategory: 'Tradicional', size: 'M', color: 'Fuschia', quantity: 2, price: 149.90, isBlackFriday: true, notes: 'Lote Promocional Black Friday' },
  { id: 'leg-trad-m-bf-2', name: 'Legging Tradicional', category: 'Leggings', subcategory: 'Tradicional', size: 'M', color: 'Ipê Roxo', quantity: 1, price: 149.90, isBlackFriday: true, notes: 'Lote Promocional Black Friday' },

  // LEGGINGS G, GG, PP
  { id: 'leg-trad-g-bf-1', name: 'Legging Tradicional', category: 'Leggings', subcategory: 'Tradicional', size: 'G', color: 'Fuschia', quantity: 1, price: 149.90, isBlackFriday: true, notes: 'Lote Promocional Black Friday' },
  { id: 'leg-trad-gg-1', name: 'Legging Tradicional', category: 'Leggings', subcategory: 'Tradicional', size: 'GG', color: 'Preta', quantity: 1, price: 189.90 },
  { id: 'leg-trad-pp-1', name: 'Legging Tradicional', category: 'Leggings', subcategory: 'Tradicional', size: 'PP', color: 'Preta', quantity: 1, price: 189.90 },

  // OUTRAS LEGGINGS (SPORT, SPORT RACE, WAVE, ALLURE)
  { id: 'leg-sport-1', name: 'Legging Sport', category: 'Leggings', subcategory: 'Sport', size: 'M', color: 'Azul-marinho', quantity: 1, price: 199.90 },
  { id: 'leg-sport-2', name: 'Legging Sport', category: 'Leggings', subcategory: 'Sport', size: 'M', color: 'Verde Fresh', quantity: 1, price: 199.90 },
  { id: 'leg-sport-3', name: 'Legging Sport', category: 'Leggings', subcategory: 'Sport', size: 'M', color: 'Azul-bebê', quantity: 1, price: 199.90 },
  { id: 'leg-race-m-1', name: 'Legging Sport Race', category: 'Leggings', subcategory: 'Sport Race', size: 'M', color: 'Areia', quantity: 1, price: 209.90 },
  { id: 'leg-race-m-2', name: 'Legging Sport Race', category: 'Leggings', subcategory: 'Sport Race', size: 'M', color: 'Marinho', quantity: 1, price: 209.90 },
  { id: 'leg-race-m-3', name: 'Legging Sport Race', category: 'Leggings', subcategory: 'Sport Race', size: 'M', color: 'Rosa Calm', quantity: 1, price: 209.90 },
  { id: 'leg-race-m-4', name: 'Legging Sport Race', category: 'Leggings', subcategory: 'Sport Race', size: 'M', color: 'Café', quantity: 1, price: 209.90 },
  { id: 'leg-race-m-5', name: 'Legging Sport Race', category: 'Leggings', subcategory: 'Sport Race', size: 'M', color: 'Carbox', quantity: 1, price: 209.90 },
  { id: 'leg-race-uni-1', name: 'Legging Sport Race', category: 'Leggings', subcategory: 'Sport Race', size: 'P', color: 'Verde Croco', quantity: 1, price: 209.90 },
  { id: 'leg-race-uni-2', name: 'Legging Sport Race', category: 'Leggings', subcategory: 'Sport Race', size: 'M', color: 'Azul-marinho', quantity: 2, price: 209.90 },
  { id: 'leg-wave-m-1', name: 'Legging Wave', category: 'Leggings', subcategory: 'Wave', size: 'M', color: 'Amarelo-manteiga', quantity: 1, price: 219.90, isLastPiece: true, isLimitedEdition: true },
  { id: 'leg-allure-1', name: 'Legging Allure', category: 'Leggings', subcategory: 'Allure', size: 'M', color: 'Cookie', quantity: 1, price: 219.90, isLastPiece: true, isLimitedEdition: true },

  // 2. TOPS
  // TOP LIVE M
  { id: 'top-live-m-1', name: 'Top Live', category: 'Tops', subcategory: 'Live', size: 'M', color: 'Acrópole', quantity: 2, price: 129.90 },
  { id: 'top-live-m-2', name: 'Top Live', category: 'Tops', subcategory: 'Live', size: 'M', color: 'Café', quantity: 2, price: 129.90 },
  { id: 'top-live-m-3', name: 'Top Live', category: 'Tops', subcategory: 'Live', size: 'M', color: 'Preto', quantity: 2, price: 129.90 },
  { id: 'top-live-m-4', name: 'Top Live', category: 'Tops', subcategory: 'Live', size: 'M', color: 'Cookie', quantity: 2, price: 129.90 },
  { id: 'top-live-m-5', name: 'Top Live', category: 'Tops', subcategory: 'Live', size: 'M', color: 'Marinho', quantity: 1, price: 129.90 },
  { id: 'top-live-m-6', name: 'Top Live', category: 'Tops', subcategory: 'Live', size: 'M', color: 'Carbox', quantity: 1, price: 129.90 },
  { id: 'top-live-m-7', name: 'Top Live', category: 'Tops', subcategory: 'Live', size: 'M', color: 'Topázio', quantity: 1, price: 129.90 },
  { id: 'top-live-m-8', name: 'Top Live', category: 'Tops', subcategory: 'Live', size: 'M', color: 'Croco', quantity: 1, price: 129.90 },
  { id: 'top-live-m-9', name: 'Top Live', category: 'Tops', subcategory: 'Live', size: 'M', color: 'Bonsai', quantity: 1, price: 129.90 },
  { id: 'top-live-m-10', name: 'Top Live', category: 'Tops', subcategory: 'Live', size: 'M', color: 'Barolo', quantity: 1, price: 129.90 },
  { id: 'top-live-m-11', name: 'Top Live', category: 'Tops', subcategory: 'Live', size: 'M', color: 'Blue Jeans', quantity: 1, price: 129.90 },
  { id: 'top-live-m-bf-1', name: 'Top Live', category: 'Tops', subcategory: 'Live', size: 'M', color: 'Ipê Roxo', quantity: 1, price: 99.90, isBlackFriday: true },
  { id: 'top-live-m-bf-2', name: 'Top Live', category: 'Tops', subcategory: 'Live', size: 'M', color: 'Oceano', quantity: 2, price: 99.90, isBlackFriday: true },

  // TOP LIVE P e G
  { id: 'top-live-p-1', name: 'Top Live', category: 'Tops', subcategory: 'Live', size: 'P', color: 'Bonsai', quantity: 1, price: 129.90 },
  { id: 'top-live-p-2', name: 'Top Live', category: 'Tops', subcategory: 'Live', size: 'P', color: 'Croco', quantity: 1, price: 129.90 },
  { id: 'top-live-p-3', name: 'Top Live', category: 'Tops', subcategory: 'Live', size: 'P', color: 'Preto', quantity: 1, price: 129.90 },
  { id: 'top-live-p-4', name: 'Top Live', category: 'Tops', subcategory: 'Live', size: 'P', color: 'Café', quantity: 1, price: 129.90 },
  { id: 'top-live-p-5', name: 'Top Live', category: 'Tops', subcategory: 'Live', size: 'P', color: 'Acrópole', quantity: 1, price: 129.90 },
  { id: 'top-live-g-1', name: 'Top Live', category: 'Tops', subcategory: 'Live', size: 'G', color: 'Preto', quantity: 2, price: 129.90 },
  { id: 'top-live-g-bf-1', name: 'Top Live', category: 'Tops', subcategory: 'Live', size: 'G', color: 'Ipê Roxo', quantity: 1, price: 99.90, isBlackFriday: true },

  // TOP GLOSSY (P, M, G)
  { id: 'top-glossy-m-1', name: 'Top Glossy', category: 'Tops', subcategory: 'Glossy', size: 'M', color: 'Preto', quantity: 1, price: 139.90 },
  { id: 'top-glossy-m-2', name: 'Top Glossy', category: 'Tops', subcategory: 'Glossy', size: 'M', color: 'Carbox', quantity: 1, price: 139.90 },
  { id: 'top-glossy-m-3', name: 'Top Glossy', category: 'Tops', subcategory: 'Glossy', size: 'M', color: 'Castanho', quantity: 1, price: 139.90 },
  { id: 'top-glossy-p-1', name: 'Top Glossy', category: 'Tops', subcategory: 'Glossy', size: 'P', color: 'Preto', quantity: 1, price: 139.90 },
  { id: 'top-glossy-p-2', name: 'Top Glossy', category: 'Tops', subcategory: 'Glossy', size: 'P', color: 'Castanho', quantity: 1, price: 139.90 },
  { id: 'top-glossy-p-bf-1', name: 'Top Glossy', category: 'Tops', subcategory: 'Glossy', size: 'P', color: 'Preto Cirrê', quantity: 2, price: 109.90, isBlackFriday: true },
  { id: 'top-glossy-g-1', name: 'Top Glossy', category: 'Tops', subcategory: 'Glossy', size: 'G', color: 'Cookie', quantity: 1, price: 139.90 },
  { id: 'top-glossy-g-2', name: 'Top Glossy', category: 'Tops', subcategory: 'Glossy', size: 'G', color: 'Blue Jeans', quantity: 2, price: 139.90 },
  { id: 'top-glossy-g-3', name: 'Top Glossy', category: 'Tops', subcategory: 'Glossy', size: 'G', color: 'Carbox', quantity: 1, price: 139.90 },

  // TOP RACE, ALLURE, DRAPE, WAVE, MOOVE, TRAPÉZIO
  { id: 'top-race-m-1', name: 'Top Race', category: 'Tops', subcategory: 'Race', size: 'M', color: 'Carbox', quantity: 2, price: 139.90 },
  { id: 'top-race-m-2', name: 'Top Race', category: 'Tops', subcategory: 'Race', size: 'M', color: 'Marinho', quantity: 1, price: 139.90 },
  { id: 'top-race-m-3', name: 'Top Race', category: 'Tops', subcategory: 'Race', size: 'M', color: 'Azul-bebê', quantity: 1, price: 139.90 },
  { id: 'top-race-m-4', name: 'Top Race', category: 'Tops', subcategory: 'Race', size: 'M', color: 'Verde Fresh', quantity: 1, price: 139.90 },
  { id: 'top-race-m-5', name: 'Top Race', category: 'Tops', subcategory: 'Race', size: 'M', color: 'Areia', quantity: 2, price: 139.90 },
  { id: 'top-allure-m-1', name: 'Top Allure', category: 'Tops', subcategory: 'Allure', size: 'M', color: 'Preto', quantity: 1, price: 149.90 },
  { id: 'top-allure-m-2', name: 'Top Allure', category: 'Tops', subcategory: 'Allure', size: 'M', color: 'Cereja', quantity: 1, price: 149.90 },
  { id: 'top-allure-m-3', name: 'Top Allure', category: 'Tops', subcategory: 'Allure', size: 'M', color: 'Tangerina', quantity: 1, price: 149.90 },
  { id: 'top-drape-m-1', name: 'Top Drape Brisa', category: 'Tops', subcategory: 'Brisa', size: 'M', color: 'Preto', quantity: 2, price: 149.90 },
  { id: 'top-drape-m-2', name: 'Top Drape Brisa', category: 'Tops', subcategory: 'Brisa', size: 'M', color: 'Alecrim', quantity: 1, price: 149.90 },
  { id: 'top-wave-m-1', name: 'Top Wave', category: 'Tops', subcategory: 'Wave', size: 'M', color: 'Amarelo-manteiga', quantity: 1, price: 149.90, isLastPiece: true },
  { id: 'top-moove-1', name: 'Top Moove', category: 'Tops', subcategory: 'Moove', size: 'M', color: 'Preto', quantity: 1, price: 149.90, isLimitedEdition: true },
  { id: 'top-trapezio-g-1', name: 'Top Trapézio', category: 'Tops', subcategory: 'Trapézio', size: 'G', color: 'Croco', quantity: 1, price: 149.90, isLastPiece: true },

  // 3. CROPPEDS
  { id: 'crop-soft-1', name: 'Cropped Soft', category: 'Croppeds', subcategory: 'Soft', size: 'M', color: 'Cappuccino', quantity: 2, price: 139.90, isLimitedEdition: true, notes: 'Edição limitada' },
  { id: 'crop-soft-2', name: 'Cropped Soft', category: 'Croppeds', subcategory: 'Soft', size: 'M', color: 'Preto', quantity: 2, price: 139.90, isLimitedEdition: true, notes: 'Edição limitada' },

  // 4. BERMUDAS E SHORTS
  { id: 'berm-trad-p-1', name: 'Bermuda Tradicional', category: 'Bermudas e Shorts', subcategory: 'Tradicional', size: 'P', color: 'Cookie', quantity: 2, price: 159.90 },
  { id: 'berm-trad-p-2', name: 'Bermuda Tradicional', category: 'Bermudas e Shorts', subcategory: 'Tradicional', size: 'P', color: 'Croco', quantity: 2, price: 159.90 },
  { id: 'berm-trad-p-bf-1', name: 'Bermuda Tradicional', category: 'Bermudas e Shorts', subcategory: 'Tradicional', size: 'P', color: 'Preto Cirrê', quantity: 1, price: 119.90, isBlackFriday: true },
  { id: 'berm-trad-m-1', name: 'Bermuda Tradicional', category: 'Bermudas e Shorts', subcategory: 'Tradicional', size: 'M', color: 'Cookie', quantity: 1, price: 159.90 },
  { id: 'berm-trad-m-2', name: 'Bermuda Tradicional', category: 'Bermudas e Shorts', subcategory: 'Tradicional', size: 'M', color: 'Café', quantity: 1, price: 159.90 },
  { id: 'berm-trad-g-bf-1', name: 'Bermuda Tradicional', category: 'Bermudas e Shorts', subcategory: 'Tradicional', size: 'G', color: 'Preta Cirrê', quantity: 1, price: 119.90, isBlackFriday: true },
  { id: 'berm-trad-g-bf-2', name: 'Bermuda Tradicional', category: 'Bermudas e Shorts', subcategory: 'Tradicional', size: 'G', color: 'Fuschia', quantity: 1, price: 119.90, isBlackFriday: true },
  { id: 'berm-race-p-1', name: 'Bermuda Sport Race', category: 'Bermudas e Shorts', subcategory: 'Sport Race', size: 'P', color: 'Croco', quantity: 1, price: 169.90 },
  { id: 'berm-race-p-2', name: 'Bermuda Sport Race', category: 'Bermudas e Shorts', subcategory: 'Sport Race', size: 'P', color: 'Areia', quantity: 1, price: 169.90 },
  { id: 'berm-race-m-1', name: 'Bermuda Sport Race', category: 'Bermudas e Shorts', subcategory: 'Sport Race', size: 'M', color: 'Azul-bebê', quantity: 1, price: 169.90 },
  { id: 'berm-allure-1', name: 'Bermuda Allure', category: 'Bermudas e Shorts', subcategory: 'Allure', size: 'M', color: 'Tangerina', quantity: 1, price: 169.90, isLimitedEdition: true },
  { id: 'berm-allure-g-1', name: 'Bermuda Allure', category: 'Bermudas e Shorts', subcategory: 'Allure', size: 'G', color: 'Cereja', quantity: 1, price: 169.90, isLastPiece: true },
  { id: 'short-saia-1', name: 'Short-Saia Brisa', category: 'Bermudas e Shorts', subcategory: 'Brisa', size: 'M', color: 'Alecrim', quantity: 1, price: 169.90, isLastPiece: true },
  { id: 'short-pocket-p-bf', name: 'Short Pocket', category: 'Bermudas e Shorts', subcategory: 'Pocket', size: 'P', color: 'Carbox', quantity: 1, price: 129.90, isBlackFriday: true },
  { id: 'short-pocket-m-bf-1', name: 'Short Pocket', category: 'Bermudas e Shorts', subcategory: 'Pocket', size: 'M', color: 'Carbox', quantity: 1, price: 129.90, isBlackFriday: true },
  { id: 'short-pocket-m-bf-2', name: 'Short Pocket', category: 'Bermudas e Shorts', subcategory: 'Pocket', size: 'M', color: 'Preto', quantity: 1, price: 129.90, isBlackFriday: true },

  // 5. CAMISETAS & T-SHIRTS
  { id: 'tshirt-desejo-p-1', name: 'T-Shirt Desejo', category: 'Camisetas', subcategory: 'Desejo', size: 'P', color: 'Azul-marinho', quantity: 2, price: 139.90 },
  { id: 'tshirt-desejo-p-2', name: 'T-Shirt Desejo', category: 'Camisetas', subcategory: 'Desejo', size: 'P', color: 'Croco', quantity: 1, price: 139.90 },
  { id: 'tshirt-desejo-p-3', name: 'T-Shirt Desejo', category: 'Camisetas', subcategory: 'Desejo', size: 'P', color: 'Preta', quantity: 1, price: 139.90 },
  { id: 'tshirt-desejo-p-4', name: 'T-Shirt Desejo', category: 'Camisetas', subcategory: 'Desejo', size: 'P', color: 'Romance', quantity: 1, price: 139.90 },
  { id: 'tshirt-desejo-m-1', name: 'T-Shirt Desejo', category: 'Camisetas', subcategory: 'Desejo', size: 'M', color: 'Cookie', quantity: 1, price: 139.90 },
  { id: 'tshirt-desejo-m-2', name: 'T-Shirt Desejo', category: 'Camisetas', subcategory: 'Desejo', size: 'M', color: 'Areia', quantity: 1, price: 139.90 },
  { id: 'tshirt-desejo-m-3', name: 'T-Shirt Desejo', category: 'Camisetas', subcategory: 'Desejo', size: 'M', color: 'Croco', quantity: 1, price: 139.90 },
  { id: 'tshirt-desejo-m-4', name: 'T-Shirt Desejo', category: 'Camisetas', subcategory: 'Desejo', size: 'M', color: 'Preta', quantity: 1, price: 139.90 },

  // T-SHIRT RAGLAN & TELA
  { id: 'tshirt-raglan-p-1', name: 'T-Shirt Raglan', category: 'Camisetas', subcategory: 'Raglan', size: 'P', color: 'Cookie', quantity: 1, price: 139.90 },
  { id: 'tshirt-raglan-p-2', name: 'T-Shirt Raglan', category: 'Camisetas', subcategory: 'Raglan', size: 'P', color: 'Carbox', quantity: 1, price: 139.90 },
  { id: 'tshirt-raglan-p-3', name: 'T-Shirt Raglan', category: 'Camisetas', subcategory: 'Raglan', size: 'P', color: 'Bonsai', quantity: 1, price: 139.90 },
  { id: 'tshirt-raglan-p-4', name: 'T-Shirt Raglan', category: 'Camisetas', subcategory: 'Raglan', size: 'P', color: 'Azul-bebê', quantity: 1, price: 139.90 },
  { id: 'tshirt-raglan-p-5', name: 'T-Shirt Raglan', category: 'Camisetas', subcategory: 'Raglan', size: 'P', color: 'Marinho', quantity: 1, price: 139.90 },
  { id: 'tshirt-raglan-m-1', name: 'T-Shirt Raglan', category: 'Camisetas', subcategory: 'Raglan', size: 'M', color: 'Cookie', quantity: 1, price: 139.90 },
  { id: 'tshirt-raglan-m-2', name: 'T-Shirt Raglan', category: 'Camisetas', subcategory: 'Raglan', size: 'M', color: 'Azul-bebê', quantity: 1, price: 139.90 },
  { id: 'tshirt-raglan-m-3', name: 'T-Shirt Raglan', category: 'Camisetas', subcategory: 'Raglan', size: 'M', color: 'Amarelo-manteiga', quantity: 1, price: 139.90 },
  { id: 'tshirt-raglan-g-1', name: 'T-Shirt Raglan', category: 'Camisetas', subcategory: 'Raglan', size: 'G', color: 'Carbox', quantity: 1, price: 139.90 },
  { id: 'tshirt-raglan-g-2', name: 'T-Shirt Raglan', category: 'Camisetas', subcategory: 'Raglan', size: 'G', color: 'Cookie', quantity: 1, price: 139.90 },
  { id: 'tshirt-tela-p-1', name: 'T-Shirt Tela', category: 'Camisetas', subcategory: 'Tela', size: 'P', color: 'Croco', quantity: 1, price: 149.90 },
  { id: 'tshirt-tela-m-1', name: 'T-Shirt Tela', category: 'Camisetas', subcategory: 'Tela', size: 'M', color: 'Branco', quantity: 2, price: 149.90 },
  { id: 'tshirt-tela-m-2', name: 'T-Shirt Tela', category: 'Camisetas', subcategory: 'Tela', size: 'M', color: 'Blue Jeans', quantity: 1, price: 149.90 },

  // 6. REGATAS
  { id: 'regata-tela-p-1', name: 'Regata Tela', category: 'Regatas', subcategory: 'Tela', size: 'P', color: 'Preta', quantity: 2, price: 119.90 },
  { id: 'regata-tela-p-2', name: 'Regata Tela', category: 'Regatas', subcategory: 'Tela', size: 'P', color: 'Marinho', quantity: 1, price: 119.90 },
  { id: 'regata-tela-p-3', name: 'Regata Tela', category: 'Regatas', subcategory: 'Tela', size: 'P', color: 'Blue Jeans', quantity: 2, price: 119.90 },
  { id: 'regata-tela-p-4', name: 'Regata Tela', category: 'Regatas', subcategory: 'Tela', size: 'P', color: 'Topázio', quantity: 1, price: 119.90 },
  { id: 'regata-tela-m-1', name: 'Regata Tela', category: 'Regatas', subcategory: 'Tela', size: 'M', color: 'Croco', quantity: 1, price: 119.90 },
  { id: 'regata-tela-m-2', name: 'Regata Tela', category: 'Regatas', subcategory: 'Tela', size: 'M', color: 'Marinho', quantity: 1, price: 119.90 },
  { id: 'regata-tela-g-1', name: 'Regata Tela', category: 'Regatas', subcategory: 'Tela', size: 'G', color: 'Marinho', quantity: 1, price: 119.90 },
  { id: 'regata-lara-m-1', name: 'Regata Lara', category: 'Regatas', subcategory: 'Lara', size: 'M', color: 'Preta', quantity: 1, price: 129.90 },
  { id: 'regata-lara-m-2', name: 'Regata Lara', category: 'Regatas', subcategory: 'Lara', size: 'M', color: 'Quartzo', quantity: 1, price: 129.90 },
  { id: 'regata-lr-m-1', name: 'Regata LR', category: 'Regatas', subcategory: 'LR', size: 'M', color: 'Preta', quantity: 1, price: 129.90 },

  // 7. MACACÕES
  { id: 'conj-gaia-bf', name: 'Conjunto Gaia (Casaco M + Short P)', category: 'Macacões', subcategory: 'Gaia', size: 'M', color: 'Cocada', quantity: 1, price: 299.90, isBlackFriday: true, notes: 'Lote Promocional Black Friday' },
  { id: 'mac-curto-p-1', name: 'Macacão Curto', category: 'Macacões', subcategory: 'Curto', size: 'P', color: 'Preto', quantity: 1, price: 239.90 },
  { id: 'mac-curto-drape-p-1', name: 'Macacão Curto Drape', category: 'Macacões', subcategory: 'Curto Drape', size: 'P', color: 'Azul-marinho', quantity: 1, price: 249.90 },
  { id: 'mac-longo-p-1', name: 'Macacão Longo', category: 'Macacões', subcategory: 'Longo', size: 'P', color: 'Preto', quantity: 1, price: 279.90 },
  { id: 'mac-longo-p-bf-1', name: 'Macacão Longo', category: 'Macacões', subcategory: 'Longo', size: 'P', color: 'Azeitona', quantity: 1, price: 219.90, isBlackFriday: true },
  { id: 'mac-curto-m-1', name: 'Macacão Curto', category: 'Macacões', subcategory: 'Curto', size: 'M', color: 'Cookie', quantity: 1, price: 239.90 },
  { id: 'mac-curto-m-2', name: 'Macacão Curto', category: 'Macacões', subcategory: 'Curto', size: 'M', color: 'Preto', quantity: 1, price: 239.90 },
  { id: 'mac-curto-drape-m-1', name: 'Macacão Curto Drape', category: 'Macacões', subcategory: 'Curto Drape', size: 'M', color: 'Quartzo', quantity: 1, price: 249.90 },
  { id: 'mac-longo-m-1', name: 'Macacão Longo', category: 'Macacões', subcategory: 'Longo', size: 'M', color: 'Café', quantity: 1, price: 279.90 },
  { id: 'mac-longo-m-2', name: 'Macacão Longo', category: 'Macacões', subcategory: 'Longo', size: 'M', color: 'Barolo', quantity: 1, price: 279.90 },
  { id: 'mac-reg-m-1', name: 'Macacão Regata', category: 'Macacões', subcategory: 'Regata', size: 'M', color: 'Café', quantity: 1, price: 249.90 },
  { id: 'mac-reg-m-bf-1', name: 'Macacão Regata', category: 'Macacões', subcategory: 'Regata', size: 'M', color: 'Alecrim', quantity: 2, price: 199.90, isBlackFriday: true },
  { id: 'mac-reg-m-bf-2', name: 'Macacão Regata', category: 'Macacões', subcategory: 'Regata', size: 'M', color: 'Ipê Roxo', quantity: 1, price: 199.90, isBlackFriday: true },
  { id: 'tapa-bumbum-1', name: 'Tapa-Bumbum Cropped', category: 'Macacões', subcategory: 'Acessório', size: 'Único', color: 'Preto', quantity: 1, price: 79.90 },
];

export const INITIAL_CONVERSATIONS: Conversation[] = [
  {
    id: 'conv-1',
    contactId: 'ct-1',
    contactName: 'Camila Alencar',
    contactPhone: '+5534991245582',
    contactAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
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
    condicionalItems: [
      'Legging Tradicional M (Cookie)',
      'Legging Tradicional M (Café)',
      'Top Live M (Acrópole)'
    ],
    notes: 'Cliente mora no condomínio Bosque da Colina. Malinha entregue às 11h. Devolução combinada para amanhã às 14h.'
  },
  {
    id: 'conv-2',
    contactId: 'ct-2',
    contactName: 'Dra. Fernanda Resende',
    contactPhone: '+5534988412099',
    contactAvatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80',
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
    condicionalItems: [],
    notes: 'Dermatologista. Pagou via chave celular Luana. Adora peças pretas acetinadas.'
  },
  {
    id: 'conv-3',
    contactId: 'ct-3',
    contactName: 'Patrícia Borges',
    contactPhone: '+5534997631120',
    contactAvatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80',
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
    condicionalItems: [],
    notes: 'Vinda do Instagram @glossyluanaudia após o story da T-Shirt Desejo.'
  },
  {
    id: 'conv-4',
    contactId: 'ct-4',
    contactName: 'Juliana Castro',
    contactPhone: '+5534992338814',
    contactAvatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
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
    condicionalItems: [],
    notes: 'Quer experimentar para usar na academia e em evento de corrida no final de semana.'
  },
  {
    id: 'conv-5',
    contactId: 'ct-5',
    contactName: 'Renata Mendonça (Personal)',
    contactPhone: '+5534996554312',
    contactAvatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80',
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
    condicionalItems: [],
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
      content: 'Bom dia Camila, maravilhosa! Tenho sim, separei 2 peças no tamanho M novinhas em estoque! ✨',
      status: 'read',
      createdAt: '10:18'
    },
    {
      id: 'm1-3',
      conversationId: 'conv-1',
      senderType: 'agent',
      senderName: 'Luana Frias',
      content: 'Posso montar uma malinha condicional com a Cookie, a Café e o Top Live Acrópole para você experimentar hoje na sua casa no Morada da Colina sem compromisso!',
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
      content: '🔒 NOTA INTERNA VÉRTICE: Malinha condicional #COND-04 montada e despachada pelo motoboy às 11h. Itens: Legging Cookie M (R$ 189,90), Legging Café M (R$ 189,90) e Top Live M Acrópole (R$ 129,90). Total condicional: R$ 509,70. Recolhimento agendado para amanhã às 14h.',
      isInternalNote: true,
      status: 'read',
      createdAt: '11:05'
    },
    {
      id: 'm1-6',
      conversationId: 'conv-1',
      senderType: 'agent',
      senderName: 'Luana Frias',
      content: 'Áudio explicativo sobre os cuidados na lavagem das peças Glossy.',
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
      content: 'Dra. Fernanda, zero transparência! A poliamida com elastano cirrê da Glossy tem gramatura pesada e cós anatômico duplo que segura tudo sem apertar. Pode agachar com segurança absoluta!',
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
      content: '🔒 NOTA INTERNA VÉRTICE: Venda confirmada R$ 199,90 via Pix. Baixa realizada no estoque Uberlândia (Item: leg-trad-p-10). Nota fiscal enviada.',
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
      content: 'Juliana, ele é uma verdadeira joia! Esculpe o corpo inteiro e o decote é maravilhoso. Tenho 1 unidade exclusiva no tamanho M.',
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
    content: 'Segue a nossa chave Pix oficial da Glossy By Luana Frias:\n\n📱 Chave Celular: 34993002424\nFavorecido: Luana Frias\nBanco: Nubank / Inter\n\nAssim que fizer o pagamento, por favor envie o comprovante aqui para liberarmos seu pedido imediatamente! ✨'
  },
  {
    id: 'qr-2',
    shortcut: '/condicional',
    title: 'Regras da Malinha Condicional',
    content: 'Como funciona nossa Malinha Condicional em Uberlândia: 🛍️\n\n1. Você escolhe até 4 peças do nosso estoque;\n2. Enviamos via entregador direto no seu endereço sem taxa em compras acima de R$ 250;\n3. Você experimenta no conforto do seu quarto com suas roupas e espelho;\n4. Fica 24 horas para decidir e o motoboy retira o que não for ficar.\n\nQual o seu bairro e tamanho para eu separar?'
  },
  {
    id: 'qr-3',
    shortcut: '/tabela-tamanhos',
    title: 'Grade e Tabela de Medidas Glossy',
    content: 'Nossa grade de tamanhos é pensada para modelar com conforto:\n\n• PP: Manequim 34 / Busto 78-84cm / Quadril 86-92cm\n• P: Manequim 36-38 / Busto 84-90cm / Quadril 92-98cm\n• M: Manequim 40-42 / Busto 90-98cm / Quadril 98-106cm\n• G: Manequim 44-46 / Busto 98-106cm / Quadril 106-114cm\n• GG: Manequim 48+ / Busto 106-114cm / Quadril 114-122cm\n\nO tecido tem compressão inteligente e não deforma!'
  },
  {
    id: 'qr-4',
    shortcut: '/catalogo',
    title: 'Link dos Catálogos Digitais',
    content: 'Confira todos os nossos catálogos completos com fotos de alta qualidade e detalhes das peças:\n\n📂 Catálogos Oficiais Glossy:\nhttps://linktr.ee/glossyluanaudia\n\nOu me conta qual peça você procura que eu te mando as fotos agora!'
  },
  {
    id: 'qr-5',
    shortcut: '/grupovip',
    title: 'Convite Grupo VIP Select',
    content: 'Você já faz parte do nosso Grupo VIP Exclusivo no WhatsApp? 🦩\n\nLá você recebe em primeira mão:\n✔ Spoilers de novas coleções\n✔ Avisos de reposição de estoque\n✔ Enquetes para escolher peças\n✔ Promoções relâmpago exclusivas\n\nÉ um grupo 100% silencioso (só eu posto):\n👉 Entre agora: https://chat.whatsapp.com/JotyAslBsLJKfqfqAJe5wG'
  }
];

export const INITIAL_SCHEDULED_POSTS: ScheduledPost[] = [
  {
    id: 'sp-1',
    title: 'Legging Tradicional Cookie - Alta Performance & Toque Acetinado',
    format: 'comercial',
    productName: 'Legging Tradicional',
    color: 'Cookie',
    price: 189.90,
    caption: `A cor mais desejada da estação acabou de chegar para pronta-entrega em Uberlândia! ✨🤎

A nossa Legging Tradicional na tonalidade Cookie une a compressão perfeita que modela o corpo com cós anatômico duplo que NÃO enrola durante o treino. Zero transparência e toque aveludado único da poliamida premium Glossy!

Disponível nos tamanhos P e M com entrega rápida ou malinha condicional para você provar no conforto da sua casa! 🛍️

📲 Envie uma mensagem no direct ou clique no link da bio para garantir a sua antes que esgote!`,
    hashtags: ['#GlossyUberlandia', '#ModaFitness', '#LookDeTreino', '#UberlandiaFitness', '#LeggingCookie', '#RevendedoraGlossy', '#GlossyByLuanaFrias'],
    imageUrl: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&auto=format&fit=crop&q=80',
    scheduledDate: '2026-10-31',
    scheduledTime: '11:30',
    status: 'agendado',
    channels: {
      instagram: true,
      facebook: true,
      whatsappVip: true
    }
  },
  {
    id: 'sp-2',
    title: 'Top Live + Legging Wave: O Combo Perfeito para Treino Intenso',
    format: 'lifestyle',
    productName: 'Conjunto Top Live & Wave',
    color: 'Amarelo Manteiga & Acrópole',
    price: 349.80,
    caption: `Treinar com um look que te abraça muda completamente a energia do dia! 💛⚡

Você sabia que o tecido Glossy foi desenvolvido com tecnologia de termorregulação e proteção UV50+? Ele mantém a respirabilidade nos treinos mais intensos enquanto o suporte do Top Live garante segurança máxima sem machucar os ombros.

Conforto absoluto do treino ao café da tarde. Qual a sua cor favorita para treinar hoje? Conta pra mim nos comentários! 👇✨`,
    hashtags: ['#FitnessLifestyle', '#AutoEstimaFeminina', '#LookFitness', '#MulheresQueTreinam', '#GlossyUberlandia', '#TreinoComEstilo'],
    imageUrl: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=800&auto=format&fit=crop&q=80',
    scheduledDate: '2026-11-01',
    scheduledTime: '18:45',
    status: 'agendado',
    channels: {
      instagram: true,
      facebook: true,
      whatsappVip: true
    }
  },
  {
    id: 'sp-3',
    title: 'Macacão Longo Barolo: Detalhes, Costura e Ajuste Escultural',
    format: 'apresentacao',
    productName: 'Macacão Longo',
    color: 'Barolo',
    price: 279.90,
    caption: `A sofisticação em uma única peça: Macacão Longo Glossy na icônica cor Barolo. 🍷🖤

Observe cada acabamento:
✔ Costura reforçada plana que não marca e não atrita na pele
✔ Decote traseiro anatômico que valoriza as costas com sustentação
✔ Tecido cirrê acetinado que esculpe a silhueta com elasticidade multidirecional

Peça única e exclusiva disponível para você em Uberlândia. Quer ver como fica no corpo? Manda uma mensagem no WhatsApp comercial e agendamos seu condicional!`,
    hashtags: ['#MacacaoFitness', '#GlossyVibes', '#ModaAcademia', '#Uberlandia', '#FitnessChic', '#BaroloGlossy'],
    imageUrl: 'https://images.unsplash.com/photo-1483721074573-58630b3ee08b?w=800&auto=format&fit=crop&q=80',
    scheduledDate: '2026-11-02',
    scheduledTime: '12:00',
    status: 'aguardando_aprovacao',
    channels: {
      instagram: true,
      facebook: false,
      whatsappVip: true
    }
  }
];

export const INITIAL_VIP_POSTS: VipGroupPost[] = [
  {
    id: 'vip-1',
    type: 'spoiler',
    title: 'Spoiler Exclusivo: Nova Cor Cookie Chegou!',
    text: `🚨😍 MENINAS, ELA CHEGOU!

A cor Cookie é aquele tom neutro chic que combina com tudo e disfarça qualquer imperfeição.
Separamos pouquíssimas unidades para o estoque de Uberlândia!

Quem quiser reservar antes de postarmos no feed oficial do Instagram, me chama no privado! 👇🏃‍♀️`,
    mediaType: 'image',
    targetGroup: 'VIP GLOSSY - LUANA FRIAS (OFICIAL)',
    scheduledFor: 'Hoje às 17:00',
    status: 'pronto'
  },
  {
    id: 'vip-2',
    type: 'enquete',
    title: 'Enquete de Preferência de Cores para o Próximo Pedido',
    text: `✨ ENQUETE EXCLUSIVA VIP SELECT ✨
Meninas, estamos fechando o próximo lote com a fábrica em São Paulo! 
Qual dessas tonalidades NÃO pode faltar no seu guarda-roupa fitness?`,
    mediaType: 'poll',
    pollOptions: ['Cookie & Café (Tons Quentes)', 'Barolo & Vinho (Chic)', 'Croco & Bonsai (Verdes)', 'Preto Cirrê (Clássico Acetinado)'],
    targetGroup: 'VIP GLOSSY - LUANA FRIAS (OFICIAL)',
    scheduledFor: 'Amanhã às 10:00',
    status: 'pronto'
  },
  {
    id: 'vip-3',
    type: 'lancamento',
    title: 'Aviso de Abertura de Condicionais da Semana',
    text: `🛍️📦 MALINHAS CONDICIONAIS LIBERADAS!

Meninas de Uberlândia! A agenda de malinhas para Morada da Colina, Granja Marileusa, Santa Mônica e Karaíba está aberta para quinta e sexta.

Leve até 4 peças no seu tamanho para experimentar em casa com calma!
Valores especiais à vista no Pix ou em até 3x no cartão.

Chama a Lu no privado para reservar seu horário: (34) 99300-2424! 💖`,
    mediaType: 'image',
    targetGroup: 'VIP GLOSSY - LUANA FRIAS (OFICIAL)',
    scheduledFor: 'Quarta às 14:00',
    status: 'pronto'
  }
];

export const LINKTREE_CONFIG = {
  title: 'GLOSSY BY LUANA FRIAS',
  subtitle: 'Revendedora Oficial Glossy em Uberlândia - MG | Peças Exclusivas & Malinha Condicional',
  avatarUrl: '/luana.png',
  bio: 'Seja bem-vinda ao atendimento exclusivo Glossy By Luana Frias! Escolha uma opção abaixo:',
  buttons: [
    {
      id: 'btn-1',
      title: 'COMPRE AQUI / WHATSAPP',
      subtitle: 'Fale direto com a Luana para pronta-entrega ou condicional',
      url: 'https://wa.me/5534993002424?text=Ol%C3%A1%20Luana!%20Vim%20pelo%20Linktree%20e%20gostaria%20de%20ver%20as%20pe%C3%A7as%20dispon%C3%ADveis%20no%20meu%20tamanho.',
      badge: 'Atendimento Rápido',
      icon: 'whatsapp',
      bgColor: 'bg-emerald-600',
      active: true
    },
    {
      id: 'btn-2',
      title: 'ENTRE NO GRUPO VIP SELECT',
      subtitle: 'Receba spoilers, reposições antecipadas e enquetes exclusivas',
      url: 'https://chat.whatsapp.com/JotyAslBsLJKfqfqAJe5wG',
      badge: 'Silencioso',
      icon: 'sparkles',
      bgColor: 'bg-rose-500',
      active: true
    },
    {
      id: 'btn-3',
      title: 'CATÁLOGOS DIGITAIS GLOSSY 2026',
      subtitle: 'Acesse o acervo completo de fotos em alta resolução no Google Drive',
      url: 'https://drive.google.com/drive/folders/1LR8hW--sAJ76wngBoYibTNy9lPReYEbV',
      badge: 'Coleção Completa',
      icon: 'drive',
      bgColor: 'bg-amber-600',
      active: true
    },
    {
      id: 'btn-4',
      title: 'ONDE NOS ENCONTRAR (UBERLÂNDIA - MG)',
      subtitle: 'Atendimento em domicílio nos principais condomínios e bairros de UDI',
      url: 'https://wa.me/5534993002424?text=Ol%C3%A1%20Luana!%20Gostaria%20de%20saber%20se%20voc%C3%AA%20atende%20no%20meu%20bairro.',
      badge: 'Condicional VIP',
      icon: 'map-pin',
      bgColor: 'bg-zinc-800',
      active: true
    }
  ]
};

export const CATALOG_LINKS = [
  { name: 'Catálogo Glossy - Cores Permanentes', size: '72 MB', url: 'https://drive.google.com/drive/folders/1LR8hW--sAJ76wngBoYibTNy9lPReYEbV' },
  { name: 'Catálogo Coleção Sport 2026', size: '135 MB', url: 'https://drive.google.com/drive/folders/1LR8hW--sAJ76wngBoYibTNy9lPReYEbV' },
  { name: 'Catálogo Macacões Glossy', size: '43 MB', url: 'https://drive.google.com/drive/folders/1LR8hW--sAJ76wngBoYibTNy9lPReYEbV' },
  { name: 'Catálogo Regata Tela & Desejo', size: '56 MB', url: 'https://drive.google.com/drive/folders/1LR8hW--sAJ76wngBoYibTNy9lPReYEbV' },
  { name: 'Catálogo Raglan & Cores Novas', size: '9 MB', url: 'https://drive.google.com/drive/folders/1LR8hW--sAJ76wngBoYibTNy9lPReYEbV' },
  { name: 'Catálogo Linha Brisa (Material Exclusivo)', size: '9 MB', url: 'https://drive.google.com/drive/folders/1LR8hW--sAJ76wngBoYibTNy9lPReYEbV' },
  { name: 'Inventário Estoque Físico Uberlândia (PDF 7 Páginas)', size: '14 KB', url: '#' },
];
