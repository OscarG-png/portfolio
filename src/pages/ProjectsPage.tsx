import { projects } from '../Data/Projects';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import { Link } from 'react-router-dom';

export default function Projects() {
    return (
        <div className="flex flex-col items-center justify-center gap-5 mt-10">
            <h1 className="text-4xl">Projects i've worked on</h1>
            {projects.map((project) => (
                <Accordion key={project.id} type="single" collapsible>
                    <AccordionItem value={project.name}>
                        <AccordionTrigger className="text-2xl">
                            {project.name}
                        </AccordionTrigger>
                        <AccordionContent>
                            <div className="flex flex-col gap-5">
                                <Link
                                    to={project.link}
                                    className="text-blue-500 hover:underline"
                                >
                                    View project
                                </Link>
                                {project.description}
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            ))}
        </div>
    );
}
