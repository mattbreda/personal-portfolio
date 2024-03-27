"use client";
import {
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTelegram,
  IconBrandWhatsapp,
  IconCopy,
  IconMailForward,
} from "@tabler/icons-react";
import Link from "next/link";
import { ContactCard } from "../ui/ContactCard";
import toast, { Toaster } from "react-hot-toast";

const MailAction = () => {
  const copyEmail = () => {
    navigator.clipboard.writeText("info@matteobreda.dev");
    toast.success('Email copied to clipboard!', {
        style: {
          background: '#404040',
          color:'#48bb78'
        },
        iconTheme: {
            primary: '#48bb78',
            secondary: '#404040',
          },
      });
/*     toast.success("Email copied to clipboard!",{className: 'bg-green-500 text-neutra-500',});
 */  };
  return (
    <>
      <Link href="mailto:info@matteobreda.dev">
        <IconMailForward size={48} className="text-green-500" />
      </Link>
      <div className="cursor-pointer" onClick={() => copyEmail()}>
        <IconCopy size={48} className="text-green-500" />
      </div>
    </>
  );
};
const DirectActions = () => {
  return (
    <>
      <Link href="https://wa.me/393495809133">
        <IconBrandTelegram size={48} className="text-green-500" />
      </Link>
      <Link href="https://wa.me/393495809133">
        <IconBrandWhatsapp size={48} className="text-green-500" />
      </Link>
    </>
  );
};
const SocialsActions = () => {
  return (
    <>
      <IconBrandLinkedin size={48} className="text-green-500" />
      <IconBrandInstagram size={48} className="text-green-500" />
    </>
  );
};

const contacts = [
  {
    title: "Email: ",
    action: <MailAction />,
  },
  {
    title: "Direct messages: ",
    action: <DirectActions />,
  },
  {
    title: "Socials: ",
    action: <SocialsActions />,
  },
];

export const ContactsBlock = () => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-2.5">
      {contacts.map((c) => {
        return <ContactCard title={c.title} action={c.action} key={c.title} />;
      })}
    </div>
  );
};
