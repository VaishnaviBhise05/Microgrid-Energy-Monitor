'use client';
import React from 'react';

export const Label = ({ children, htmlFor, className }: { children: React.ReactNode; htmlFor: string; className?: string }) => (
  <label htmlFor={htmlFor} className={`block text-sm font-medium text-slate-400 mb-1 ${className}`}>
    {children}
  </label>
);
