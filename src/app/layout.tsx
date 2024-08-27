import "../styles/theme.css";
import "./globals.css";
import { PrimeReactProvider } from "primereact/api";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const config = {
    ripple: true,
  };

  return (
    <html lang="en">
      <body className="m-0 p-0">
        <PrimeReactProvider value={config}>{children}</PrimeReactProvider>
      </body>
    </html>
  );
}
