'use server';
import { sendMail } from '@/lib/mail';

export const ConnectForm = (data: any) => {
  const { name, mailNum } = data;
  const htmlContent = `
  <div style="background-color: #ea5c23; padding: 10px; border-radius: 5px;">
    <div style="display: flex; flex-direction: row;">
      <div style="font-weight: bold; color: #1f3563; font-size: 32px; margin-right: 10px;">First Name:</div>
      <div style="color: #ffffff; font-size: 32px;">${name}</div>
    </div>
    <div style="display: flex; flex-direction: row;">
      <div style="font-weight: bold; color: #1f3563; font-size: 32px; margin-right: 10px;">Last Name:</div>
      <div style="color: #ffffff; font-size: 32px;">${mailNum}</div>
    </div>
    
  </div>
`;

  sendMail({
    to: 'test@numbertree.in',
    // to: 'Mahtab.syed@numbertree.in',
    name: 'Numbertree', // You can pass a default name or use the name from data
    subject: 'Callback Request from Numbertree Website',
    body: htmlContent, // Pass the HTML content
  });
};
