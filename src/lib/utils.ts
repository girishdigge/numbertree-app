import mongoose from 'mongoose';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export const connectToDB = async () => {
  const connection: any = {};
  try {
    if (connection.isConnected) return;
    const db: any = await mongoose.connect(process.env.MONGO!);
    connection.isConnected = db.connections[0].readyState;
  } catch (error: any) {
    throw new Error(error);
  }
};
