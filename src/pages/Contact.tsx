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
            <DialogTrigger>Contact</DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Contact Me</DialogTitle>
                    <DialogDescription>
                        Currently the best way to contact me is on Linkedin or
                        by email.
                    </DialogDescription>
                </DialogHeader>
                <div className="flex flex-col gap-2">
                    <a
                        href="mailto:oscar.gamez88@gmail.com"
                        className="hover:underline"
                    >
                        oscar.gamez88@gmail.com
                    </a>
                    <a
                        href="https://www.linkedin.com/in/oscarrgamez/message/"
                        className="hover:underline"
                    >
                        Linkedin
                    </a>
                </div>
            </DialogContent>
        </Dialog>
    );
}
