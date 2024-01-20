import React from 'react';
import { gyparody } from '@/lib/fonts/fonts';

const Header = () => {
  return (
    <header className="bg-primary text-center py-0 md:py-1">
      <h1
        className={`text-white lowercase tracking-widest text-xl md:text-3xl lg:text-4xl ${gyparody.className}`}
      >
        Jprdy!
      </h1>
    </header>
  );
};

export default Header;
