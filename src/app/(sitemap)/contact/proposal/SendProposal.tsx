'use server';
import { sendMail } from '@/lib/mail';

export const sendProposal = (data: any) => {
  const { reason, name, email, phone, company, check } = data;

  const htmlContent = `
  <div style="background-color: #ea5c23; padding: 10px; border-radius: 5px;">
    <div style="display: flex; flex-direction: row;">
      <div style="font-weight: bold; color: #1f3563; font-size: 32px; margin-right: 10px;">Reason for enquery:</div>
      <div style="color: #ffffff; font-size: 32px;">${reason}</div>
    </div>
    <div style="display: flex; flex-direction: row;">
      <div style="font-weight: bold; color: #1f3563; font-size: 32px; margin-right: 10px;">Name:</div>
      <div style="color: #ffffff; font-size: 32px;">${name}</div>
    </div>
    <div style="display: flex; flex-direction: row;">
      <div style="font-weight: bold; color: #1f3563; font-size: 32px; margin-right: 10px;">Email:</div>
      <div style="color: #ffffff; font-size: 32px;">${email}</div>
    </div>
    <div style="display: flex; flex-direction: row;">
      <div style="font-weight: bold; color: #1f3563; font-size: 32px; margin-right: 10px;">Phone:</div>
      <div style="color: #ffffff; font-size: 32px;">${phone}</div>
    </div>
    <div style="display: flex; flex-direction: row;">
      <div style="font-weight: bold; color: #1f3563; font-size: 32px; margin-right: 10px;">Company:</div>
      <div style="color: #ffffff; font-size: 32px;">${company}</div>
    </div>
    <div style="display: flex; flex-direction: row;">
      <div style="font-weight: bold; color: #1f3563; font-size: 32px; margin-right: 10px;">Consent check:</div>
      <div style="color: #ffffff; font-size: 32px;">${check}</div>
    </div>
  </div>
`;

  sendMail({
    to: 'thelordshady@gmail.com',
    name: 'Girish', // You can pass a default name or use the name from data
    subject: 'Test Proposal',
    body: htmlContent, // Pass the HTML content
  });
};
