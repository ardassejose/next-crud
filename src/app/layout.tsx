import "./globals.css";
import "tailwindcss/tailwind.css";

export const metadata = {
  title: "Next Crud",
  description: "CRUD gerado a partir do Next.js + Firebase Firestore",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
