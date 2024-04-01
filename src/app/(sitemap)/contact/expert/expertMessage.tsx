'use server';
import { sendMail } from '@/lib/mail';

export const Exp1Message = (data: any) => {
  const {
    firstName,
    lastName,
    email,
    company,
    phone,
    country,
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
      <div style="font-weight: bold; color: #1f3563; font-size: 32px; margin-right: 10px;">Country:</div>
      <div style="color: #ffffff; font-size: 32px;">${country}</div>
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
    to: 'Mahtab.syed@numbertree.in',
    name: 'NumberTree', // You can pass a default name or use the name from data
    subject: 'Message from NumberTree',
    body: htmlContent, // Pass the HTML content
  });
};

export const Exp2Message = (data: any) => {
  const {
    firstName,
    lastName,
    email,
    company,
    phone,
    country,
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
      <div style="font-weight: bold; color: #1f3563; font-size: 32px; margin-right: 10px;">Country:</div>
      <div style="color: #ffffff; font-size: 32px;">${country}</div>
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
    to: 'ajay.shekhar@numbertree.in',
    name: 'NumberTree', // You can pass a default name or use the name from data
    subject: 'Message from NumberTree',
    body: htmlContent, // Pass the HTML content
  });
};

export const Exp3Message = (data: any) => {
  const {
    firstName,
    lastName,
    email,
    company,
    phone,
    country,
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
      <div style="font-weight: bold; color: #1f3563; font-size: 32px; margin-right: 10px;">Country:</div>
      <div style="color: #ffffff; font-size: 32px;">${country}</div>
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
    to: 'sulagna@numbertree.in',
    name: 'NumberTree', // You can pass a default name or use the name from data
    subject: 'Message from NumberTree',
    body: htmlContent, // Pass the HTML content
  });
};
export const Exp4Message = (data: any) => {
  const {
    firstName,
    lastName,
    email,
    company,
    phone,
    country,
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
      <div style="font-weight: bold; color: #1f3563; font-size: 32px; margin-right: 10px;">Country:</div>
      <div style="color: #ffffff; font-size: 32px;">${country}</div>
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
    to: 'Kishan.panchal@numbertree.in',
    name: 'NumberTree', // You can pass a default name or use the name from data
    subject: 'Message from NumberTree',
    body: htmlContent, // Pass the HTML content
  });
};
