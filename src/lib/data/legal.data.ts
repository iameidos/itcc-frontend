export interface LegalSectionItem {
  title: string;
  content: string;
}

export interface LegalSection {
  id: string;
  heading: string;
  items: LegalSectionItem[];
}

export interface LegalPage {
  slug: string;
  title: string;
  description: string;
  sections: LegalSection[];
}

export const legalPages: LegalPage[] = [
  {
    slug: 'terms-of-service',
    title: 'Syarat dan Ketentuan Layanan',
    description: 'Harap membaca Syarat dan Ketentuan ini dengan saksama sebelum menggunakan layanan kami.',
    sections: [
      {
        id: 'introduction',
        heading: 'Pendahuluan',
        items: [
          {
            title: 'Persetujuan Syarat',
            content: 'Dengan menggunakan layanan kami, Anda dianggap telah menyetujui seluruh ketentuan yang berlaku.',
          },
          {
            title: 'Perubahan Ketentuan',
            content: 'Kami dapat memperbarui ketentuan ini sewaktu-waktu dan perubahan berlaku sejak dipublikasikan.',
          },
        ],
      },
      {
        id: 'use-of-service',
        heading: 'Penggunaan Layanan',
        items: [
          {
            title: 'Tujuan Penggunaan',
            content: 'Layanan kami disediakan untuk mendukung pengelolaan sertifikasi dan kepatuhan organisasi.',
          },
          {
            title: 'Larangan Penggunaan',
            content: 'Dilarang menggunakan layanan untuk aktivitas ilegal atau merugikan pihak lain.',
          },
        ],
      },
    ],
  },

  {
    slug: 'privacy-policy',
    title: 'Kebijakan Privasi',
    description: 'Kebijakan ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi data Anda.',
    sections: [
      {
        id: 'data-collection',
        heading: 'Pengumpulan Data',
        items: [
          {
            title: 'Data yang Dikumpulkan',
            content: 'Kami mengumpulkan data yang Anda berikan secara langsung maupun otomatis melalui penggunaan layanan.',
          },
        ],
      },
    ],
  },

  {
    slug: 'cookie-policy',
    title: 'Kebijakan Cookie',
    description: 'Kebijakan ini menjelaskan bagaimana kami menggunakan cookie dan teknologi serupa untuk meningkatkan pengalaman Anda.',
    sections: [
      {
        id: 'what-are-cookies',
        heading: 'Apa Itu Cookie',
        items: [
          {
            title: 'Definisi Cookie',
            content: 'Cookie adalah file kecil yang disimpan pada perangkat Anda untuk membantu situs web berfungsi dengan baik dan memberikan pengalaman yang lebih personal.',
          },
        ],
      },
      {
        id: 'how-we-use-cookies',
        heading: 'Bagaimana Kami Menggunakan Cookie',
        items: [
          {
            title: 'Cookie Fungsional',
            content: 'Digunakan untuk memastikan fitur dasar situs berjalan dengan baik.',
          },
          {
            title: 'Cookie Analitik',
            content: 'Membantu kami memahami bagaimana pengguna berinteraksi dengan situs untuk meningkatkan kualitas layanan.',
          },
        ],
      },
      {
        id: 'managing-cookies',
        heading: 'Mengelola Cookie',
        items: [
          {
            title: 'Kontrol Pengguna',
            content: 'Anda dapat mengatur preferensi cookie melalui pengaturan browser Anda kapan saja.',
          },
        ],
      },
    ],
  },

  {
    slug: 'refund-policy',
    title: 'Kebijakan Pengembalian Dana',
    description: 'Kebijakan ini menjelaskan ketentuan pengembalian dana untuk layanan yang kami sediakan.',
    sections: [
      {
        id: 'eligibility',
        heading: 'Kelayakan Pengembalian Dana',
        items: [
          {
            title: 'Syarat Pengembalian Dana',
            content: 'Pengembalian dana hanya berlaku untuk layanan yang belum digunakan atau belum dimulai proses pengerjaannya.',
          },
        ],
      },
      {
        id: 'non-refundable',
        heading: 'Layanan yang Tidak Dapat Dikembalikan',
        items: [
          {
            title: 'Ketentuan',
            content: 'Biaya konsultasi yang sudah dilakukan, pelatihan yang sudah dihadiri, atau dokumen yang sudah dibuat tidak dapat dikembalikan.',
          },
        ],
      },
      {
        id: 'process',
        heading: 'Proses Pengembalian Dana',
        items: [
          {
            title: 'Waktu Proses',
            content: 'Pengembalian dana akan diproses dalam 7–14 hari kerja setelah permintaan disetujui.',
          },
          {
            title: 'Metode Pengembalian',
            content: 'Dana akan dikembalikan melalui metode pembayaran yang sama dengan transaksi awal.',
          },
        ],
      },
    ],
  },

  {
    slug: 'disclaimer',
    title: 'Disclaimer',
    description: 'Pernyataan ini menjelaskan batasan tanggung jawab dan ruang lingkup informasi yang disediakan oleh layanan kami.',
    sections: [
      {
        id: 'general-info',
        heading: 'Informasi Umum',
        items: [
          {
            title: 'Akurasi Informasi',
            content: 'Kami berupaya menyediakan informasi yang akurat dan terkini, namun tidak menjamin bahwa seluruh informasi bebas dari kesalahan atau kelalaian.',
          },
          {
            title: 'Tidak Ada Jaminan',
            content: "Semua informasi disediakan 'sebagaimana adanya' tanpa jaminan apa pun, baik tersurat maupun tersirat.",
          },
        ],
      },
      {
        id: 'professional-advice',
        heading: 'Bukan Nasihat Profesional',
        items: [
          {
            title: 'Batasan Konsultasi',
            content: 'Konten dalam layanan ini tidak dapat dianggap sebagai nasihat hukum, keuangan, atau profesional lainnya.',
          },
          {
            title: 'Konsultasi Tambahan',
            content: 'Pengguna disarankan untuk berkonsultasi dengan profesional terkait sebelum mengambil keputusan penting.',
          },
        ],
      },
      {
        id: 'external-links',
        heading: 'Tautan Eksternal',
        items: [
          {
            title: 'Tanggung Jawab',
            content: 'Kami tidak bertanggung jawab atas konten, kebijakan, atau praktik situs pihak ketiga yang ditautkan dari layanan kami.',
          },
        ],
      },
    ],
  },

  {
    slug: 'security-policy',
    title: 'Kebijakan Keamanan',
    description: 'Kebijakan ini menjelaskan langkah-langkah keamanan yang kami terapkan untuk melindungi data dan layanan Anda.',
    sections: [
      {
        id: 'data-protection',
        heading: 'Perlindungan Data',
        items: [
          {
            title: 'Keamanan Infrastruktur',
            content: 'Kami menggunakan standar industri untuk melindungi data, termasuk enkripsi, firewall, dan pemantauan sistem.',
          },
          {
            title: 'Akses Terbatas',
            content: 'Akses ke data pengguna dibatasi hanya untuk personel yang berwenang dan memerlukan akses tersebut.',
          },
        ],
      },
      {
        id: 'system-security',
        heading: 'Keamanan Sistem',
        items: [
          {
            title: 'Pemantauan Sistem',
            content: 'Kami melakukan pemantauan rutin untuk mendeteksi aktivitas mencurigakan dan potensi ancaman keamanan.',
          },
          {
            title: 'Pembaruan Berkala',
            content: 'Sistem kami diperbarui secara berkala untuk memastikan perlindungan terhadap kerentanan terbaru.',
          },
        ],
      },
      {
        id: 'user-responsibility',
        heading: 'Tanggung Jawab Pengguna',
        items: [
          {
            title: 'Keamanan Akun',
            content: 'Pengguna bertanggung jawab menjaga kerahasiaan kredensial akun dan segera melaporkan aktivitas mencurigakan.',
          },
          {
            title: 'Penggunaan Aman',
            content: 'Pengguna diharapkan menggunakan layanan dengan cara yang aman dan tidak membahayakan sistem.',
          },
        ],
      },
    ],
  },
];
