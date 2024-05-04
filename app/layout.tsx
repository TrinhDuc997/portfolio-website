// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import 'animate.css';
// import "./globals.css";
// const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Trịnh Xuân Đức",
//   icons: {
//     icon: {
//       url:"/favicon.png",
//       type:"image/png",
//       sizes:'32x32',
//     }
//   },
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <html><body>{children}</body></html> ;
}
