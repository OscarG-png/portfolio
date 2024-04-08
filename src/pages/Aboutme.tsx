import { aboutMe } from '../Data/AboutMe';

export default function AboutMe() {
    return (
        <>
            <div className="flex flex-col items-center justify-center h-screen gap-5">
                <h1 className="text-4xl">About me</h1>
                <p>{aboutMe}</p>
            </div>
        </>
    );
}
