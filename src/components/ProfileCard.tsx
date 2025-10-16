type ProfileCardProps = {
  name: string;
  title: string;
  image: string;
  description: string;
};

export function ProfileCard({
  name,
  title,
  image,
  description,
}: ProfileCardProps) {
  return (
    <div className="max-w-xs rounded-md shadow-lg bg-white text-center p-6">
      <img
        className="block mx-auto rounded-full w-24 h-24 border-2 border-gray-200 shadow"
        src={image}
        alt={name}
      />
      <div>
        <h2 className="text-lg font-bold mt-3">{name}</h2>
        <h3 className="text-sm text-gray-600">{title}</h3>
        <p className="py-2 text-gray-500">{description}</p>
        <button className="bg-blue-500 text-white rounded-md hover:bg-blue-700 p-1 text-sm">
          Kontakt
        </button>
      </div>
    </div>
  );
}
