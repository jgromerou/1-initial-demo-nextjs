// import { conn } from '@/libs/mysql';

import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ name: 'Gerardo' }, { status: 200 });
}
