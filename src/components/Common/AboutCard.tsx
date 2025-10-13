interface Props {
  title: string;
  description: string;
  svg: React.ReactNode;
}

const AboutCard = ({ title, description, svg }: Props) => {
  return (
    <div className="gradient-border p-6 card-hover">
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-full bg-primary/10">{svg}</div>
        <div className="text-left">
          <h4 className="font-semibold text-lg">{title}</h4>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
