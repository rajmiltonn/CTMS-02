import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useTheme } from '@/components/theme-provider';
import Logo from '@/assets/mylogo.png';


type NavLink = {
  href: string;
  label: string;
};

const navLinks: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/academics', label: 'Courses' },
  { href: '/facilities', label: 'Services' },
  { href: '/admissions', label: 'Transformations' },
  { href: '/news-events', label: 'Updates' },
  { href: '/contact', label: 'Contact Us' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background shadow-sm">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link to="/" className="flex items-center gap-2">
          <img src={Logo} alt="School Logo" className="h-10 w-auto" />
          <span className="text-xl font-bold text-[#3A59D1] hidden md:inline-block dark:text-blue-300">Cloud Tech Mind Solutions</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="text-sm font-medium text-gray-600 transition-colors hover:text-[#3A59D1] dark:text-gray-300 dark:hover:text-blue-300"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          {/* Theme Toggle Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="rounded-full"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? (
              <Sun className="h-5 w-5 text-yellow-400" />
            ) : (
              <Moon className="h-5 w-5 text-gray-600" />
            )}
          </Button>

          <Button
            className="hidden md:flex bg-[#3A59D1] hover:bg-[#2A49C1] text-white dark:bg-blue-600 dark:hover:bg-blue-700"
            asChild
          >
            <Link to="/contact">Enroll Now</Link>
          </Button>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] md:w-[400px] px-0">
              <div className="flex flex-col h-full">
                <div className="px-6 py-4 border-b">
                  <div className="flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                      <img src={Logo} alt="School Logo" className="h-8 w-auto" />
                      <span className="text-xl font-bold text-[#3A59D1] dark:text-blue-300">Cloud Tech Mind solutions </span>
                    </Link>
                    <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                      <X className="h-5 w-5" />
                      <span className="sr-only">Close</span>
                    </Button>
                  </div>
                </div>
                <nav className="flex-1 space-y-1 px-4 py-6">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      to={link.href}
                      className="flex items-center py-3 px-4 text-sm font-medium rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                  <div className="pt-4 flex items-center justify-between px-4">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => {
                        setTheme(theme === 'dark' ? 'light' : 'dark');
                      }}
                      className="flex items-center gap-2"
                    >
                      {theme === 'dark' ? (
                        <>
                          <Sun className="h-4 w-4 text-yellow-400" />
                          <span>Light Mode</span>
                        </>
                      ) : (
                        <>
                          <Moon className="h-4 w-4" />
                          <span>Dark Mode</span>
                        </>
                      )}
                    </Button>
                  </div>
                  <div className="pt-4">
                    <Button
                      className="w-full bg-[#3A59D1] hover:bg-[#2A49C1] text-white mt-4 dark:bg-blue-600 dark:hover:bg-blue-700"
                      asChild
                      onClick={() => setIsOpen(false)}
                    >
                      <Link to="/admissions">Registration Form</Link>
                    </Button>
                  </div>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
