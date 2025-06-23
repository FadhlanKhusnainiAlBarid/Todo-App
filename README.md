# Todo App - React & JSON Server

Aplikasi Todo List interaktif yang dibangun dengan React, Vite, dan JSON Server. Aplikasi ini menyediakan fitur CRUD lengkap dengan drag & drop untuk mengurutkan todo, animasi, dan notifikasi.

## 🚀 Fitur

- ✅ **CRUD Operations**: Create, Read, Update, Delete todos
- 🔄 **Drag & Drop**: Ubah urutan todo dengan drag and drop
- 🎯 **Mark as Complete**: Tandai todo sebagai selesai/belum selesai
- 🎨 **Modern UI**: Interface yang clean dengan Tailwind CSS dan Flowbite React
- 🔔 **Notifications**: Notifikasi toast untuk feedback user
- 📱 **Responsive Design**: Tampilan yang optimal di berbagai perangkat
- ⚡ **Real-time Updates**: Sinkronisasi data real-time dengan JSON Server
- 🎭 **Animations**: Animasi smooth dengan GSAP

## 🛠️ Tech Stack

### Frontend (Client)

- **React 19** - Library JavaScript untuk UI
- **Vite** - Build tool dan dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Flowbite React** - Component library
- **Axios** - HTTP client untuk API calls
- **@dnd-kit** - Drag and drop functionality
- **GSAP** - Animation library
- **React Toastify** - Toast notifications
- **SweetAlert2** - Beautiful alerts dan modals
- **Lucide React** - Icon library

### Backend (Server)

- **JSON Server** - Mock REST API

## 📋 Prerequisites

Pastikan Anda telah menginstall:

- Node.js (versi 14 atau lebih baru)
- npm atau yarn

## 🚀 Instalasi dan Menjalankan Project

### 1. Clone Repository

```bash
git clone <repository-url>
cd p1-gc02-FadhlanKhusnainiAlBarid
```

### 2. Setup Server (JSON Server)

```bash
cd server
npm install
npm start
# Server akan berjalan di http://localhost:3000
```

### 3. Setup Client (React App)

Buka terminal baru:

```bash
cd client
npm install
npm run dev
# Client akan berjalan di http://localhost:5173
```

## 📖 Cara Penggunaan

1. **Menambah Todo Baru**

   - Ketik todo di input field
   - Tekan Enter atau klik tombol Plus
   - Todo baru akan muncul di daftar

2. **Mengedit Todo**

   - Klik icon edit pada todo yang ingin diubah
   - Ubah teks di modal yang muncul
   - Klik save untuk menyimpan perubahan

3. **Menghapus Todo**

   - Klik icon delete pada todo
   - Konfirmasi penghapusan di modal

4. **Menandai Todo Selesai**

   - Klik checkbox di sebelah todo
   - Todo yang selesai akan dipindah ke section "Completed"

5. **Mengatur Urutan Todo**

   - Drag and drop todo ke posisi yang diinginkan
   - Urutan akan tersimpan secara otomatis

6. **Melihat Todo yang Selesai**
   - Klik dropdown "Show Completed Tasks"
   - Todo yang selesai akan ditampilkan

## 📁 Struktur Project

```
p1-gc02-FadhlanKhusnainiAlBarid/
├── client/                    # Frontend React app
│   ├── src/
│   │   ├── components/       # React components
│   │   │   ├── navbar.jsx
│   │   │   ├── listTodoSection.jsx
│   │   │   ├── listTodo.jsx
│   │   │   ├── todo.jsx
│   │   │   ├── todoCompleted.jsx
│   │   │   ├── modalUpdate.jsx
│   │   │   └── modalDelete.jsx
│   │   ├── hooks/           # Custom React hooks
│   │   ├── assets/          # Static assets
│   │   ├── App.jsx          # Main App component
│   │   └── main.jsx         # Entry point
│   ├── package.json
│   └── vite.config.js
└── server/                   # Backend JSON Server
    ├── db.json              # Database file
    └── package.json
```

## 🔧 Scripts Available

### Client

- `npm run dev` - Menjalankan development server
- `npm run build` - Build untuk production
- `npm run preview` - Preview build production
- `npm run lint` - Menjalankan ESLint

### Server

- `npm start` - Menjalankan JSON Server

## 🌐 API Endpoints

JSON Server menyediakan REST API di `http://localhost:3000`:

- `GET /todos` - Mendapatkan semua todos
- `POST /todos` - Membuat todo baru
- `PUT /todos/:id` - Update todo
- `PATCH /todos/:id` - Update sebagian data todo
- `DELETE /todos/:id` - Hapus todo

## 🎨 Komponen Utama

- **Navbar**: Header aplikasi
- **ListTodoSection**: Container utama untuk todo list
- **ListTodo**: Komponen utama yang mengelola state dan logic
- **Todo**: Item todo individual dengan fitur edit, delete, complete
- **TodoCompleted**: Tampilan untuk todo yang sudah selesai
- **ModalUpdate**: Modal untuk mengedit todo
- **ModalDelete**: Modal konfirmasi penghapusan

## 📱 Responsive Design

Aplikasi ini dioptimalkan untuk berbagai ukuran layar:

- Mobile (sm)
- Tablet (md)
- Desktop (lg, xl, 2xl)

## 🔮 Future Enhancements

- [ ] Authentication dan user management
- [ ] Categories/tags untuk todos
- [ ] Due dates dan reminders
- [ ] Search dan filter functionality
- [ ] Dark mode
- [ ] Offline support dengan PWA
- [ ] Export/import todos

## 🤝 Contributing

1. Fork repository
2. Buat branch feature (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push ke branch (`git push origin feature/amazing-feature`)
5. Buat Pull Request

## 📄 License

Project ini dibuat untuk keperluan pembelajaran.

---

Dibuat dengan ❤️ menggunakan React dan Vite
