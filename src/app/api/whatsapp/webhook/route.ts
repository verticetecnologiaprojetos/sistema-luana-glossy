import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const mode = searchParams.get('hub.mode');
  const token = searchParams.get('hub.verify_token');
  const challenge = searchParams.get('hub.challenge');

  // Validação padrão da Meta / UAZAPI
  if (mode === 'subscribe' && token === (process.env.WHATSAPP_VERIFY_TOKEN || 'luana_glossy_2026')) {
    return new Response(challenge, { status: 200 });
  }

  return NextResponse.json({
    status: 'online',
    service: 'Sistema Luana Glossy - WhatsApp Webhook',
    phone: '+55 34 99300-2424',
    provider: 'UAZAPI / Meta Cloud API',
    agent: 'Glossy IA',
  });
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log('[WhatsApp Webhook Recebido]:', JSON.stringify(body, null, 2));

    // Identificação de mensagem recebida
    return NextResponse.json({
      success: true,
      processed: true,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error('Erro no processamento do Webhook:', error);
    return NextResponse.json({ error: 'Falha ao processar webhook' }, { status: 500 });
  }
}
