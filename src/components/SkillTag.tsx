export function SkillTag({skill}: Readonly<{ skill: string }>) {
  return (
    <div
      className="px-3 py-1 bg-muted/80 backdrop-blur-sm rounded-md text-sm border border-purple-500/10 shadow-sm"
      key={skill}
    >
      {skill}
    </div>
  );
}