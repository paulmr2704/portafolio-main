'use client';

import { useEffect } from 'react';

export default function SecurityConsole() {
  useEffect(() => {
    // 1. SOC ASCII Banner
    const asciiArt = `
%c
  ____   A  _  _  _     ____   ____  ____  ___   A 
 (  _ \\ (A)( )( )(A)   (  _ \\ (  _ \\(_  _)/ __) (A)
  )___/ /A\\ )()( /A\\    )___/  )   / _)(_( (__   /A\\
 (__)  (_^_)\\__/(_^_)  (__)   (_\\_)(____)\\___) (_^_)

 [!] SOC SECURITY MONITORING ACTIVE - ISO/IEC 27001 & ZERO TRUST APPLIED
 -----------------------------------------------------------------------
 Lead Analyst: Paulo Cesar Meza Rojas (Threat Hunter & SOC Specialist)
 Certifications: UPC (Perú), ITBA (Argentina), Javeriana, Google Dual
 Event: DevTools Inspection Event Monitored.
 Architecture: Full-Stack Next.js + Neon Postgres + Cloudflare WAF
 -----------------------------------------------------------------------
 Welcome to my Web Portfolio! Contact: paulomeza2105@gmail.com
    `;
    console.log(asciiArt, 'color: #FF1E42; font-weight: bold; font-family: monospace;');

    // 2. Anti-Reconnaissance Keyboard Event Listener
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.key === 'F12' ||
        (e.ctrlKey && e.shiftKey && ['I', 'J', 'C', 'i', 'j', 'c'].includes(e.key)) ||
        (e.ctrlKey && ['U', 'u'].includes(e.key))
      ) {
        e.preventDefault();
        showToast('Atajo de inspección bloqueado por regla ISO 27001');
      }
    };

    // 3. Anti-RightClick
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      showToast('Menú contextual desactivado por políticas de Ciberseguridad');
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('contextmenu', handleContextMenu);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('contextmenu', handleContextMenu);
    };
  }, []);

  const showToast = (message: string) => {
    let toast = document.getElementById('sec-toast-alert');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'sec-toast-alert';
      toast.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: rgba(20, 10, 14, 0.95);
        border: 1px solid #FF1E42;
        color: #F8FAFC;
        padding: 12px 20px;
        border-radius: 8px;
        font-family: monospace;
        font-size: 0.85rem;
        box-shadow: 0 0 20px rgba(255, 30, 66, 0.5);
        z-index: 9999;
        transition: all 0.3s ease;
      `;
      document.body.appendChild(toast);
    }
    toast.innerHTML = `<span style="color:#FF1E42;">🛡️ <strong>SEC-EVENT:</strong></span> ${message}`;
    toast.style.opacity = '1';
    toast.style.transform = 'translateY(0)';

    setTimeout(() => {
      if (toast) {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(10px)';
      }
    }, 3000);
  };

  return null;
}
