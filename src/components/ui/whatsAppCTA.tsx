'use client';
import React from 'react';
import { FloatingWhatsApp } from 'react-floating-whatsapp';

export default function WhatsAppCTA() {
  const phoneNumber = `+916281173260`;
  const accountName = 'Numbertree';
  return (
    <FloatingWhatsApp phoneNumber={phoneNumber} accountName={accountName} />
  );
}
