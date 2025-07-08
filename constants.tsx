
import React from 'react';

export const APP_NAME = "Temple Mount Church Records";

export const PlusIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
  </svg>
);

export const UserIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
  </svg>
);

export const PrintIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a2.25 2.25 0 012.25-2.25H15M10.5 21V15.75M10.5 21H19.5M10.5 21H8.25M10.5 15.75H7.5M15 15.75H18.375M15 15.75V21M15 15.75V3.75A2.25 2.25 0 0012.75 1.5h-3.5A2.25 2.25 0 007 3.75V15.75m3-12V5.25m0 0A2.25 2.25 0 0112.75 3H17.25a2.25 2.25 0 012.25 2.25v1.25m-7.5 6.75h.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75h-.75a.75.75 0 00-.75.75v.75c0 .414.336.75.75.75z" />
  </svg>
);

export const HomeIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h7.5" />
  </svg>
);

export const ChurchLogoPlaceholder: React.FC<{ className?: string }> = ({ className }) => (
  <div className={`flex items-center justify-center text-blue-600 ${className}`}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 mr-2">
      <path fillRule="evenodd" d="M3 6a3 3 0 013-3h12a3 3 0 013 3v12a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm4.5 9a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zm0-3.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM12 3.75a.75.75 0 00-.75.75V6h1.5V4.5a.75.75 0 00-.75-.75zm0 16.5a.75.75 0 01.75-.75H15V18H9v1.5a.75.75 0 01-.75.75h-3a.75.75 0 01-.75-.75V9.81L12 6.94l7.5 2.87V19.5a.75.75 0 01-.75.75h-3a.75.75 0 01-.75-.75V18H12v1.5a.75.75 0 00.75.75h.001c.382.047.75.047 1.125 0H12a.75.75 0 00-.75-.75V18a.75.75 0 00-.75-.75H9v1.5a.75.75 0 00.75.75h2.25a.75.75 0 00.75-.75V9.81L6.001 12.68V19.5a.75.75 0 00.75.75h2.25A.75.75 0 0012 19.5v-1.5a.75.75 0 00-.75-.75H9v1.5a.75.75 0 01-.75.75h-3a.75.75 0 01-.75-.75V9.81L12 6.94l7.5 2.87V19.5a.75.75 0 01-.75.75h-3a.75.75 0 01-.75-.75V18H12v1.5a.75.75 0 01.75.75z" clipRule="evenodd" />
    </svg>
    <span className="font-semibold text-xl">Temple Mount Church</span>
  </div>
);