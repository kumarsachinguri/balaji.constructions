import { Service } from "../model/Service";
import ServiceCard from "./ServiceCard";

const ServiceList = () => {
  const services: Service[] = [
    {
      img: "warehouse1.jpg",
      heading: "Cold Store Construction",
      text: "Balaji Constructions offers top-notch cold store construction services to keep your perishable goods at optimal temperatures. Our cold storage solutions are tailored to meet industry standards, ensuring energy efficiency, temperature control, and safety. We use cutting-edge insulation and refrigeration systems to build facilities that preserve the quality and extend the shelf life of your products. Trust us to create a reliable cold storage environment that supports your business needs.",
      btn: "",
    },
    {
      img: "greenhouse.jpg",
      heading: "Warehouse Construction",
      text: "At Balaji Constructions, we specialize in designing and building state-of-the-art warehouses that meet your specific storage needs. Our warehouses are built with robust structures, efficient layouts, and the latest technology to ensure maximum storage capacity and ease of operations. Whether you need a small storage unit or a large-scale distribution center, we deliver high-quality solutions that enhance your business efficiency and growth.",
      btn: "",
    },
    {
      img: "motar1.jpg",
      heading: "Plant Construction",
      text: "With extensive experience in industrial construction, Balaji Constructions excels in building advanced plant facilities. We understand the complexities of plant construction and offer customized solutions that adhere to your industry’s regulations and standards. Our team of experts manages every aspect of the project, from planning and design to execution and finishing. We ensure that your plant is not only functional and efficient but also scalable for future expansion.",
      btn: "",
    },
  ];

  const serviceList = services.map((service: Service) => (
    <ServiceCard service={service} key={service.heading} />
  ));
  return (
    <div className='bg-amber-50 py-20'>
      <h2 className='heading-2 text-center mb-8'>Our Services</h2>
      <section className='services maxwidth mx-auto px-4'>
        {serviceList}
      </section>
    </div>
  );
};

export default ServiceList;
