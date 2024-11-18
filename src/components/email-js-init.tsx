"use client";

import { useEffect } from 'react';
import emailjs from '@emailjs/browser';

export const EmailJSInit = () => {
  useEffect(() => {
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!);
  }, []);

  return null;
}; 