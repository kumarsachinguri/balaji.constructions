const Header = () => {
  const links: { label: string; route: string }[] = [
    { label: "Home", route: "/home" },
    { label: "Portfolio", route: "/portfolio" },
    { label: "Contact", route: "/contact" },
  ];
  const listItems = links.map((link) => (
    <li>
      <a>{link.label}</a>
    </li>
  ));
  return (
    <div className='flex items-center gap-2 p-4 mx-auto maxwidth'>
      <img src='images/logo-bc.png' alt='Logo' className='w-16' />
      <ul className='list-none flex items-center gap-2 text-slate-100 ms-auto'>
        {listItems}
      </ul>
    </div>
  );
};

export default Header;
