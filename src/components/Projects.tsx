import { useRef } from "react";
import { Card, CardContent } from "./ui/card";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";
import { DialogHeader } from "./ui/dialog";
import { Project } from "../model/Project";
import { PROJECT_LIST } from "../constants/projects.constant";
import { StringConstant } from "../constants/string.constant";

const Projects = () => {
  const plugin = useRef(
    Autoplay({
      delay: 2000,
      stopOnInteraction: true,
    })
  );

  const projects: Project[] = PROJECT_LIST;

  return (
    <section className='bg-amber-400 py-20 px-8'>
      {/* Project Heading */}
      <h2 className='maxwidth mx-auto text-center uppercase heading-2 mb-8'>
        {StringConstant.projectHeading}
      </h2>

      {/* Porject images slider/carousel */}
      <Carousel
        className='maxwidth mx-auto p-4 w-4/5'
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {/* Mapping over the projects */}
          {projects.map((project) => (
            <CarouselItem key={project.title}>
              <Card className='border-none'>
                <CardContent className='flex aspect-video items-center justify-center p-0'>
                  <Dialog>
                    <DialogTrigger asChild>
                      {/* Project image and dialog trigger */}
                      <img
                        src={"images/" + project.image}
                        alt={project.title}
                        className='w-full h-full cursor-pointer'
                      />
                    </DialogTrigger>
                    {/* Project details in dialog */}
                    <DialogContent className='max-w-sm md:max-w-lg sm:max-w-xl'>
                      <div className='flex items-center space-x-2'>
                        <div className='grid flex-1 gap-2'>
                          <img
                            src={"images/" + project.image}
                            alt={project.title}
                            className='w-full h-full pt-6'
                          />
                        </div>
                      </div>
                      <DialogHeader>
                        <DialogTitle>{project.title}</DialogTitle>
                        <DialogDescription>
                          {project.description}
                        </DialogDescription>
                      </DialogHeader>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};

export default Projects;
