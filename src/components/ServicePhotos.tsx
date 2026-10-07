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
        <div className="absolute bottom-4 right-4 inline-flex select-none items-center gap-4 rounded-full border border-photo-control/10 bg-photo-control/5 px-4 py-2 shadow-photo-control backdrop-blur-xl transition-colors duration-300 hover:bg-photo-control/10 motion-reduce:transition-none">
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 rounded-full text-photo-control/40 hover:bg-transparent hover:text-photo-control [&_svg]:size-[18px]"
            aria-label={`Foto anterior — ${title}`}
            title="Foto anterior"
            onClick={() => carousel?.scrollPrev()}
          >
            <ChevronLeft strokeWidth={1.5} />
          </Button>
          <span className="flex min-w-12 items-center justify-center gap-1.5 font-mono text-sm tabular-nums" aria-live="polite" aria-atomic="true">
            <span className="font-medium text-photo-control">{String(active + 1).padStart(2, "0")}</span>
            <span className="text-xs font-light text-photo-control/20">/</span>
            <span className="text-photo-control/40">{String(images.length).padStart(2, "0")}</span>
          </span>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 rounded-full text-photo-control/40 hover:bg-transparent hover:text-photo-control [&_svg]:size-[18px]"
            aria-label={`Próxima foto — ${title}`}
            title="Próxima foto"
            onClick={() => carousel?.scrollNext()}
          >
            <ChevronRight strokeWidth={1.5} />
          </Button>
        </div>
      )}
    </figure>
  );
}