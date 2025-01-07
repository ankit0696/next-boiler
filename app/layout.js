import "./globals.css";
import AuthProvider from "@/app/AuthProvider";
import { config } from "@/config";

export const metadata = {
    title: config.appName, description: config.appDescription,
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
