import { NavLink, type NavLinkRenderProps } from 'react-router';
import cn from 'clsx';
import { Logo } from './Logo';

const menu = [
  { label: 'Dashboard', href: '/dashboard' },
  { label: 'Transactions', href: '/history' }
];

export const Navbar = () => {
  const linkActiveHandler = ({ isActive }: NavLinkRenderProps) =>
    cn({
      'text-primary': isActive,
      'hover:text-primary': !isActive
    });

  return (
    <header className="fixed z-50 flex h-14 w-full justify-center border-b border-neutral-200 bg-white/60 backdrop-blur-lg">
      <div className="flex w-full max-w-7xl justify-between">
        <Logo />
        <nav className="hidden p-4 md:flex xl:px-0">
          <ul className="flex text-sm font-medium text-black md:gap-10">
            {menu.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                className={linkActiveHandler}
              >
                {item.label}
              </NavLink>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};
