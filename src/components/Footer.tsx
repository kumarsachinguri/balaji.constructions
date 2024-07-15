import Icon from "../core/Icon";
import {
  Card,
  CardHeader,
  CardTitle,
  // CardDescription,
  CardContent,
  // CardFooter,
} from "./ui/card";

const Footer = () => {
  return (
    <footer className='footer text-amber-50'>
      <section className='footer-grid maxwidth mx-auto'>
        <Card className='border-none bg-transparent'>
          <CardHeader>
            <CardTitle className='uppercase text-amber-400'>About Us</CardTitle>
          </CardHeader>
          <CardContent>
            <div className='flex flex-shrink-0 items-center mb-4'>
              <img src='images/logo-bc.png' alt='Logo' className='w-16' />
              <p className='flex flex-col'>
                <strong className='block font-black text-2xl leading-6 text-red-600'>
                  Bala ji
                </strong>
                <strong className='block font-black text-3xl leading-6 text-green-500'>
                  Constructions
                </strong>
              </p>
            </div>
            <p className='text-amber-50'>
              Balaji Constructions, established in the year 2005, as a
              manufacturer of finest Prefabricated Structures, Products and
              Building components.
            </p>
          </CardContent>
        </Card>
        <Card className='border-none bg-transparent'>
          <CardHeader>
            <CardTitle className='uppercase text-amber-400'>
              Contact Us
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className='flex flex-col gap-4'>
              <p className='text-amber-50 flex items-center gap-2'>
                <Icon name={"map-pin"} size={1.6} color='#fffbeb'></Icon>
                4PC2+G8V, Rajgarh Rd, near SBI, Azad Nagar, Hisar, Gangwa,
                Haryana 125007
              </p>
              <a
                className='text-amber-50 flex items-center gap-2'
                href='mailTo:sales@balajiconstructions.org.in'
              >
                <Icon name={"mail"} size={1.6} color='#fffbeb'></Icon>
                sales@balajiconstructions.org.in
              </a>
              <a
                href='tel:+91 83075 29392'
                className='text-amber-50 flex items-center gap-2'
              >
                <Icon name={"smartphone"} size={1.6} color='#fffbeb'></Icon>
                +91 83075-29392
              </a>
            </div>
          </CardContent>
        </Card>
      </section>
    </footer>
  );
};

export default Footer;
