import { ContactsBlock } from "@/components/containers/ContactsBlock";
import { GrowingLine } from "@/components/ui/GrowingLine";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";

export default function Contact() {
  return (
    <main className="flex md:h-screen min-h-screen flex-col items-center justify-between max-md:pb-2.5 pt-2.5 md:pt-10 w-full">
      <div className="max-w-[1400px] mx-auto w-full h-full ">
        <div className="w-full h-full px-2.5 ">
          <TextGenerateEffect
            words="Contacts"
            className="text-3xl md:text-5xl text-green-500"
          />
          <GrowingLine />
          <div className="bg-neutral-700 bg-dot-white/[0.2] w-full rounded-xl py-10 p-2.5 my-2.5">
            <TextGenerateEffect
              words="For any additional information, quotation or request, don't hesitate to contact me"
              className="text-2xl md:text-3xl text-green-500 mt-0"
            />
          </div>
          <ContactsBlock />
          <GrowingLine className="mt-2.5" />
          <div className="bg-neutral-700 bg-grid-white/[0.2] w-full rounded-xl py-10 p-2.5 my-2.5 flex flex-grow items-center">
            <TextGenerateEffect
              words="Newsletter coming soon... ⏳"
              className=" text-5xl text-green-500"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
