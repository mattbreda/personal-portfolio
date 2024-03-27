export const ContactCard = ({
  title,
  action,
}: {
  title?: string | React.ReactNode;
  action?: string | React.ReactNode;
}) => {
  return (
    <div className="w-full rounded-xl bg-neutral-700 text-slate-100 flex flex-col items-center py-10 p-2.5">
      <div className="text-lg text-green-500 mb-5">{title}</div>
      <div className="flex flex-row items-center gap-x-5">{action}</div>
    </div>
  );
};
