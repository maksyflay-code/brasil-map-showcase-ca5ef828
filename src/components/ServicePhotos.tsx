import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

type ServicePhotosProps = {
  title: string;
  images: { src: string; alt: string }[];
};

export function ServicePhotos({ title, images }: ServicePhotosProps) {
  const [active, setActive] = useState(0);
  const [carouselRef, carousel] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => carousel?.scrollPrev(), [carousel]);
  const scrollNext = useCallback(() => carousel?.scrollNext(), [carousel]);

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
      className="group relative m-0 aspect-[4/3] overflow-hidden lg:h-[500px] lg:aspect-auto"
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
                className="absolute inset-0 h-full w-full select-none object-center object-cover"
              />
            </div>
          ))}
        </div>
      </div>
      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={scrollPrev}
            aria-label="Ver foto anterior"
            className="absolute left-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-photo-control/10 text-primary-foreground opacity-70 shadow-photo-control backdrop-blur-sm transition-opacity duration-200 hover:bg-photo-control/30 hover:opacity-100 focus-visible:opacity-100 md:opacity-0 md:group-hover:opacity-70 md:group-hover:hover:opacity-100"
          >
            <ChevronLeft className="h-4 w-4" strokeWidth={2.5} />
          </button>
          <button
            type="button"
            onClick={scrollNext}
            aria-label="Ver próxima foto"
            className="absolute right-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-photo-control/10 text-primary-foreground opacity-70 shadow-photo-control backdrop-blur-sm transition-opacity duration-200 hover:bg-photo-control/30 hover:opacity-100 focus-visible:opacity-100 md:opacity-0 md:group-hover:opacity-70 md:group-hover:hover:opacity-100"
          >
            <ChevronRight className="h-4 w-4" strokeWidth={2.5} />
          </button>
        </>
      )}
      {images.length > 1 && (
        <div className="pointer-events-none absolute inset-x-0 bottom-5 flex justify-center" aria-live="polite" aria-atomic="true">
          <span className="sr-only">Foto {active + 1} de {images.length}</span>
          <div
            className="flex items-center gap-2 rounded-full bg-navy-deep/85 px-4 py-2.5 shadow-photo-control ring-1 ring-primary-foreground/25 backdrop-blur-sm"
            aria-hidden="true"
          >
            {images.map((image, index) => (
              <span
                key={image.src}
                className={`h-1.5 rounded-full transition-all duration-300 motion-reduce:transition-none ${
                  index === active
                    ? "w-7 bg-brand-red ring-2 ring-brand-red/35"
                    : "w-3 bg-primary-foreground/55"
                }`}
              />
            ))}
          </div>
        </div>
      )}
    </figure>
  );
}