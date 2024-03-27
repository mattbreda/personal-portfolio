import { cn } from "@/utils/cn";

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  action
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  action?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4",
        className
      )}
    >
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        {icon}
        <div className="font-bold mb-2 mt-2 leading-4">
          {title}
        </div>
        <div className="font-normal text-xs">
          {description}
        </div>
       
      </div>
      {action ? <div className="mt-2">{action}</div> : null}
    </div>
  );
};
