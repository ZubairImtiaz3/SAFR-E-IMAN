import ContentWithTimeout from "@/components/app/loader/ContentWithTimeout";
import Loader from "@/components/ui/loader/InitialLoader";
import "./globals.css";
import { Raleway, Poppins } from "next/font/google";

const raleway = Raleway({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-raleway",
});

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-poppins",
});

export const metadata = {
  title: {
    default: "SAFR-E-IMAN",
    template: "%s",
  },
  description:
    "Travel & Tourism Agency located in Qila Ahmad Abad, District Narowal, Punjab Pakistan. We Provide all Airline Tickets, Services of UMRAH, Visa processing of Saudia Arabia and visit Visas of multiple Countries. We provide freedom to our Clients to make thier own Travel plans.",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    shortcut: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">
        <body className={`${raleway.variable} ${poppins.variable}`}>
          <ContentWithTimeout>{children}</ContentWithTimeout>
        </body>
      </html>
    </>
  );
}
