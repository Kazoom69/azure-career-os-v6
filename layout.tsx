import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-deep-navy text-space-white">
        {children}
      </body>
    </html>
  );
}
