import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  Form,
  FormControl,
  // FormDescription,
  FormField,
  FormItem,
  // FormLabel,
  FormMessage,
} from "./ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const ContactForm = () => {
  const formSchema = z.object({
    name: z.string().trim().min(2, {
      message: "Please use at least 2 characters.",
    }),
    email: z.string().trim().email({
      message: "Please provide a valid email.",
    }),
    message: z.string().trim().min(2, {
      message: "Please use at least 2 characters.",
    }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='grid grid-cols-1 lg:grid-cols-4 gap-4'
        >
          <div className='lg:col-span-2'>
            <FormField
              control={form.control}
              name='name'
              render={({ field }) => (
                <FormItem>
                  {/* <FormLabel>Name</FormLabel> */}
                  <FormControl>
                    <Input placeholder='Name' {...field} />
                  </FormControl>
                  {/* <FormDescription>
                  This is your public display name.
                  </FormDescription> */}
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className='lg:col-span-2'>
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem>
                  {/* <FormLabel>Email</FormLabel> */}
                  <FormControl>
                    <Input placeholder='Email' {...field} />
                  </FormControl>
                  {/* <FormDescription>
                  This is your public display email.
                  </FormDescription> */}
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className='lg:col-span-3'>
            <FormField
              control={form.control}
              name='message'
              render={({ field }) => (
                <FormItem>
                  {/* <FormLabel>Message</FormLabel> */}
                  <FormControl>
                    <Input placeholder='Message' {...field} />
                  </FormControl>
                  {/* <FormDescription>
                  This is your public display message.
                  </FormDescription> */}
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button type='submit'>Submit</Button>
        </form>
      </Form>
    </>
    // <form className='w-3/4 mx-auto grid grid-cols-4 gap-4'>
    //   <Input
    //     type='text'
    //     id='name'
    //     name='name'
    //     placeholder='Name'
    //     className='col-span-2'
    //   />
    //   <Input
    //     type='email'
    //     id='email'
    //     name='email'
    //     placeholder='Email'
    //     className='col-span-2'
    //   />
    //   <Input
    //     type='text'
    //     id='message'
    //     name='message'
    //     placeholder='Message'
    //     className='col-span-3'
    //   />
    //   <Button type='submit' variant='outline' className='col-span-1'>
    //     Submit
    //   </Button>
    // </form>
  );
};

export default ContactForm;
