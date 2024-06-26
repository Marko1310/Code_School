/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        border: 'var(--border)',
        input: 'var(--input)',
        ring: 'var(--ring)',
        background: {
          admin: 'var(--background-admin)',
          user: 'var(--background-user)',
        },
        // 'var(--background)',
        foreground: 'var(--foreground)',
        admin: {
          DEFAULT: 'var(--admin)',
          foreground: 'var(--admin-foreground)',
        },
        user: 'var(--user)',
        primary: {
          DEFAULT: 'var(--primary)',
          foreground: 'var(--primary-foreground)',
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
          foreground: 'var(--secondary-foreground)',
        },
        destructive: {
          DEFAULT: 'var(--destructive)',
          foreground: 'var(--destructive-foreground)',
        },
        muted: {
          DEFAULT: 'var(--muted)',
          foreground: 'var(--muted-foreground)',
        },
        accent: {
          DEFAULT: 'var(--accent)',
          foreground: 'var(--accent-foreground)',
        },
        popover: {
          DEFAULT: 'var(--popover)',
          foreground: 'var(--popover-foreground)',
        },
        card: {
          DEFAULT: 'var(--card)',
          1: 'var(--card-1)',
          2: 'var(--card-2)',
          3: 'var(--card-3)',
          4: 'var(--card-4)',
        },
        text: {
          DEFAULT: 'var(--text)',
        },
        hover: {
          DEFAULT: 'var(--hover)',
          select: 'var(--hover-select)',
        },
        disabled: {
          DEFAULT: 'var(--disabled)',
          foreground: 'var(--disabled-foreground)',
        },
        success: {
          DEFAULT: 'var(--success)',
        },
        borderRadius: {
          lg: 'var(--radius)',
          md: 'calc(var(--radius) - 2px)',
          sm: 'calc(var(--radius) - 4px)',
        },
      },
    },
  },
  plugins: [],
};
