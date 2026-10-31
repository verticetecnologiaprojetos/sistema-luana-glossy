import { NextResponse } from 'next/server';

const UAZAPI_SERVER = 'https://fsdistribuidora.uazapi.com';
const INSTANCE_TOKEN = '72722d0e-4d1f-4691-896a-5982e5edc88b';

export async function POST() {
  try {
    const response = await fetch(`${UAZAPI_SERVER}/instance/connect`, {
      method: 'POST',
      headers: {
        'token': INSTANCE_TOKEN,
        'Content-Type': 'application/json'
      }
    });

    const data = await response.json();
    return NextResponse.json({
      success: true,
      instance: data.instance,
      qrcode: data.instance?.qrcode || null,
      paircode: data.instance?.paircode || null,
      status: data.instance?.status || 'connecting'
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message || 'Erro ao conectar à instância UaZapi' },
      { status: 500 }
    );
  }
}
