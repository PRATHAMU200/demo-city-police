import Image from "next/image";

const RightSidebar = () => {
  return (
    <div className="fixed top-[24%]  right-0 w-20 bg-gray-200 p-1 py-4 hidden md:flex flex-col shadow-lg rounded-l-3xl">
      <a
        href="#"
        className="flex flex-col items-center mb-2"
        title="National Cybercrime Reporting"
      >
        <Image
          src="/1.png"
          alt="National Cybercrime Reporting"
          width={65}
          height={65}
        />
        {/* <span className="text-sm text-center">
          National Cybercrime Reporting
        </span> */}
      </a>
      <a
        href="#"
        className="flex flex-col items-center mb-2"
        title="Block Lost/Stolen Mobile"
      >
        <Image
          src="/2.png"
          alt="Block Lost/Stolen Mobile"
          width={65}
          height={65}
        />
        {/* <span className="text-sm text-center">Block Lost/Stolen Mobile</span> */}
      </a>
      <a
        href="#"
        className="flex flex-col items-center mb-2"
        title="Report Industry Grievance"
      >
        <Image
          src="/3.png"
          alt="Report Industry Grievance"
          width={65}
          height={65}
        />
        {/* <span className="text-sm text-center">Report Industry Grievance</span> */}
      </a>
      <a
        href="#"
        className="flex flex-col items-center mb-1"
        title="Know Mobile Connections"
      >
        <Image
          src="/4.png"
          alt="Know Mobile Connections"
          width={65}
          height={65}
        />
        {/* <span className="text-sm text-center">Know Mobile Connections</span> */}
      </a>
      <a
        href="#"
        className="flex flex-col items-center"
        title="Social Media Complaints"
      >
        <Image
          src="/5.png"
          alt="Social Media Complaints"
          width={65}
          height={65}
        />
        {/* <span className="text-sm text-center">Social Media Complaints</span> */}
      </a>
    </div>
  );
};

export default RightSidebar;
