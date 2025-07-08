// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // 프로젝트 경로에 맞게 수정
  ],
  theme: {
    extend: {
      fontFamily: {
        nanum: ['NanumBarunGothic'],
        nanumbold: ['NanumBarunGothicBold', 'sans-serif'],
        nanumlight: ['NanumBarunGothicLight', 'sans-serif'],
        nanumultra: ['NanumBarunGothicUltraLight', 'sans-serif'],
        gmbold: ['gmarketbold', 'sans-serif'],
        gmlight: ['gmarketlight', 'sans-serif'],
        gmmedium: ['gmarketmedium', 'sans-serif'],
      },
    animation: {
      'spin-slow' : 'spin 30s linear infinite',
    },
    keyframes: {
        spinSlow: {
          '100%': { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
}
