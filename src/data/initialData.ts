import { InventoryItem, Lead, ContentPost } from '../types';

export const INITIAL_INVENTORY: InventoryItem[] = [
  // 1. LEGGINGS TRADICIONAL P
  { id: 'leg-trad-p-1', name: 'Legging Tradicional', category: 'Leggings', subcategory: 'Tradicional', size: 'P', color: 'Croco Verde', quantity: 1, price: 189.90 },
  { id: 'leg-trad-p-2', name: 'Legging Tradicional', category: 'Leggings', subcategory: 'Tradicional', size: 'P', color: 'Acrópole', quantity: 1, price: 189.90 },
  { id: 'leg-trad-p-3', name: 'Legging Tradicional', category: 'Leggings', subcategory: 'Tradicional', size: 'P', color: 'Cookie', quantity: 2, price: 189.90 },
  { id: 'leg-trad-p-4', name: 'Legging Tradicional', category: 'Leggings', subcategory: 'Tradicional', size: 'P', color: 'Café', quantity: 1, price: 189.90 },
  { id: 'leg-trad-p-5', name: 'Legging Tradicional', category: 'Leggings', subcategory: 'Tradicional', size: 'P', color: 'Barolo', quantity: 1, price: 189.90 },
  { id: 'leg-trad-p-6', name: 'Legging Tradicional', category: 'Leggings', subcategory: 'Tradicional', size: 'P', color: 'Azul-marinho', quantity: 1, price: 189.90 },
  { id: 'leg-trad-p-7', name: 'Legging Tradicional', category: 'Leggings', subcategory: 'Tradicional', size: 'P', color: 'Castanho', quantity: 1, price: 189.90 },
  { id: 'leg-trad-p-8', name: 'Legging Tradicional', category: 'Leggings', subcategory: 'Tradicional', size: 'P', color: 'Topázio', quantity: 1, price: 189.90 },
  { id: 'leg-trad-p-9', name: 'Legging Tradicional', category: 'Leggings', subcategory: 'Tradicional', size: 'P', color: 'Bonsai', quantity: 1, price: 189.90 },
  { id: 'leg-trad-p-10', name: 'Legging Tradicional', category: 'Leggings', subcategory: 'Tradicional', size: 'P', color: 'Preta Cirrê', quantity: 1, price: 199.90 },
  // Black Friday Leggings P
  { id: 'leg-trad-p-bf-1', name: 'Legging Tradicional', category: 'Leggings', subcategory: 'Tradicional', size: 'P', color: 'Oceano', quantity: 2, price: 149.90, isBlackFriday: true, notes: 'Lote Black Friday' },
  { id: 'leg-trad-p-bf-2', name: 'Legging Tradicional', category: 'Leggings', subcategory: 'Tradicional', size: 'P', color: 'Orquídea', quantity: 1, price: 149.90, isBlackFriday: true, notes: 'Lote Black Friday' },

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
  { id: 'leg-trad-m-bf-1', name: 'Legging Tradicional', category: 'Leggings', subcategory: 'Tradicional', size: 'M', color: 'Fuschia', quantity: 2, price: 149.90, isBlackFriday: true, notes: 'Lote Black Friday' },
  { id: 'leg-trad-m-bf-2', name: 'Legging Tradicional', category: 'Leggings', subcategory: 'Tradicional', size: 'M', color: 'Ipê Roxo', quantity: 1, price: 149.90, isBlackFriday: true, notes: 'Lote Black Friday' },

  // LEGGINGS G, GG, PP
  { id: 'leg-trad-g-bf-1', name: 'Legging Tradicional', category: 'Leggings', subcategory: 'Tradicional', size: 'G', color: 'Fuschia', quantity: 1, price: 149.90, isBlackFriday: true, notes: 'Lote Black Friday' },
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
  { id: 'crop-soft-1', name: 'Cropped Soft', category: 'Croppeds', subcategory: 'Soft', size: 'M', color: 'Cappuccino', quantity: 2, price: 139.90, isLimitedEdition: true, notes: 'Edição limitada / BF' },
  { id: 'crop-soft-2', name: 'Cropped Soft', category: 'Croppeds', subcategory: 'Soft', size: 'M', color: 'Preto', quantity: 2, price: 139.90, isLimitedEdition: true, notes: 'Edição limitada / BF' },

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

  // 5. T-SHIRTS
  { id: 'tshirt-desejo-p-1', name: 'T-Shirt Desejo', category: 'T-Shirts', subcategory: 'Desejo', size: 'P', color: 'Azul-marinho', quantity: 2, price: 139.90 },
  { id: 'tshirt-desejo-p-2', name: 'T-Shirt Desejo', category: 'T-Shirts', subcategory: 'Desejo', size: 'P', color: 'Croco', quantity: 1, price: 139.90 },
  { id: 'tshirt-desejo-p-3', name: 'T-Shirt Desejo', category: 'T-Shirts', subcategory: 'Desejo', size: 'P', color: 'Preta', quantity: 1, price: 139.90 },
  { id: 'tshirt-desejo-p-4', name: 'T-Shirt Desejo', category: 'T-Shirts', subcategory: 'Desejo', size: 'P', color: 'Romance', quantity: 1, price: 139.90 },
  { id: 'tshirt-desejo-m-1', name: 'T-Shirt Desejo', category: 'T-Shirts', subcategory: 'Desejo', size: 'M', color: 'Cookie', quantity: 1, price: 139.90 },
  { id: 'tshirt-desejo-m-2', name: 'T-Shirt Desejo', category: 'T-Shirts', subcategory: 'Desejo', size: 'M', color: 'Areia', quantity: 1, price: 139.90 },
  { id: 'tshirt-desejo-m-3', name: 'T-Shirt Desejo', category: 'T-Shirts', subcategory: 'Desejo', size: 'M', color: 'Croco', quantity: 1, price: 139.90 },
  { id: 'tshirt-desejo-m-4', name: 'T-Shirt Desejo', category: 'T-Shirts', subcategory: 'Desejo', size: 'M', color: 'Preta', quantity: 1, price: 139.90 },

  // T-SHIRT RAGLAN & TELA
  { id: 'tshirt-raglan-p-1', name: 'T-Shirt Raglan', category: 'T-Shirts', subcategory: 'Raglan', size: 'P', color: 'Cookie', quantity: 1, price: 139.90 },
  { id: 'tshirt-raglan-p-2', name: 'T-Shirt Raglan', category: 'T-Shirts', subcategory: 'Raglan', size: 'P', color: 'Carbox', quantity: 1, price: 139.90 },
  { id: 'tshirt-raglan-p-3', name: 'T-Shirt Raglan', category: 'T-Shirts', subcategory: 'Raglan', size: 'P', color: 'Bonsai', quantity: 1, price: 139.90 },
  { id: 'tshirt-raglan-p-4', name: 'T-Shirt Raglan', category: 'T-Shirts', subcategory: 'Raglan', size: 'P', color: 'Azul-bebê', quantity: 1, price: 139.90 },
  { id: 'tshirt-raglan-p-5', name: 'T-Shirt Raglan', category: 'T-Shirts', subcategory: 'Raglan', size: 'P', color: 'Marinho', quantity: 1, price: 139.90 },
  { id: 'tshirt-raglan-m-1', name: 'T-Shirt Raglan', category: 'T-Shirts', subcategory: 'Raglan', size: 'M', color: 'Cookie', quantity: 1, price: 139.90 },
  { id: 'tshirt-raglan-m-2', name: 'T-Shirt Raglan', category: 'T-Shirts', subcategory: 'Raglan', size: 'M', color: 'Azul-bebê', quantity: 1, price: 139.90 },
  { id: 'tshirt-raglan-m-3', name: 'T-Shirt Raglan', category: 'T-Shirts', subcategory: 'Raglan', size: 'M', color: 'Amarelo-manteiga', quantity: 1, price: 139.90 },
  { id: 'tshirt-raglan-g-1', name: 'T-Shirt Raglan', category: 'T-Shirts', subcategory: 'Raglan', size: 'G', color: 'Carbox', quantity: 1, price: 139.90 },
  { id: 'tshirt-raglan-g-2', name: 'T-Shirt Raglan', category: 'T-Shirts', subcategory: 'Raglan', size: 'G', color: 'Cookie', quantity: 1, price: 139.90 },
  { id: 'tshirt-tela-p-1', name: 'T-Shirt Tela', category: 'T-Shirts', subcategory: 'Tela', size: 'P', color: 'Croco', quantity: 1, price: 149.90 },
  { id: 'tshirt-tela-m-1', name: 'T-Shirt Tela', category: 'T-Shirts', subcategory: 'Tela', size: 'M', color: 'Branco', quantity: 2, price: 149.90 },
  { id: 'tshirt-tela-m-2', name: 'T-Shirt Tela', category: 'T-Shirts', subcategory: 'Tela', size: 'M', color: 'Blue Jeans', quantity: 1, price: 149.90 },

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

  // 7. MACACÕES E CONJUNTOS
  { id: 'conj-gaia-bf', name: 'Conjunto Gaia (Casaco M + Short P)', category: 'Macacões e Conjuntos', subcategory: 'Gaia', size: 'M', color: 'Cocada', quantity: 1, price: 299.90, isBlackFriday: true, notes: 'Lote Black Friday' },
  { id: 'mac-curto-p-1', name: 'Macacão Curto', category: 'Macacões e Conjuntos', subcategory: 'Curto', size: 'P', color: 'Preto', quantity: 1, price: 239.90 },
  { id: 'mac-curto-drape-p-1', name: 'Macacão Curto Drape', category: 'Macacões e Conjuntos', subcategory: 'Curto Drape', size: 'P', color: 'Azul-marinho', quantity: 1, price: 249.90 },
  { id: 'mac-longo-p-1', name: 'Macacão Longo', category: 'Macacões e Conjuntos', subcategory: 'Longo', size: 'P', color: 'Preto', quantity: 1, price: 279.90 },
  { id: 'mac-longo-p-bf-1', name: 'Macacão Longo', category: 'Macacões e Conjuntos', subcategory: 'Longo', size: 'P', color: 'Azeitona', quantity: 1, price: 219.90, isBlackFriday: true },
  { id: 'mac-curto-m-1', name: 'Macacão Curto', category: 'Macacões e Conjuntos', subcategory: 'Curto', size: 'M', color: 'Cookie', quantity: 1, price: 239.90 },
  { id: 'mac-curto-m-2', name: 'Macacão Curto', category: 'Macacões e Conjuntos', subcategory: 'Curto', size: 'M', color: 'Preto', quantity: 1, price: 239.90 },
  { id: 'mac-curto-drape-m-1', name: 'Macacão Curto Drape', category: 'Macacões e Conjuntos', subcategory: 'Curto Drape', size: 'M', color: 'Quartzo', quantity: 1, price: 249.90 },
  { id: 'mac-longo-m-1', name: 'Macacão Longo', category: 'Macacões e Conjuntos', subcategory: 'Longo', size: 'M', color: 'Café', quantity: 1, price: 279.90 },
  { id: 'mac-longo-m-2', name: 'Macacão Longo', category: 'Macacões e Conjuntos', subcategory: 'Longo', size: 'M', color: 'Barolo', quantity: 1, price: 279.90 },
  { id: 'mac-reg-m-1', name: 'Macacão Regata', category: 'Macacões e Conjuntos', subcategory: 'Regata', size: 'M', color: 'Café', quantity: 1, price: 249.90 },
  { id: 'mac-reg-m-bf-1', name: 'Macacão Regata', category: 'Macacões e Conjuntos', subcategory: 'Regata', size: 'M', color: 'Alecrim', quantity: 2, price: 199.90, isBlackFriday: true },
  { id: 'mac-reg-m-bf-2', name: 'Macacão Regata', category: 'Macacões e Conjuntos', subcategory: 'Regata', size: 'M', color: 'Ipê Roxo', quantity: 1, price: 199.90, isBlackFriday: true },
  { id: 'tapa-bumbum-1', name: 'Tapa-Bumbum Cropped', category: 'Macacões e Conjuntos', subcategory: 'Acessório', size: 'Único', color: 'Preto', quantity: 1, price: 79.90 },
];

export const INITIAL_LEADS: Lead[] = [
  {
    id: 'lead-1',
    name: 'Camila Alencar',
    phone: '(34) 99124-5582',
    neighborhood: 'Morada da Colina',
    city: 'Uberlândia',
    sizeInterest: 'M',
    status: 'condicional_enviado',
    notes: 'Enviada malinha condicional com 2 Leggings M (Cookie e Café) e 1 Top Live M Acrópole.',
    lastContact: 'Hoje às 15:40',
    cartItems: ['Legging Tradicional M (Cookie)', 'Top Live M (Acrópole)'],
    totalValue: 319.80,
  },
  {
    id: 'lead-2',
    name: 'Dra. Fernanda Resende',
    phone: '(34) 98841-2099',
    neighborhood: 'Granja Marileusa',
    city: 'Uberlândia',
    sizeInterest: 'P',
    status: 'venda_concluida',
    notes: 'Cliente fiel da clínica. Pagamento via Pix aprovado. Levou Legging Tradicional P Preta Cirrê.',
    lastContact: 'Ontem às 18:20',
    cartItems: ['Legging Tradicional P (Preta Cirrê)'],
    totalValue: 199.90,
  },
  {
    id: 'lead-3',
    name: 'Patrícia Borges',
    phone: '(34) 99763-1120',
    neighborhood: 'Santa Mônica',
    city: 'Uberlândia',
    sizeInterest: 'P',
    status: 'em_atendimento',
    notes: 'Perguntou sobre as cores disponíveis da T-Shirt Desejo no tamanho P.',
    lastContact: 'Hoje às 11:15',
    cartItems: ['T-Shirt Desejo P (Azul-marinho)'],
    totalValue: 139.90,
  },
  {
    id: 'lead-4',
    name: 'Juliana Castro',
    phone: '(34) 99233-8814',
    neighborhood: 'Jardim Karaíba',
    city: 'Uberlândia',
    sizeInterest: 'G',
    status: 'novo',
    notes: 'Entrou pelo link da bio do Instagram querendo saber peças da Black Friday tamanho G.',
    lastContact: 'Hoje às 09:05',
    cartItems: ['Legging Tradicional G (Fuschia BF)'],
    totalValue: 149.90,
  },
];

export const INITIAL_POSTS: ContentPost[] = [
  {
    id: 'post-1',
    title: 'Legging Tradicional Cookie - Alta Performance & Toque Acetinado',
    type: 'comercial',
    productName: 'Legging Tradicional Cookie',
    productColor: 'Cookie',
    price: 189.90,
    caption: `A cor mais desejada da estação acabou de chegar para pronta-entrega em Uberlândia! ✨🤎

A nossa Legging Tradicional na tonalidade Cookie une a compressão perfeita que modela o corpo com cós anatômico duplo que NÃO enrola durante o treino. Zero transparência e toque aveludado único da poliamida premium Glossy!

Disponível nos tamanhos P e M com entrega rápida ou condicional para você provar no conforto da sua casa! 🛍️

📲 Envie uma mensagem no direct ou clique no link da bio para garantir a sua antes que esgote!`,
    hashtags: ['#GlossyUberlandia', '#ModaFitness', '#LookDeTreino', '#UberlandiaFitness', '#LeggingCookie', '#RevendedoraGlossy'],
    status: 'pronto',
    syncToVip: true,
  },
  {
    id: 'post-2',
    title: 'Top Live + Legging Wave: O Combo Perfeito para seu Treino de Perna',
    type: 'lifestyle',
    productName: 'Conjunto Wave & Live',
    productColor: 'Amarelo Manteiga / Acrópole',
    caption: `Treinar com um look que te abraça muda completamente a energia do dia! 💛⚡

Você sabia que o tecido Glossy foi desenvolvido com tecnologia de termorregulação e proteção UV50+? Ele mantém a respirabilidade nos treinos mais intensos enquanto o suporte do Top Live garante segurança máxima sem machucar os ombros.

Conforto absoluto do treino ao café da tarde. Qual a sua cor favorita para treinar hoje? Conta pra mim nos comentários! 👇✨`,
    hashtags: ['#FitnessLifestyle', '#AutoEstimaFeminina', '#LookFitness', '#MulheresQueTreinam', '#GlossyUberlandia', '#TreinoComEstilo'],
    status: 'pronto',
    syncToVip: true,
  },
  {
    id: 'post-3',
    title: 'Macacão Longo Barolo: Detalhes, Costura e Ajuste Escultural',
    type: 'apresentacao',
    productName: 'Macacão Longo',
    productColor: 'Barolo',
    price: 279.90,
    caption: `A sofisticação em uma única peça: Macacão Longo Glossy na icônica cor Barolo. 🍷🖤

Observe cada acabamento:
✔ Costura reforçada plana que não marca e não atrita na pele
✔ Decote traseiro anatômico que valoriza as costas com sustentação
✔ Tecido cirrê acetinado que esculpe a silhueta com elasticidade multidirecional

Peça única e exclusiva disponível para você em Uberlândia. Quer ver como fica no corpo? Manda uma mensagem no WhatsApp comercial e agendamos seu condicional!`,
    hashtags: ['#MacacaoFitness', '#GlossyVibes', '#ModaAcademia', '#Uberlandia', '#FitnessChic', '#BaroloGlossy'],
    status: 'pronto',
    syncToVip: false,
  },
];

export const CATALOG_LINKS = [
  { name: 'Catálogo Glossy - Cores Permanentes', size: '72 MB', url: 'https://drive.google.com/drive/folders/1LR8hW--sAJ76wngBoYibTNy9lPReYEbV' },
  { name: 'Catálogo Coleção Sport 2026', size: '135 MB', url: 'https://drive.google.com/drive/folders/1LR8hW--sAJ76wngBoYibTNy9lPReYEbV' },
  { name: 'Catálogo Macacões Glossy', size: '43 MB', url: 'https://drive.google.com/drive/folders/1LR8hW--sAJ76wngBoYibTNy9lPReYEbV' },
  { name: 'Catálogo Regata Tela & Desejo', size: '56 MB', url: 'https://drive.google.com/drive/folders/1LR8hW--sAJ76wngBoYibTNy9lPReYEbV' },
  { name: 'Catálogo Raglan & Cores Novas', size: '9 MB', url: 'https://drive.google.com/drive/folders/1LR8hW--sAJ76wngBoYibTNy9lPReYEbV' },
  { name: 'Catálogo Linha Brisa (Material Exclusivo)', size: '9 MB', url: 'https://drive.google.com/drive/folders/1LR8hW--sAJ76wngBoYibTNy9lPReYEbV' },
  { name: 'Inventário Estoque Físico Uberlândia (PDF)', size: '14 KB', url: '#' },
];
