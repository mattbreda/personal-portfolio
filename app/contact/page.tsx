import { ContactsBlock } from "@/components/containers/ContactsBlock";
import { GrowingLine } from "@/components/ui/GrowingLine";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import {
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTelegram,
  IconBrandWhatsapp,
  IconCopy,
  IconMailForward,
} from "@tabler/icons-react";
import Link from "next/link";

export default function Contact() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between max-md:pb-[5vh] p-2.5 pt-10 w-full">
      <div className="max-w-[1400px] mx-auto w-full">
        <TextGenerateEffect
          words="Contacts"
          className=" text-5xl text-green-500"
        />
        <GrowingLine />
        <div className="bg-neutral-700 bg-dot-white/[0.2] w-full rounded-xl py-10 p-2.5 my-2.5">
          <TextGenerateEffect
            words="For any additional information, quotation or request, don't hesitate to contact me"
            className=" text-3xl text-green-500 mt-0"
          />
        </div>
       <ContactsBlock />
        <GrowingLine className="mt-2.5" />
        <div className="bg-neutral-700 bg-grid-white/[0.2] w-full rounded-xl py-10 p-2.5 my-2.5">
          <TextGenerateEffect
            words="Newsletter coming soon... ⏳"
            className=" text-5xl text-green-500"
          />
        </div>
      </div>
    </main>
  );
}
