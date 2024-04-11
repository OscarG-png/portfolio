import {
    frontendSkills,
    backendSkills,
    programingLanguages,
    currentlyLearning,
} from '@/Data/SkillsData';

export default function Skills() {
    return (
        <>
            <div>
                <h1>Frontend Skills</h1>
                {frontendSkills.map((skill) => (
                    <div key={skill.id}>{skill.name}</div>
                ))}
            </div>
            <div>
                <h1>Backend Skills</h1>
                {backendSkills.map((skill) => (
                    <div key={skill.id}>{skill.name}</div>
                ))}
            </div>
            <div>
                <h1>Programming Languages</h1>
                {programingLanguages.map((skill) => (
                    <div key={skill.id}>{skill.name}</div>
                ))}
            </div>
            <div>
                <h1>Currently Learning</h1>
                {currentlyLearning.map((skill) => (
                    <div key={skill.id}>{skill.name}</div>
                ))}
            </div>
        </>
    );
}
