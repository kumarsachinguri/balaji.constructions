import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Form = () => {
  return (
    <form className='w-3/4 mx-auto grid grid-cols-4 gap-4'>
      <Input
        type='text'
        id='name'
        name='name'
        placeholder='Name'
        className='col-span-2'
      />
      <Input
        type='email'
        id='email'
        name='email'
        placeholder='Email'
        className='col-span-2'
      />
      <Input
        type='text'
        id='message'
        name='message'
        placeholder='Message'
        className='col-span-3'
      />
      <Button type='submit' variant='outline' className='col-span-1'>
        Submit
      </Button>
    </form>
  );
};

export default Form;
