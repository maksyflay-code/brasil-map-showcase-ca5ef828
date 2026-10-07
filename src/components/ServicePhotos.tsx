import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

type ServicePhotosProps = {
  title: string;
  images: { src: string; alt: string }[];
};

export function ServicePhotos({ title, images }: ServicePhotosProps) {
  const [active, setActive] = useState(0);
  const [carouselRef, carousel] = useEmblaCarousel({ loop: true });

  const updateActive = useCallback(() => {
    if (carousel) setActive(carousel.selectedScrollSnap());
  }, [carousel]);

  useEffect(() => {
    if (!carousel) return;
    updateActive();
    carousel.on("select", updateActive);
    carousel.on("reInit", updateActive);
    return () => {
      carousel.off("select", updateActive);
      carousel.off("reInit", updateActive);
    };
  }, [carousel, updateActive]);

  return (
    <figure
      className="relative m-0 aspect-[4/3] overflow-hidden lg:h-[500px] lg:aspect-auto"
      aria-label={`Fotos — ${title}`}
    >
      <div ref={carouselRef} className="h-full overflow-hidden cursor-grab active:cursor-grabbing">
        <div className="flex h-full touch-pan-y">
          {images.map((image, index) => (
            <div key={image.src} className="relative h-full min-w-0 flex-[0_0_100%]" aria-hidden={index !== active}>
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                width={1200}
                height={900}
                draggable={false}
                className="absolute inset-0 h-full w-full select-none object-cover"
              />
            </div>
          ))}
        </div>
      </div>
      {images.length > 1 && (
        <div className="absolute bottom-4 right-4 flex items-center gap-1 bg-navy-deep/90 p-1 text-primary-foreground">
          <Button
            variant="ghost"
            size="icon"
            className="text-primary-foreground hover:bg-primary-foreground/15 hover:text-primary-foreground"
            aria-label={`Foto anterior — ${title}`}
            title="Foto anterior"
            onClick={() => carousel?.scrollPrev()}
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
            onClick={() => carousel?.scrollNext()}
          >
            <ChevronRight />
          </Button>
        </div>
      )}
    </figure>
  );
}