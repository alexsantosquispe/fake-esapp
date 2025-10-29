const menu = [
  { label: 'Dashboard', href: '/dashboard' },
  { label: 'Transactions', href: '/transactions' }
];

export const Navbar = () => {
  return (
    <header className="flex justify-between border-b border-neutral-200 p-4">
      <div className="text-lg font-semibold">FESApp</div>
      <nav>
        <ul className="flex gap-3 text-sm font-medium">
          {menu.map((item) => (
            <li key={item.href}>{item.label}</li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
