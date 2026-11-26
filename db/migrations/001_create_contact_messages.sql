-- Migración 001: Tabla de mensajes de contacto con restricciones de integridad
-- Ejecutar una sola vez con rol propietario/migrador. El usuario de runtime de la app
-- solo requiere privilegio INSERT sobre esta tabla (Principio de Menor Privilegio).

CREATE TABLE IF NOT EXISTS contact_messages (
  id BIGSERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL CHECK (char_length(trim(name)) >= 2),
  email VARCHAR(150) NOT NULL CHECK (position('@' in email) > 1),
  message TEXT NOT NULL CHECK (char_length(trim(message)) >= 10 AND char_length(message) <= 2000),
  ip_hash VARCHAR(64),
  user_agent VARCHAR(255),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_contact_messages_created_at
  ON contact_messages (created_at DESC);

