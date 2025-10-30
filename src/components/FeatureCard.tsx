type FeatureCardProps = {
  icon: string;
  title: string;
  text: string;
};
export function FeatureCard({ icon, title, text }: FeatureCardProps) {
  return (
    <div
      className="max-w-xs shadow-md rounded-md bg-white p-2 text-center 
    hover:scale-110 hover:shadow-xl 
    transition-transform transition-shadow ease-out duration-300"
    >
      <div
        className="text-3xl bg-gray-300 rounded-full inline-block p-2 
      hover:rotate-45 transition-transform duration-500 ease-in-out"
      >
        {icon}
      </div>
      <h3 className="font-bold text-lg mt-2">{title}</h3>
      <p className="text-gray-500 mt-2">{text}</p>
    </div>
  );
}
