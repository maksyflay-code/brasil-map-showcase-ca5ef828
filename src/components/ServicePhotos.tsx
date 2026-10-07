import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

type ServicePhotosProps = {
  title: string;
  images: { src: string; alt: string; position?: "equipment" }[];
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
                className={`absolute inset-0 h-full w-full select-none object-cover ${image.position === "equipment" ? "object-[center_55%] lg:object-[center_70%]" : "object-center"}`}
              />
            </div>
          ))}
        </div>
      </div>
      {images.length > 1 && (
        <div className="pointer-events-none absolute inset-x-0 bottom-5 flex justify-center" aria-live="polite" aria-atomic="true">
          <span className="sr-only">Foto {active + 1} de {images.length}</span>
          <div className="flex items-center gap-2 rounded-full bg-photo-control/5 px-3 py-2 shadow-photo-control backdrop-blur-sm" aria-hidden="true">
            {images.map((image, index) => (
              <span
                key={image.src}
                className={`h-1 w-4 rounded-full transition-colors duration-300 motion-reduce:transition-none ${index === active ? "bg-photo-control/90" : "bg-photo-control/30"}`}
              />
            ))}
          </div>
        </div>
      )}
    </figure>
  );
}