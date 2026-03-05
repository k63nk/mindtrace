
import React from 'react';

interface NavbarProps {
  onLoginClick: () => void;
  onRegisterClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onLoginClick, onRegisterClick }) => {
  return (
    <nav className="fixed top-0 w-full z-50 nav-blur border-b border-slate-200 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
            <span className="material-icons-round text-white text-2xl">psychology</span>
          </div>
          <span className="text-2xl font-extrabold tracking-tight dark:text-white uppercase">
            Mind<span className="gradient-text">Trace</span>
          </span>
        </div>
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
          <a className="hover:text-primary transition-colors text-slate-600 dark:text-slate-300" href="#">Trang chủ</a>
          <a className="hover:text-primary transition-colors text-slate-600 dark:text-slate-300" href="#co-che">Cơ chế</a>
          <a className="hover:text-primary transition-colors text-slate-600 dark:text-slate-300" href="#tinh-nang">Tính năng</a>
          <a className="hover:text-primary transition-colors text-slate-600 dark:text-slate-300" href="#ai-demo">AI Test</a>
        </div>
        <div className="flex items-center space-x-4">
          <button 
            onClick={onLoginClick}
            className="px-5 py-2 text-sm font-semibold hover:text-primary transition-colors dark:text-slate-300"
          >
            Đăng nhập
          </button>
          <button 
            onClick={onRegisterClick}
            className="px-6 py-2.5 bg-gradient-to-r from-primary to-secondary text-white text-sm font-bold rounded-full hover:shadow-lg hover:shadow-primary/20 transition-all"
          >
            Đăng ký
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
