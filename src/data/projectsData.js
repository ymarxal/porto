export const PROJECTS_DATA = [
  {
    id: "kotacloud",
    title: "KotaCloud",
    tagline: "Platform Infrastruktur Digital & Layanan Cloud Hosting Terintegrasi",
    category: "DEVELOPMENT",
    allCategories: ["ALL", "DEVELOPMENT", "WEB DESIGN"],
    year: "2026",
    link: "https://kotacloud.com/",
    hasLiveLink: true,
    badgeText: "NEXT.JS",
    thumbnail: "https://kotacloud.com/logofix.png",
    logoUrl: "https://kotacloud.com/logofix.png",
    faviconUrl: "https://kotacloud.com/favicon.ico",
    client: "KotaCloud Indonesia",
    role: "Fullstack Development & Infrastructure Design",
    duration: "3 Bulan",
    overview: "KotaCloud adalah platform penyedia infrastruktur cloud hosting modern yang menawarkan kecepatan tinggi, keamanan teruji, dan kemudahan manajemen server untuk pengembang dan bisnis digital.",
    challenge: "Membangun antarmuka dashboard cloud yang secepat kilat dengan pemantauan metrik server real-time dan pengalaman pengguna yang intuitif.",
    solution: "Mengintegrasikan arsitektur frontend performa tinggi dengan sistem navigasi modern dan visualisasi status server otomatis.",
    tools: ["Next.js", "React", "Tailwind CSS", "Node.js", "Cloud Infrastructure"],
    outcomes: ["Performa load cepat di bawah 1 detik", "Desain dashboard terintegrasi", "Uptime & Keamanan Terjamin"],
  },
  {
    id: "sman13takalar",
    title: "SMAN 13 Takalar",
    tagline: "Portal Web Informasi Sekolah Resmi & Platform Edukasi Digital",
    category: "WEB DESIGN",
    allCategories: ["ALL", "WEB DESIGN", "UI/UX"],
    year: "2026",
    link: "https://sman13takalar.vercel.app/",
    hasLiveLink: true,
    badgeText: "NEXT.JS",
    thumbnail: "https://sman13takalar.vercel.app/hero.jpeg",
    logoUrl: "https://sman13takalar.vercel.app/logo.jpg",
    faviconUrl: "https://sman13takalar.vercel.app/favicon.ico",
    client: "SMAN 13 Takalar",
    role: "UI/UX Design & Frontend Development",
    duration: "2 Bulan",
    overview: "Portal web sekolah interaktif yang menyajikan berita resmi, pengumuman akademik, galeri kegiatan siswa, dan direktori pendidik SMAN 13 Takalar.",
    challenge: "Menghadirkan platform informasi sekolah modern yang responsif di semua perangkat dan mudah diakses oleh siswa, guru, serta masyarakat umum.",
    solution: "Merancang tata letak bersih berstandar tinggi dengan sistem pengorganisasian informasi akademik yang cepat dan efisien.",
    tools: ["React", "Next.js", "Tailwind CSS", "Vercel Deployment", "UI/UX Design"],
    outcomes: ["Aksesibilitas penuh di perangkat mobile", "Struktur informasi akademik yang teratur", "Penyampaian berita sekolah real-time"],
  },
  {
    id: "nawala18",
    title: "Memories Nawala",
    tagline: "Interactive 3D Flipbook Yearbook & Digital Archiving Platform (One Piece Theme)",
    category: "INTERACTIVE WEB",
    allCategories: ["ALL", "DEVELOPMENT", "WEB DESIGN", "CREATIVE"],
    year: "2026",
    link: "https://nawala18-rbmks.vercel.app/",
    hasLiveLink: true,
    badgeText: "3D FLIPBOOK & JS",
    thumbnail: "https://nawala18-rbmks.vercel.app/assets/images/sampul%20fix.png",
    logoUrl: "/images/favicons/nawala18-favicon.svg",
    faviconUrl: "/images/favicons/nawala18-favicon.svg",
    client: "Rumah BUMN BRI Makassar (Internship Batch 18)",
    role: "Frontend Development & Creative UI/UX Design",
    duration: "Proyek Magang (Internship)",
    overview: "Memories Nawala adalah platform yearbook interaktif berformat 3D flipbook bergaya One Piece untuk kru magang Batch 18 Rumah BUMN BRI Makassar. Dilengkapi animasi pergantian lembar 3D realistis, musik latar otomatis, pemutar mini-movie vertikal reels, dan kartu pesan digital setiap kru.",
    challenge: "Menghadirkan pengalaman membaca yearbook digital yang imersif dan interaktif di berbagai resolusi layar (mobile & desktop), dengan visual kustom bajak laut yang estetik tanpa mengorbankan performa muat aset grafis dan audio.",
    solution: "Mengembangkan antarmuka buku 3D interaktif menggunakan Page-Flip library, sistem modular audio controller, lightbox modal responsive untuk teater video resolusi penuh, serta optimasi aset visual bertema nautical bajak laut.",
    tools: ["HTML5", "CSS3 / Vanilla CSS", "JavaScript", "Page-Flip 3D", "Audio API", "UI/UX Design"],
    outcomes: ["Sensasi membaca buku fisik secara 3D di browser", "Fitur pemutar mini-movie reels vertikal 9:16 terintegrasi", "Arsip digital kenangan magang interaktif yang dapat diakses publik"],
  },
  {
    id: "algopos",
    title: "AlgoPOS",
    tagline: "Smart Cafe POS & Self-Ordering System Berbasis Web (Fullstack Monolith)",
    category: "FULLSTACK APP",
    allCategories: ["ALL", "FULLSTACK", "WEB SYSTEM"],
    year: "2026",
    link: null,
    hasLiveLink: false,
    badgeText: "NEXT.JS + LARAVEL",
    thumbnail: "/images/logos/algopos.svg",
    logoUrl: "/images/logos/algopos.svg",
    faviconUrl: "/images/logos/algopos.svg",
    client: "Tugas Kuliah (Sistem Informasi)",
    role: "Fullstack Developer (Frontend Next.js & Backend Laravel)",
    duration: "Proyek Sistem Informasi",
    overview: "AlgoPOS adalah platform sistem web terpadu untuk operasional kafe modern yang menggabungkan fitur Customer Self-Ordering (via WiFi Captive Portal / QR Code), Dashboard Kasir (Direct POS & Manajemen Pesanan), serta Dashboard Super Admin (Audit Kasir, Manajemen Pengguna & Laporan Keuangan).",
    challenge: "Menghubungkan alur transaksi dari pelanggan (self-order) ke kasir secara real-time, mengelola multi-user (Kasir & Admin) dengan hak akses terpisah, serta menyajikan rekap data finansial yang akurat dalam satu arsitektur terintegrasi.",
    solution: "Mengembangkan arsitektur Fullstack Monolith modern dengan Next.js sebagai antarmuka reaktif berkecepatan tinggi dan Laravel sebagai pengendali logika bisnis, autentikasi multi-role, serta manajemen database relasional MySQL.",
    tools: ["Next.js", "Laravel", "PHP", "React", "MySQL", "Tailwind CSS", "REST API", "Captive Portal QR"],
    outcomes: ["Pemesanan mandiri tanpa antre di kasir", "Pelacakan status pesanan real-time", "Otomatisasi laporan keuangan & audit kasir"],
    
    // Penjelasan Arsitektur & Fitur Mendalam
    architectureExplanation: {
      title: "Arsitektur Sistem (Fullstack Monolith)",
      desc: "Sistem ini dibangun dengan pendekatan Fullstack terpadu di mana Next.js menangani rendering halaman dinamis pelanggan & dashboard interaktif, sementara Laravel bertindak sebagai backend engine tangguh yang mengatur autentikasi berbasis session/token, routing API, validasi data transaksi, dan manajemen database MySQL.",
    },
    systemFeatures: [
      {
        role: "Pelanggan (Customer Self-Ordering)",
        tag: "Akses QR / WiFi Captive Portal",
        points: [
          "Akses Instan: Scan QR Code di meja atau otomatis terbuka saat terhubung WiFi kafe (Captive Portal) tanpa download aplikasi.",
          "Katalog Menu Interaktif: Navigasi visual kategori makanan & minuman dengan info harga real-time.",
          "Keranjang Belanja (Cart): Menambah catatan kustom (less sugar, extra shot, level pedas, dsb).",
          "Kalkulasi Otomatis: Penghitungan total harga, pajak, dan jumlah item belanja secara transparan.",
          "Halaman Checkout & Pembayaran: Pilihan metode bayar digital / langsung di kasir.",
          "Live Order Tracker: Halaman tunggu interaktif dengan status dinamis (Pesanan Diterima ➔ Sedang Dibuat ➔ Siap Diambil / Selesai).",
        ],
      },
      {
        role: "Kasir (Cashier POS Management)",
        tag: "Dashboard Operasional",
        points: [
          "Autentikasi Aman: Login khusus kasir dengan proteksi sesi kerja aktif.",
          "Real-time Order Feed: Notifikasi instan pesanan masuk dari meja pelanggan.",
          "Kontrol Status & Estimasi: Menerima pesanan, mengupdate progres, dan menetapkan estimasi waktu saji.",
          "Direct POS Mode: Panel kasir cepat untuk melayani pesanan manual pelanggan yang memesan langsung di meja kasir.",
          "Rekap Kas Harian: Laporan total omset, transaksi berhasil, dan rincian metode pembayaran per shift.",
        ],
      },
      {
        role: "Super Admin (Owner / Manager)",
        tag: "Monitoring & Pengawasan",
        points: [
          "Login Tingkat Lanjut: Akses penuh memantau seluruh aktivitas operasional kafe.",
          "Audit & Monitoring Kasir: Memantau riwayat aktivitas kasir secara spesifik (kasir A/B melayani customer siapa saja).",
          "Manajemen User & Hak Akses: Membuat, mengedit, dan mengelola akun login kasir serta admin baru.",
          "Laporan Finansial Komprehensif: Analisis pendapatan harian/bulanan, tren penjualan, dan menu terlaris.",
          "Master Data Menu & Stok: Pengaturan harga, penambahan item menu baru, dan kontrol ketersediaan bahan.",
        ],
      },
    ],
    folderStructure: `smart-cafe-pos/
├── backend/ (Laravel Engine & API)
│   ├── app/
│   │   ├── Http/
│   │   │   ├── Controllers/
│   │   │   │   ├── AuthController.php      # Login Kasir & Admin
│   │   │   │   ├── OrderController.php     # Alur Pesanan & Status
│   │   │   │   ├── MenuController.php      # Katalog & Stok Menu
│   │   │   │   └── ReportController.php    # Laporan Keuangan & Audit
│   │   │   └── Middleware/                 # Role-Based Access Control
│   │   └── Models/                         # User, Order, OrderItem, Menu, Payment
│   ├── database/
│   │   └── migrations/                     # Skema Relasi Database MySQL
│   └── routes/
│       └── api.php                         # Endpoint RESTful API
│
└── frontend/ (Next.js Interactive UI)
    ├── src/
    │   ├── app/
    │   │   ├── (customer)/
    │   │   │   ├── menu/page.js            # Katalog & Filter Menu
    │   │   │   ├── cart/page.js            # Keranjang & Custom Notes
    │   │   │   ├── checkout/page.js        # Ringkasan Tagihan & Bayar
    │   │   │   └── order-status/[id]/page.js # Live Status Pesanan
    │   │   ├── (cashier)/
    │   │   │   ├── login/page.js           # Login Khusus Kasir
    │   │   │   ├── pos/page.js             # Direct POS Meja Kasir
    │   │   │   └── orders/page.js          # Monitoring Pesanan Masuk
    │   │   └── (admin)/
    │   │       ├── login/page.js           # Login Super Admin
    │   │       ├── dashboard/page.js       # Analitik Finansial & Omset
    │   │       ├── users/page.js           # Kelola Akun Kasir & Admin
    │   │       └── reports/page.js         # Audit Transaksi Kasir
    │   └── components/                     # Reusable UI & Real-time State`,
  },
];

export const SKILLS_LIST = [
  { name: "Frontend Development", desc: "Membangun antarmuka web modern & responsif dengan Next.js & Tailwind CSS." },
  { name: "UI/UX & Creative Design", desc: "Perancangan sistem desain antarmuka, layout interaktif, & identitas visual." },
  { name: "Content & Visual Production", desc: "Pembuatan materi visual publikasi, media sosial, & kebutuhan promosi digital." },
  { name: "Responsive & Performance", desc: "Optimasi loading cepat, aksesibilitas lintas perangkat, & struktur web ramah SEO." },
];

export const TOOLS_LIST = [
  { name: "Next.js", category: "React Framework", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
  { name: "JavaScript", category: "Core Language", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
  { name: "HTML", category: "Markup", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
  { name: "CSS", category: "Styling", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
  { name: "Tailwind", category: "CSS Framework", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Canva", category: "Design Tool", logo: "/canva.jpg" },
  { name: "CapCut", category: "Video Editing", logo: "/capcut.png" },
  { name: "Affinity", category: "Design Suite", logo: "/affinity.webp" },
  { name: "PHP", category: "Backend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" },
  { name: "Laravel", category: "PHP Framework", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg" },
];
