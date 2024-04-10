import { projects } from '../Data/Projects';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import { motion } from 'framer-motion';

export default function Projects() {
    return (
        <motion.div
            initial={{ y: '100%' }}
            animate={{ y: '0%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            exit={{ opacity: 1 }}
            className="flex flex-col items-center justify-center gap-5 mt-10"
        >
            <h1 className="mb-4 text-4xl">Projects i've worked on</h1>
            {projects.map((project) => (
                <Accordion
                    key={project.id}
                    type="single"
                    collapsible
                    className="w-80"
                >
                    <AccordionItem value={project.name}>
                        <AccordionTrigger className="text-2xl">
                            {project.name}
                        </AccordionTrigger>
                        <AccordionContent>
                            <div className="flex flex-col gap-5">
                                <a
                                    href={project.link}
                                    className="text-blue-500 hover:underline"
                                >
                                    View project
                                </a>
                                {project.description}
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            ))}
        </motion.div>
    );
}
