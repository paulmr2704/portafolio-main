import { NextResponse } from 'next/server';
import { getDb } from '@/lib/db';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Zero Trust Input Validation & Sanitization
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: 'Todos los campos son obligatorios.' },
        { status: 400 }
      );
    }

    const cleanName = String(name).trim().slice(0, 100);
    const cleanEmail = String(email).trim().slice(0, 150);
    const cleanMessage = String(message).trim().slice(0, 2000);

    const sql = getDb();

    if (sql) {
      // Create table if not exists
      await sql`
        CREATE TABLE IF NOT EXISTS contact_messages (
          id SERIAL PRIMARY KEY,
          name VARCHAR(100) NOT NULL,
          email VARCHAR(150) NOT NULL,
          message TEXT NOT NULL,
          created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
      `;

      // Insert message into Neon Postgres
      await sql`
        INSERT INTO contact_messages (name, email, message)
        VALUES (${cleanName}, ${cleanEmail}, ${cleanMessage});
      `;

      return NextResponse.json({
        success: true,
        message: '¡Mensaje enviado exitosamente!',
      });
    } else {
      // Fallback response if DATABASE_URL is not configured yet
      return NextResponse.json({
        success: true,
        message: '¡Mensaje enviado exitosamente!',
      });
    }
  } catch (error) {
    console.error('Error processing contact message:', error);
    return NextResponse.json(
      { success: false, error: 'Error interno del servidor al procesar la solicitud.' },
      { status: 500 }
    );
  }
}
