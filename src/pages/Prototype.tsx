import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/data";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const Prototype = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <h1 className="font-serif text-5xl font-bold text-center mb-4">Prototype</h1>
          <p className="text-xl text-center opacity-90">
            Our completed and ongoing furniture projects
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                {...project}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Project Detail Dialog */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="font-serif text-3xl">
                  {selectedProject.title}
                </DialogTitle>
              </DialogHeader>
              <div className="space-y-6">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-96 object-cover rounded-lg"
                />
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-semibold">Location:</span>
                    <p className="text-muted-foreground">{selectedProject.location}</p>
                  </div>
                  <div>
                    <span className="font-semibold">Year:</span>
                    <p className="text-muted-foreground">{selectedProject.year}</p>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-3">Project Description</h3>
                  <p className="text-foreground/80 leading-relaxed">
                    {selectedProject.description}
                  </p>
                  <p className="text-foreground/80 leading-relaxed mt-4">
                    This project showcases our commitment to delivering exceptional quality
                    and design. Every piece of furniture was carefully selected and customized
                    to meet the client's specific requirements, ensuring a perfect balance
                    between functionality and aesthetics. The result is a harmonious space
                    that reflects the client's personality while maintaining timeless appeal.
                  </p>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Prototype;
