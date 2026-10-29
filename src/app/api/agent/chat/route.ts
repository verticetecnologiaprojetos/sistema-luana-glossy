import { NextResponse } from 'next/server';
import { GLOSSY_AGENT_SYSTEM_PROMPT } from '@/lib/agentPrompt';
import { INITIAL_INVENTORY } from '@/data/initialData';

export async function POST(req: Request) {
  try {
    const { message, history = [], apiKey, model = 'google/gemini-2.0-flash-001' } = await req.json();

    if (!message || typeof message !== 'string') {
      return NextResponse.json({ error: 'Mensagem inválida.' }, { status: 400 });
    }

    // Se o cliente forneceu uma chave OpenRouter ativa
    if (apiKey && apiKey.trim().startsWith('sk-or-')) {
      try {
        const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${apiKey.trim()}`,
            'Content-Type': 'application/json',
            'HTTP-Referer': 'https://sistema-luana-glossy.vercel.app',
            'X-Title': 'Sistema Luana Glossy',
          },
          body: JSON.stringify({
            model: model,
            messages: [
              { role: 'system', content: GLOSSY_AGENT_SYSTEM_PROMPT },
              ...history.map((h: { sender: string; text: string }) => ({
                role: h.sender === 'cliente' ? 'user' : 'assistant',
                content: h.text,
              })),
              { role: 'user', content: message },
            ],
            temperature: 0.7,
            max_tokens: 600,
          }),
        });

        if (response.ok) {
          const data = await response.json();
          const replyText = data.choices?.[0]?.message?.content || 'Olá! Como posso ajudar você hoje?';
          const isHandoff = replyText.includes('[CARD DE TRANSBORDO');
          return NextResponse.json({ reply: replyText, isHandoff, source: 'openrouter' });
        }
      } catch (err) {
        console.warn('Fallback para motor local devido a falha no OpenRouter:', err);
      }
    }

    // Motor Inteligente Local (Simulação de Alta Fidelidade com Consulta Real ao Estoque)
    const lower = message.toLowerCase();
    let reply = '';
    let isHandoff = false;
    let handoffData: Record<string, string> | undefined = undefined;

    // Detecção de tamanho
    const detectedSize = lower.match(/\b(pp|p|m|g|gg|único|unico)\b/i)?.[0]?.toUpperCase();

    if (lower.includes('oi') || lower.includes('olá') || lower.includes('ola') || lower.includes('bom dia') || lower.includes('boa tarde') || lower.includes('boa noite')) {
      reply = `Oii! Seja muito bem-vinda à Glossy Uberlândia! ✨🤎 
Eu sou a Glossy, assistente virtual da Luana (@glossyluanaudia).

Trabalhamos com roupas fitness premium que modelam o corpo com conforto surreal: cós alto anatômico que NÃO enrola e tecido acetinado com ZERO transparência!

Me conta, qual peça você está procurando hoje (legging, top, conjunto ou t-shirt) e qual tamanho você costuma vestir (P, M, G)? 🛍️`;
    } else if (detectedSize || lower.includes('tamanho') || lower.includes('legging') || lower.includes('top') || lower.includes('estoque') || lower.includes('tem')) {
      const sizeToSearch = detectedSize || 'M';
      const availableLeggings = INITIAL_INVENTORY.filter(i => i.category === 'Leggings' && i.size === sizeToSearch);
      const availableTops = INITIAL_INVENTORY.filter(i => i.category === 'Tops' && i.size === sizeToSearch);
      const bfItems = INITIAL_INVENTORY.filter(i => i.isBlackFriday && i.size === sizeToSearch);

      const leggingColors = availableLeggings.map(i => `${i.color}${i.isBlackFriday ? ' (Promo BF 🔥)' : ''}`).join(', ');
      const topColors = availableTops.map(i => `${i.color}${i.isBlackFriday ? ' (Promo BF 🔥)' : ''}`).join(', ');

      reply = `Maravilha! No tamanho *${sizeToSearch}*, temos opções incríveis à pronta-entrega aqui em Uberlândia:

👖 *Leggings disponíveis:* ${leggingColors || 'Cores clássicas como Café, Cookie e Preta'}.
👚 *Tops disponíveis:* ${topColors || 'Top Live e Top Glossy em Preto, Acrópole e Café'}.
${bfItems.length > 0 ? `\n🔥 *Peças com desconto especial Black Friday:* ${bfItems.map(b => `${b.name} ${b.color} por R$ ${b.price.toFixed(2)}`).join(' | ')}` : ''}

Você gostaria de receber algumas fotos no corpo ou prefere agendar uma malinha no condicional para experimentar na sua casa sem compromisso? ✨`;
    } else if (lower.includes('condicional') || lower.includes('provar') || lower.includes('experimentar') || lower.includes('casa') || lower.includes('entrega')) {
      reply = `Perfeito! O nosso condicional funciona de forma super prática: a Luana separa as peças que você gostou no seu tamanho e te entrega a malinha higienizada para você provar no conforto do seu quarto! 🛍️🏡

Você fica com o que amar e devolve o restante, sem nenhuma taxa extra aqui em Uberlândia!

Qual é o seu nome e em qual bairro você mora para organizarmos seu condicional?`;
    } else if (lower.includes('preço') || lower.includes('valor') || lower.includes('quanto custa')) {
      reply = `Nossas peças têm um custo-benefício excelente pela qualidade premium da poliamida acetinada:
- Leggings Tradicionais: a partir de R$ 189,90 (ou R$ 149,90 na seleção especial Black Friday!)
- Tops com alta sustentação: a partir de R$ 129,90 (ou R$ 99,90 na Black Friday)
- T-Shirts tecnológicas: a partir de R$ 139,90
- Macacões esculturais: a partir de R$ 239,90

Aceitamos Pix e parcelamos no cartão! Quer que eu te envie o catálogo completo em PDF? ✨`;
    } else if (lower.includes('catálogo') || lower.includes('catalogo') || lower.includes('fotos') || lower.includes('link') || lower.includes('drive')) {
      reply = `Aqui está o link do nosso Catálogo Oficial Glossy com todos os lançamentos e cores permanentes: 
📄 https://drive.google.com/drive/folders/1LR8hW--sAJ76wngBoYibTNy9lPReYEbV

Você pode folhear e me mandar print do que mais gostar! O que achou? ✨`;
    } else {
      // Handoff para Luana
      isHandoff = true;
      reply = `Perfeito! Já registrei todas as suas preferências. Como você quer um atendimento exclusivo e personalizado para finalizar, vou te transferir agora mesmo para a Luana Frias! 🤎

[CARD DE TRANSBORDO / ENCAMINHAMENTO]
👤 Cliente: Cliente WhatsApp
📍 Localização: Uberlândia / MG
📏 Consulta: Atendimento e Disponibilidade de Peças
🛍️ Status: Pré-atendimento realizado pela Glossy IA.
💬 Contato direto com Luana: +55 (34) 99300-2424

A Luana já está sendo notificada e vai te responder aqui em instantes com todo o carinho! ✨`;

      handoffData = {
        clientName: 'Cliente Interessada',
        product: 'Seleção Glossy',
        phone: '+55 34 99300-2424',
        address: 'Uberlândia',
      };
    }

    return NextResponse.json({
      reply,
      isHandoff,
      handoffData,
      source: 'local_engine',
    });
  } catch (error) {
    console.error('Erro na rota de chat:', error);
    return NextResponse.json({ error: 'Erro interno ao processar mensagem.' }, { status: 500 });
  }
}
