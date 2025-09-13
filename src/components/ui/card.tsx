'use client';
import React from 'react';

export const Card = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={`bg-slate-800 text-white rounded-xl shadow-md p-14 ${className}`}>
    {children}
  </div>
);
