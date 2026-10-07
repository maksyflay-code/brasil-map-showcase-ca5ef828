import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

type ServicePhotosProps = {
  title: string;
  images: { src: string; alt: string }[];
};

export function ServicePhotos({ title, images }: ServicePhotosProps) {
  const [active, setActive] = useState(0);

  function changePhoto(direction: number) {
    setActive((current) => (current + direction + images.length) % images.length);
  }

  return (
    <figure
      className="relative m-0 aspect-[4/3] overflow-hidden lg:h-[500px] lg:aspect-auto"
      aria-label={`Fotos — ${title}`}
    >
      {images.map((image, index) => (
        <img
          key={image.src}
          src={image.src}
          alt={image.alt}
          aria-hidden={index !== active}
          loading="lazy"
          width={1200}
          height={900}
          className={`absolute inset-0 h-full w-full object-cover ${index === active ? "visible" : "invisible"}`}
        />
      ))}
      {images.length > 1 && (
        <div className="absolute bottom-4 right-4 flex items-center gap-1 bg-navy-deep/90 p-1 text-primary-foreground">
          <Button
            variant="ghost"
            size="icon"
            className="text-primary-foreground hover:bg-primary-foreground/15 hover:text-primary-foreground"
            aria-label={`Foto anterior — ${title}`}
            title="Foto anterior"
            onClick={() => changePhoto(-1)}
          >
            <ChevronLeft />
          </Button>
          <span className="min-w-12 text-center text-sm tabular-nums" aria-live="polite" aria-atomic="true">
            {active + 1} / {images.length}
          </span>
          <Button
            variant="ghost"
            size="icon"
            className="text-primary-foreground hover:bg-primary-foreground/15 hover:text-primary-foreground"
            aria-label={`Próxima foto — ${title}`}
            title="Próxima foto"
            onClick={() => changePhoto(1)}
          >
            <ChevronRight />
          </Button>
        </div>
      )}
    </figure>
  );
}