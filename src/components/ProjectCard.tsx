import { Card, CardContent } from "@/components/ui/card";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  location: string;
  year: string;
  onClick: () => void;
}

const ProjectCard = ({ title, description, image, location, year, onClick }: ProjectCardProps) => {
  return (
    <Card
      className="overflow-hidden group cursor-pointer hover:shadow-hover transition-all duration-300"
      onClick={onClick}
    >
      <CardContent className="p-0">
        <div className="relative h-80 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/50 to-transparent flex flex-col justify-end p-6">
            <h3 className="text-background font-serif text-2xl font-bold mb-2">
              {title}
            </h3>
            <p className="text-background/90 text-sm mb-2 line-clamp-2">
              {description}
            </p>
            <div className="flex gap-4 text-background/80 text-sm">
              <span>📍 {location}</span>
              <span>📅 {year}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
