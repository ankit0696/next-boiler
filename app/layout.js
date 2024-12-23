import "./globals.css";
import AuthProvider from "@/app/AuthProvider";

export const metadata = {
    title: "Create Next App", description: "Generated by create next app",
};

export default function RootLayout({children}) {
    return (
        <AuthProvider>
            <html lang="en">
            <body>
            {children}
            </body>
            </html>
        </AuthProvider>
    );
}
