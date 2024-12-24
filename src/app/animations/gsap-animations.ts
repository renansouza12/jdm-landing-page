import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);


export function animateAboutTitle(selector: string): void {
    gsap.from(selector, {
        scrollTrigger: {
            trigger: selector,
            start: "-200% center",
            end: "top center",
            scrub: 1,
        },
        y: 200,
        transition: 5,
        opacity: 0,
        stagger: 4
    });
    gsap.to(selector, {
        scrollTrigger: {
            trigger: selector,
            start: "-200% center",
            end: "top center",
            scrub: 1,
        },
        x: -20,
        transition: 5,

    });

    const mm = gsap.matchMedia();

    mm.add("(max-width: 425px)", () => {
        return gsap.from(selector, {
            scrollTrigger: {
                trigger: selector,
                start: "-200% center",
                end: "top center",
            },
            y: -100,


        })
    });

}

export function animateSubtitle(selector: string): void {
    gsap.to(selector, {
        scrollTrigger: {
            trigger: selector,
            start: "-150% center",
            end: "bottom center",
            scrub: 1.5,
    
        },
        y: -95,
        transition: 1.5,
        color: "white"
    })

    const mm = gsap.matchMedia();

    mm.add("(max-width: 768px)", () => {
        return gsap.to(selector, {
            scrollTrigger: {
                trigger: selector,
                start: "-100% center",
                end: "bottom center",
                scrub: 1.5,
            },
            y: -65,
            transition: 1.5,
        });
    });


    mm.add("(max-width: 425px)", () => {
        return gsap.to(selector, {
            scrollTrigger: {
                trigger: selector,
                start: "-100% center",
                end: "bottom center",
                scrub: 1.5,
            },
            y: -50,
            transition: 1.5,
            color: "red"
        });
    });

}

export function  animateImages(selector:string):void{
    gsap.from(selector,{
        scrollTrigger:{
            trigger:selector,
            start:"top center",
            end:"center bottom",
            scrub:4,
        },
        y:60,
        transition: 5,
    });
}

export function animateTitle(selector:string):void{
    gsap.from(selector,{
        scrollTrigger:{
            trigger:selector,
            start:"top center",
            end:"center bottom",
            scrub:4,
        },
        y:-60,
        transition: 5,
    });
}