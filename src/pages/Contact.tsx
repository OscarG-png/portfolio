import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';

export default function Contact() {
    return (
        <Dialog>
            <DialogTrigger className="hover:underline">Contact</DialogTrigger>
            <DialogContent>
                <DialogHeader className="gap-3">
                    <DialogTitle className="text-2xl text-center">
                        Contact Me
                    </DialogTitle>
                    <DialogDescription>
                        Currently the best way to contact me is on Linkedin or
                        by email.
                    </DialogDescription>
                </DialogHeader>
                <div className="flex flex-col gap-2">
                    <a
                        href="mailto:oscar.gamez88@gmail.com"
                        className="hover:underline hover:text-blue-500"
                    >
                        oscar.gamez88@gmail.com
                    </a>
                    <a
                        href="https://www.linkedin.com/in/oscarrgamez/message/"
                        className="hover:underline hover:text-blue-500"
                    >
                        Linkedin
                    </a>
                </div>
            </DialogContent>
        </Dialog>
    );
}
