import { cn } from "@/helpers/etc";

const PreviewImg = (p: { src: string; alt?: string; class?: string }) => (
    <img
        src={p.src}
        alt={p.alt || ""}
        loading="lazy"
        decoding="async"
        class={cn(
            "h-full w-full rounded-md object-contain text-xx-gray-200 lg:rounded-2xl",
            p.class,
        )}
    />
);

export default PreviewImg;
