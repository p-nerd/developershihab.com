import { createSignal } from "solid-js";

const Iframe = (p: { src: string; title: string }) => {
    const [loaded, setLoaded] = createSignal(false);

    return (
        <div class="relative w-full overflow-hidden pt-[56.25%]">
            {!loaded() && (
                <div class="absolute inset-0 flex items-center justify-center">
                    Loading iframe...
                </div>
            )}
            <iframe
                src={p.src}
                title={p.title}
                class="absolute bottom-0 left-0 right-0 top-0 h-full w-full rounded-md lg:rounded-2xl"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen={true}
                onLoad={() => {
                    setLoaded(true);
                }}
            />
        </div>
    );
};

export default Iframe;
