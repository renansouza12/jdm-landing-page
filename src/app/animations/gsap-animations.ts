import { gsap } from "gsap";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);


// export function animateElement(selector: string): void {
//     gsap.to(selector, { duration: 2, x: 100 });
// }

export function animateTitle(selector: string ): void {
    gsap.from(selector, {
        scrollTrigger: {
            trigger: selector,
            start: "-300% center",
            end: "-50% center",
            scrub:true,
            
            markers:true
        },
        y: 90,
        transition:5,
    });
}