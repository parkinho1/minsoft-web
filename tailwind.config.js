/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 밝은 배경용 팔레트
        primary: {
          DEFAULT: "#0F172A", // 진한 네이비 (텍스트, 강조용)
          light: "#334155",   // 부드러운 네이비 (서브 텍스트)
        },
        accent: {
          DEFAULT: "#3B82F6", // 밝은 블루 (버튼, 포인트)
          hover: "#2563EB",   // 블루 호버
        },
        bg: {
          white: "#FFFFFF",
          gray: "#F8FAFC",    // 아주 밝은 회색 배경
        }
      },
      fontFamily: {
        sans: ['Pretendard', 'sans-serif'],
      }
    },
  },
  plugins: [],
}