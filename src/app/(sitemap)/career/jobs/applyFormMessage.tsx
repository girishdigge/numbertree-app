'use server';
import { sendMail } from '@/lib/mail';

export const ApplyFormMessage = (data: any) => {
  const {
    firstName,
    lastName,
    email,
    company,
    phone,
    city,
    role,
    message,
    where,
    check,
  } = data;
  const htmlContent = `
  <div style="background-color: #ea5c23; padding: 10px; border-radius: 5px;">
    <div style="display: flex; flex-direction: row;">
      <div style="font-weight: bold; color: #1f3563; font-size: 32px; margin-right: 10px;">First Name:</div>
      <div style="color: #ffffff; font-size: 32px;">${firstName}</div>
    </div>
    <div style="display: flex; flex-direction: row;">
      <div style="font-weight: bold; color: #1f3563; font-size: 32px; margin-right: 10px;">Last Name:</div>
      <div style="color: #ffffff; font-size: 32px;">${lastName}</div>
    </div>
    <div style="display: flex; flex-direction: row;">
      <div style="font-weight: bold; color: #1f3563; font-size: 32px; margin-right: 10px;">Email:</div>
      <div style="color: #ffffff; font-size: 32px;">${email}</div>
    </div>
    <div style="display: flex; flex-direction: row;">
      <div style="font-weight: bold; color: #1f3563; font-size: 32px; margin-right: 10px;">Company:</div>
      <div style="color: #ffffff; font-size: 32px;">${company}</div>
    </div>
    <div style="display: flex; flex-direction: row;">
      <div style="font-weight: bold; color: #1f3563; font-size: 32px; margin-right: 10px;">Phone:</div>
      <div style="color: #ffffff; font-size: 32px;">${phone}</div>
    </div>
    <div style="display: flex; flex-direction: row;">
      <div style="font-weight: bold; color: #1f3563; font-size: 32px; margin-right: 10px;">City:</div>
      <div style="color: #ffffff; font-size: 32px;">${city}</div>
    </div>
    <div style="display: flex; flex-direction: row;">
      <div style="font-weight: bold; color: #1f3563; font-size: 32px; margin-right: 10px;">City:</div>
      <div style="color: #ffffff; font-size: 32px;">${role}</div>
    </div>
    <div style="display: flex; flex-direction: row;">
      <div style="font-weight: bold; color: #1f3563; font-size: 32px; margin-right: 10px;">Message:</div>
      <div style="color: #ffffff; font-size: 32px;">${message}</div>
    </div>
    <div style="display: flex; flex-direction: row;">
      <div style="font-weight: bold; color: #1f3563; font-size: 32px; margin-right: 10px;">Where did you hear about us:</div>
      <div style="color: #ffffff; font-size: 32px;">${where}</div>
    </div>
    <div style="display: flex; flex-direction: row;">
      <div style="font-weight: bold; color: #1f3563; font-size: 32px; margin-right: 10px;">Consent Check:</div>
      <div style="color: #ffffff; font-size: 32px;">${check}</div>
    </div>
  </div>
`;

  sendMail({
    to: 'numbertreehr@gmail.com',
    name: 'Numbertree', // You can pass a default name or use the name from data
    subject: 'Message from Numbertree',
    body: htmlContent, // Pass the HTML content
  });
};
