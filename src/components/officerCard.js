import Image from "next/image";

const OfficerCard = ({ name, title, imageUrl }) => {
  return (
    <div
      className="min-w-[275px] bg-[#023347] bg-opacity-50 p-4 py-6 rounded-3xl shadow-md"
      title={name}
    >
      <Image
        src={imageUrl}
        alt={name}
        width={100}
        height={100}
        className="rounded-full mb-2"
      />
      <h3 className="text-lg font-semibold text-white mb-1">{name}</h3>
      <p className="text-xs text-white">{title}</p>
    </div>
  );
};

export default OfficerCard;
