import { NextRequest, NextResponse } from 'next/server';

const N8N_WEBHOOK_URL = 'https://n8n.theosystem.com.br/webhook/glossy-postar';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const response = await fetch(N8N_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ...body,
        source: 'painel_luana_glossy',
        account: 'glossyluanaudia',
        publishedAt: new Date().toISOString()
      })
    });

    const data = await response.json();

    return NextResponse.json({
      success: true,
      message: 'Post enviado ao n8n Tel System com sucesso!',
      n8nResponse: data
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message || 'Erro ao acionar webhook do n8n' },
      { status: 500 }
    );
  }
}
