import { useState } from "react";
import Icon from "../core/Icon";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";

const Footer = () => {
  const [currentYear] = useState(new Date().getFullYear());

  return (
    <footer className='footer text-amber-50' id='contact'>
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
              Krishan Verma
              <br />
              CEO (Balaji Constructions)
              <br />
              <br />
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
                <Icon name={"user"} size={1.6} color='#fffbeb'></Icon>
                Krishan Verma
              </p>
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
      <section className='copyright maxwidth mx-auto text-slate-100 px-6 py-4'>
        <p className='text-sm'>
          Copyright © {currentYear}
          <a href='#' className='text-blue-500'>
            {" "}
            Balaji Constructions.{" "}
          </a>
          All Rights Reserved
        </p>
        <p className='text-sm'>
          Designed & Developed by
          <a
            href='https://kumarsachinguri.com/'
            target='_blank'
            className='text-blue-500'
          >
            {" "}
            Sachin Guri{" "}
            <Icon
              name={"external-link"}
              size={1}
              color='rgb(59 130 246)'
            ></Icon>
          </a>
        </p>
      </section>
    </footer>
  );
};

export default Footer;
