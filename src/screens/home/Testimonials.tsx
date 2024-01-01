import type { TTestimonial } from "@/helpers/types";

import { is_link_has_rel_suffix_prefix, is_youtube_link } from "@/helpers/etc";

export const TestimonialHead = () => {
    return (
        <header class="flex max-w-[50ch] flex-col gap-2 justify-self-center text-center text-[1.125rem] text-xx-gray-300 lg:gap-4 lg:text-[1.25rem]">
            <h3 class="text-[2.125rem] lg:text-[3.5rem]">Testimonials</h3>
            <p>
                I have been a part of several successful projects. Here are
                testimonials and their stories from clients.
            </p>
        </header>
    );
};

const TestimonialIframe = (p: { src: string; title: string }) => {
    // const [loaded, setLoaded] = createSignal(false);

    const src = () =>
        is_youtube_link(p.src) && !is_link_has_rel_suffix_prefix(p.src)
            ? p.src + "?rel=0&color=white"
            : p.src + "?color=white";

    return (
        <div class="flex h-full w-full flex-row items-center gap-3 lg:px-28">
            <div class="relative w-full overflow-hidden pt-[56.25%]">
                {/*
                {!loaded() && (
                    <div class="absolute inset-0 flex items-center justify-center">
                        Loading testimonial...
                    </div>
                )}
                */}
                <iframe
                    src={src()}
                    title={p.title}
                    class="absolute bottom-0 left-0 right-0 top-0 h-full w-full rounded-md lg:rounded-2xl"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen={true}
                />
                {/*
                    onLoad={() => {
                        setLoaded(true);
                    }}
                */}
            </div>
        </div>
    );
};

// const SideButton = (p: {
//     class?: string;
//     children: TChildren;
//     onClick?: () => void;
// }) => {
//     return (
//         <div
//             onClick={p.onClick}
//             class={cn(
//                 "w-max cursor-pointer text-[25px] lg:text-[50px]",
//                 p.class,
//             )}
//         >
//             {p.children}
//         </div>
//     );
// };

// const Navigator = (p: {
//     seletedVideoIndex: number;
//     onClick: (index: number) => void;
// }) => {
//     const indexs = () => {
//         const _indexs: number[] = [];
//         let first_index = p.seletedVideoIndex - 2;
//         if (first_index + 4 > testimonials.length - 1) {
//             first_index = testimonials.length - 1 - 4;
//         }
//         if (first_index < 0) {
//             first_index = 0;
//         }
//         for (let i = first_index; i <= first_index + 4; i++) {
//             _indexs.push(i);
//         }
//         return _indexs;
//     };
//
//     createEffect(() => {
//         console.log(indexs());
//     });
//
//     return (
//         <div class="flex items-center gap-2">
//             <SideButton
//                 class={cn({
//                     "opacity-40": indexs()[0] <= 0,
//                 })}
//                 onClick={() => p.onClick(p.seletedVideoIndex - 1)}
//             >
//                 &lt;
//             </SideButton>
//             <For each={indexs()}>
//                 {index => (
//                     <div
//                         onClick={() => p.onClick(index)}
//                         class={cn(
//                             "cursor-pointer rounded-full bg-xx-gray-900 px-2 py-0.5 text-base lg:px-3.5 lg:py-1 lg:text-2xl",
//                             {
//                                 "bg-purple-700": index === p.seletedVideoIndex,
//                             },
//                         )}
//                     >
//                         {index}
//                     </div>
//                 )}
//             </For>
//             <SideButton
//                 class={cn({
//                     "opacity-40":
//                         indexs()[indexs().length - 1] >=
//                         testimonials.length - 1,
//                 })}
//                 onClick={() => p.onClick(p.seletedVideoIndex + 1)}
//             >
//                 &gt;
//             </SideButton>
//         </div>
//     );
// };

// const rand = (min: number, max: number): number => {
//     if (min > max) {
//         throw new Error(
//             "Invalid range. 'min' should be less than or equal to 'max'.",
//         );
//     }
//     return Math.floor(Math.random() * (max - min + 1) + min);
// };
//
const Testimonials = (p: { testimonials: TTestimonial[] }) => {
    // const [isNavigatorUsedByUser, setIsNavigatroUsedByUser] =
    //     createSignal(false);
    // const [seletedVideoIndex, setSelectedVideoIndex] = createSignal(
    //     rand(0, p.testimonials.length - 1),
    // );
    //
    // const fc = setInterval(() => {
    //     if (!isNavigatorUsedByUser())
    //         setSelectedVideoIndex(rand(0, p.testimonials.length - 1));
    // }, 3000);
    //
    // if (p.testimonials.length === 1) {
    //     console.log("1 video clearing interval");
    //     clearInterval(fc);
    // }
    //
    // createEffect(() => {
    //     if (isNavigatorUsedByUser()) {
    //         clearInterval(fc);
    //     }
    // });

    const testimonial = () => p.testimonials[0];

    return (
        <div class="flex h-full w-full flex-col items-center gap-5">
            <div class="flex h-full w-full flex-col items-center gap-5">
                <div class="w-full px-6 text-center text-base lg:text-xl">
                    <h4 class="text-lg lg:text-2xl">{testimonial().title}</h4>
                    <p>{testimonial().subtitle}</p>
                </div>
                <TestimonialIframe
                    title={testimonial().title}
                    src={testimonial().src}
                />
            </div>
            {/* 
            <Show when={p.testimonials.length !== 1}>
                <Navigator
                    onClick={index => {
                        setSelectedVideoIndex(index);
                        if (!isNavigatorUsedByUser()) {
                            setIsNavigatroUsedByUser(true);
                        }
                    }}
                    seletedVideoIndex={seletedVideoIndex()}
                />
            </Show>
        */}
        </div>
    );
};

export default Testimonials;
