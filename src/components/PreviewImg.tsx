import { cn } from "@/helpers/etc";

const PreviewImg = (p: { src: string; alt?: string; class?: string }) => (
    <img
        src={p.src}
        alt={p.alt || ""}
        loading="lazy"
        decoding="async"
        class={cn(
            "h-min w-full rounded-md object-contain lg:rounded-2xl",
            p.class,
        )}
    />
);

export default PreviewImg;
