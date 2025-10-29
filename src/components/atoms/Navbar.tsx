import { NavLink, type NavLinkRenderProps } from 'react-router';
import cn from 'clsx';

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
    <header className="flex justify-between border-b border-neutral-200 px-4">
      <div className="bg-primary flex items-center px-4 text-2xl font-semibold text-white">
        f-esapp
      </div>
      <nav className="py-4">
        <ul className="flex gap-10 text-sm font-semibold text-neutral-500">
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
    </header>
  );
};
