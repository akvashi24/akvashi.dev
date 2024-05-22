const ProjectCard = ({ title, subtitle, link }) => {
  const isExternalLink = link.startsWith("http");
  return (
    <button className="hover:bg-gradient-to-r bg-zinc-500 from-blue-600 to-purple-600 rounded-xl p-px max-w-lg mb-8">
      <a
        href={link}
        target={isExternalLink ? "_blank" : "_self"}
        rel="noreferrer"
      >
        <div className="px-12 py-20 bg-neutral-900  border-2 border-neutral-400 shadow rounded-xl cursor-pointer">
          <div className="mx-auto text-left">
            <span className="block font-bold text-lg text-neutral-100">
              {title}
            </span>
            <span className="block  mb-4">Co-founder</span>
            <span className="block  max-w-lg">{subtitle}</span>
          </div>
        </div>
      </a>
    </button>
  );
};

export default ProjectCard;
