export type MenuDropdownItem = {
  name: string;
  href: string;
};

export type MenuItem = {
  name: string;
  href: string;
  dropdown?: MenuDropdownItem[];
};

export const menuItems: MenuItem[] = [
  { name: 'Beranda', href: '/' },
  { name: 'Tentang Kami', href: '/tentang-kami' },
  { name: 'Layanan', href: '/layanan' },

  {
    name: 'Artikel',
    href: '/informasi',
    dropdown: [
      { name: 'Standar ISO', href: '/informasi?category=standar-iso' },
      { name: 'Peraturan Perundangan', href: '/informasi?category=peraturan-perundangan' },
    ],
  },

  // { name: 'Berita', href: '/berita' },
  { name: 'Kontak', href: '/kontak' },
];
