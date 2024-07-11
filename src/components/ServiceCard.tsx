import { Service } from "../model/Service";

const ServiceCard = ({ service }: { service: Service }) => {
  return (
    <div className='w-full flex flex-col items-start gap-2 mb-4'>
      <img
        src={`images/${service.img}`}
        alt={service.heading}
        className='h-60 w-full object-cover'
      />
      <h3 className='heading-3 text-left'>{service.heading}</h3>
      <p className='text-justify'>{service.text.slice(0, 300)}...</p>
      <button className='bg-amber-400 py-2 px-4 text-slate-100 rounded-md font-bold'>
        View More
      </button>
    </div>
  );
};

export default ServiceCard;
