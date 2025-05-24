// import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
// import { ClerkProvider } from "@clerk/nextjs";
// import { ThemeProvider } from "@/components/ThemeProvider";
// import NavBar from "@/components/NavBar";
// import Sidebar from "@/components/Sidebar";
// import { Toaster } from "react-hot-toast"
// import Head from "next/head";

// const geistSans = Geist({
  
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata: Metadata = {
//   title: "konnekt",
//   description: "A modern social media application powered by Next.js",
//   icons: {
//     icon: "/favicon.ico", // Default icon
//     shortcut: "/favicon.ico", // Browser shortcut icon
//     apple: "/favicon.ico", // Apple devices
//   },
// };


// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <ClerkProvider>
//       <html lang="en" suppressHydrationWarning>
//         <body
//           className={`${geistSans.variable} ${geistMono.variable} antialiased`}
//         >
//           <ThemeProvider
//             attribute="class"
//             defaultTheme="system"
//             enableSystem
//             disableTransitionOnChange
//           >    
//             <div className="min-h-screen">
//               <NavBar />
//               <main className="py-8">
//                 {/* container to center the content */}
//                 <div className="max-w-7xl mx-auto px-4">
//                   <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
//                     <div className="hidden lg:block lg:col-span-3">
//                       <Sidebar />
//                     </div>
//                     <div className="lg:col-span-9">{children}</div>                    
//                   </div>
//                 </div>                
//               </main>  
//             </div>   
//             <Toaster />         
//           </ThemeProvider>         
//         </body>
//       </html>
//     </ClerkProvider>
//   );
// }

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/components/ThemeProvider";
import NavBar from "@/components/NavBar";
import Sidebar from "@/components/Sidebar";
import { Toaster } from "react-hot-toast";
import Head from "next/head"; // <-- Import Head

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "konnekt",
  description: "A modern social media application powered by Next.js",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        {/* Add <Head> to manually include favicon */}
        <Head>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="min-h-screen">
              <NavBar />
              <main className="py-8">
                <div className="max-w-7xl mx-auto px-4">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    <div className="hidden lg:block lg:col-span-3">
                      <Sidebar />
                    </div>
                    <div className="lg:col-span-9">{children}</div>
                  </div>
                </div>
              </main>
            </div>
            <Toaster />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
