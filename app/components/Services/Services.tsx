import servicesData from "@/app/servicedata/servicedata";
import Image from "next/image";
import Link from "next/link";
import { FcServices } from "react-icons/fc";

const Services = ({ showAll = false }) => {
  const displayedServices = showAll ? servicesData : servicesData.slice(0, 3);

  return (
    <div className="container pb-6 pt-8">
      <div className="text-white  py-8 px-5 md:px-20 flex flex-col items-center justify-center w-full gap-[2rem]">
        <h2 className="text-white flex items-center gap-2 font-[700] text-center text-[1.8rem]">
          Awesome <FcServices />
          <span className="text-[#008080]">Services</span>
        </h2>
        <p className="text-center text-[0.8rem] lg:text-[1.2rem] md:text-[0.9rem] xl:text-[1rem] w-[100%] lg:w-[50%] xl:w-[50%] md:w-[80%] text-gray-300 mb-2">
          I offer personalized services, covering planning and execution, to
          meet your unique needs.
        </p>
        <div className="grid gap-[2.5rem] md:grid-cols-2 lg:grid-cols-3 select-none">
          {displayedServices.map((service) => (
            <div
              key={service.id}
              className="border flex items-center justify-center flex-col border-gray-700 rounded-[10px] px-2 py-6 bg-[#10141d52] hover:bg-[#10141db9] transition-all"
            >
              <Image
                src={service.imgUrl}
                alt={service.title}
                height={1000}
                width={800}
                className="h-[60px] mb-3 w-[60px] rounded-[200px]"
              />
              <h3 className="text-[1.2rem] font-semibold text-gray-200 mb-4 text-center text-nowrap">
                {service.title}
              </h3>
              <p className="text-gray-400 text-center text-[0.9rem]">
                {service.description}
              </p>
            </div>
          ))}
        </div>
        {!showAll && (
          <div className="text-center mt-2">
            <Link href="/service">
              <button className="px-8 py-2 bg-gray-900 border border-gray-800 text-white rounded-xl transition-all hover:bg-gray-700">
                See All
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Services;
