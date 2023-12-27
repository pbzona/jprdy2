import React from 'react';
import { gyparody } from '@/lib/fonts/fonts';

const Header = () => {
  return (
    <header className="bg-blue text-center py-2">
      <h1 className={`text-white lowercase tracking-widest ${gyparody.className}`}>Jprdy!</h1>
    </header>
  );
};

export default Header;
