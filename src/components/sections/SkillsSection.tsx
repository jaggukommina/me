import { skills } from '@/data/skills';

export default function SkillsSection() {
  return (
    <div className="skills show">
      {Object.entries(skills).map(([category, skillList]) => (
        <div key={category}>
          <span>{category}</span>
          <ul>
            {skillList.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
