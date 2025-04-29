export default function Skills() {
  return (
    <div className="flex flex-col items-center justify-center max-w-2xl mx-auto p-4">
      <div className="w-full max-w-2xl">
        <h2 className="text-2xl font-bold text-left mb-4">Skills</h2>
        <div className="flex flex-wrap gap-2 justify-center">
          {[
            "Brand Strategy",
            "Content Creation",
            "Graphic Design",
            "Copywriting",
            "Social Media",
            "Video Production and Editing",
            "Web Design and User Experience (UX)",
            "Adobe Creative Suite",
            "Canva",
            "Hootsuite",
            "Project Management",
            "Team Collaboration",
            "Brand Identity Development",
            "Rebranding and Positioning",
            "Commitment to Continuous Learning",
            "+ More",
          ].map((skill) => (
            <span
              key={skill}
              className="bg-[rgb(15,21,31)] border border-[rgba(204,204,204,0.1)] text-white px-4 py-3 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
