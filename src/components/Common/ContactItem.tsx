interface ContactItemProps {
  icon: React.ReactNode;
  text: string;
}

const ContactItem = ({ icon, text }: ContactItemProps) => {
  return (
    <div className="flex items-center gap-2 group cursor-pointer transition-all duration-500 overflow-hidden hover:w-[280px] w-[56px]">
      <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-all duration-300 shrink-0">
        {icon}
      </div>
      <p className="text-muted-foreground group-hover:text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">
        {text}
      </p>
    </div>
  );
};

export default ContactItem;
