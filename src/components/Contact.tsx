import ContactForm from "./Form";

const Contact = () => {
  return (
    <section className='bg-amber-400'>
      <div className='maxwidth  py-12 grid grid-cols-1 lg:grid-cols-2 items-center p-4 gap-4 mx-auto'>
        <div className='heading maxwidth mx-auto'>
          <h2 className='text-3xl font-bold'>Do you have any questions?</h2>
          <h3 className='text-3xl uppercase'>Feel free to contact us!</h3>
        </div>
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
