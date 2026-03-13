# React + Vite
# PhotoStack - Internship Assignment

A responsive, high-performance Photo Gallery Web App built for the Celebrare frontend internship evaluation.

## 🚀 Live Demo

[photo-stack-liard.vercel.app]

## 🛠️ Tech Stack
- **React + Vite** (Core Framework)
- **Tailwind CSS** (Styling)
- **Lucide React** (Icons)
- **Picsum API** (Data Source)

## ✨ Core Features
- **Fetch 30 Photos**: Automatic loading from Picsum API.
- **Real-time Filter**: Instant search by author name using `useMemo`.
- **Favourite System**: Add/Remove photos from collection using `useReducer`.
- **Persistence**: Favourites are saved in `localStorage`.
- **Responsive Grid**: Optimised layout for Desktop (4 cols), Tablet (2 cols), and Mobile (1 col).
- **Performance**: Optimized with React `useCallback` and `useMemo` hooks.

## 📦 Installation & Run
1. Clone the repository:
   ```bash
   git clone https://github.com/CreateWithLalit/PhotoStack.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run development server:
   ```bash
   npm run dev
   ```

## 📜 Assignment Rules Followed
- [x] No external UI libraries (Tailwind only)
- [x] Strict use of `useReducer` for state management
- [x] Custom hook `useFetchPhotos`
- [x] Functional components only
- [x] Responsive Design

---

