import { ProjectCard } from '@/components/projects/ProjectCard';
import { projects } from '@/config/Projects';
import { Brain, Monitor, Wrench } from 'lucide-react';

export default function MyWorkSection() {
  const websites = projects.filter((p) => p.category === 'website' || !p.category);
  const aiProjects = projects.filter((p) => p.category === 'ai');
  const toolProjects = projects.filter((p) => p.category === 'tool');

  return (
    <section id="my-work" className="mt-16 md:mt-20">
      <div className="flex flex-col items-center justify-center mt-8">
        <h2 className="text-3xl font-bold text-center whitespace-pre-line">
          My Work{"\n"}Projects
        </h2>
      </div>

      {aiProjects.length > 0 && (
        <div className="mx-auto mt-12 w-full max-w-6xl">
          <div className="mb-4 flex items-center gap-2">
            <Brain className="h-5 w-5 text-[#4ADE80]" />
            <h3 className="text-xl font-semibold">AI Tools</h3>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {aiProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      )}

      {toolProjects.length > 0 && (
        <div className="mx-auto mt-12 w-full max-w-6xl">
          <div className="mb-4 flex items-center gap-2">
            <Wrench className="h-5 w-5 text-orange-400" />
            <h3 className="text-xl font-semibold">Tools</h3>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {toolProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      )}

      <div className="mx-auto mt-12 w-full max-w-6xl">
        <div className="mb-4 flex items-center gap-2">
          <Monitor className="h-5 w-5 text-blue-400" />
          <h3 className="text-xl font-semibold">Websites</h3>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {websites.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
