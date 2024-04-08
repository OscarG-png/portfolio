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
            </DialogContent>
        </Dialog>
    );
}
