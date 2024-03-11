const { useEffect } = React;

const DynamicSVGAnimation = () => {
    useEffect(() => {
        let i = 0;

        gsap.set(".line", {
        attr: {
            stroke: "hsl(200, 100%, 95%)",
            "stroke-width": 4,
            "stroke-linecap": "round"
        },
        filter: "url(#glow)"
        });
        gsap.set(".line2", {
        attr: { "stroke-width": 6 },
        opacity: 0.6,
        filter: "url(#glow)"
        });
        gsap.set(".line3", {
        attr: { "stroke-width": 9 },
        opacity: 0.3,
        filter: "url(#glow)"
        });

        [].forEach.call(document.getElementsByClassName("line"), (el) => {
        gsap
            .timeline({
            defaults: { duration: 1 },
            repeat: -1,
            repeatDelay: (27 - i) / 50
            })
            .to(
            el,
            {
                duration: 2,
                attr: { stroke: "hsl(200, 100%, 85%)", ease: "power2.inOut" }
            },
            0
            )
            .fromTo(
            el,
            { drawSVG: 0 },
            { drawSVG: "35% 70%", ease: "sine.in" },
            i / 50
            )
            .to(el, { drawSVG: "100% 100%", ease: "sine.out" }, 1 + i / 50)
            .progress(i / 20);

        i++;
        });
    }, []);

    return (
        <svg viewBox="0 0 1200 500" fill="none">
        <defs>
            <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
            <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
            </feMerge>
            </filter>
        </defs>
        <path
            className="line line3"
            d="M-10,348c15,17,24,43,68,47s97-43,183-12s165,73,283,49 s290-98,472-87c131.22,7.93,225.6,51.07,304,38"
        />
        <path
            className="line line2"
            d="M-10,348c15,17,24,43,68,47s97-43,183-12s165,73,283,49 s290-98,472-87c131.22,7.93,225.6,51.07,304,38"
        />
        <path
            className="line line1"
            d="M-10,348c15,17,24,43,68,47s97-43,183-12s165,73,283,49 s290-98,472-87c131.22,7.93,225.6,51.07,304,38"
        />

        <path
            className="line line3"
            d="M-10,319c28-9,68.84,25.02,116,26c48,1,83.41-12.8,124-7 c42,6,84,45,161,59s144,12,263-36s234-86,371-62s216,52,279,62"
        />
        <path
            className="line line2"
            d="M-10,319c28-9,68.84,25.02,116,26c48,1,83.41-12.8,124-7 c42,6,84,45,161,59s144,12,263-36s234-86,371-62s216,52,279,62"
        />
        <path
            className="line line1"
            d="M-10,319c28-9,68.84,25.02,116,26c48,1,83.41-12.8,124-7 c42,6,84,45,161,59s144,12,263-36s234-86,371-62s216,52,279,62"
        />

        <path
            className="line line3"
            d="M-10,296c27-13,59-22,107,0c71.61,32.82,113,14,175,22 s117,50,223,45s165-45,277-73s210-56,532,43"
        />
        <path
            className="line line2"
            d="M-10,296c27-13,59-22,107,0c71.61,32.82,113,14,175,22 s117,50,223,45s165-45,277-73s210-56,532,43"
        />
        <path
            className="line line1"
            d="M-10,296c27-13,59-22,107,0c71.61,32.82,113,14,175,22 s117,50,223,45s165-45,277-73s210-56,532,43"
        />

        <path
            className="line line3"
            d="M-10,263c15-6,85-39,117-13c52.68,42.81,124,38,182,35 s123,63,275,32s235-75,349-72s242,13,391,64"
        />
        <path
            className="line line2"
            d="M-10,263c15-6,85-39,117-13c52.68,42.81,124,38,182,35 s123,63,275,32s235-75,349-72s242,13,391,64"
        />
        <path
            className="line line1"
            d="M-10,263c15-6,85-39,117-13c52.68,42.81,124,38,182,35 s123,63,275,32s235-75,349-72s242,13,391,64"
        />

        <path
            className="line line3"
            d="M-10,225c0,0,39-33,79-38s61,24,100,44s101-7,159,19 s81,48,221,37s245-55,311-68s160-16,240-1s137,39,208,55"
        />
        <path
            className="line line2"
            d="M-10,225c0,0,39-33,79-38s61,24,100,44s101-7,159,19 s81,48,221,37s245-55,311-68s160-16,240-1s137,39,208,55"
        />
        <path
            className="line line1"
            d="M-10,225c0,0,39-33,79-38s61,24,100,44s101-7,159,19 s81,48,221,37s245-55,311-68s160-16,240-1s137,39,208,55"
        />

        <path
            className="line line3"
            d="M-10,192c0,0,51-54,91-59s60,8,99,28s83,24,141,50 s152,48,292,37s203-51,269-64s142-15,222,0s136,37,207,53"
        />
        <path
            className="line line2"
            d="M-10,192c0,0,51-54,91-59s60,8,99,28s83,24,141,50 s152,48,292,37s203-51,269-64s142-15,222,0s136,37,207,53"
        />
        <path
            className="line line1"
            d="M-10,192c0,0,51-54,91-59s60,8,99,28s83,24,141,50 s152,48,292,37s203-51,269-64s142-15,222,0s136,37,207,53"
        />

        <path
            className="line line3"
            d="M-10,144c0,0,54-39,94-44s85,7,124,27s59,25,117,51 s153,52,293,41s188-53,254-66s148-13,228,2s181,38,211,38"
        />
        <path
            className="line line2"
            d="M-10,144c0,0,54-39,94-44s85,7,124,27s59,25,117,51 s153,52,293,41s188-53,254-66s148-13,228,2s181,38,211,38"
        />
        <path
            className="line line1"
            d="M-10,144c0,0,54-39,94-44s85,7,124,27s59,25,117,51 s153,52,293,41s188-53,254-66s148-13,228,2s181,38,211,38"
        />

        <path
            className="line line3"
            d="M-10,115c0,0,66-50,145-47s176.71,58.34,234,75 c86,25,187,47,352,7s150.3-93.53,404-31c142,35,190,26,190,26"
        />
        <path
            className="line line2"
            d="M-10,115c0,0,66-50,145-47s176.71,58.34,234,75 c86,25,187,47,352,7s150.3-93.53,404-31c142,35,190,26,190,26"
        />
        <path
            className="line line1"
            d="M-10,115c0,0,66-50,145-47s176.71,58.34,234,75 c86,25,187,47,352,7s150.3-93.53,404-31c142,35,190,26,190,26"
        />

        <path
            className="line line3"
            d="M-10,88c0,0,100-71,231-36s199,100,373,85s187-94,320-94 s301,87,418,60"
        />
        <path
            className="line line2"
            d="M-10,88c0,0,100-71,231-36s199,100,373,85s187-94,320-94 s301,87,418,60"
        />
        <path
            className="line line1"
            d="M-10,88c0,0,100-71,231-36s199,100,373,85s187-94,320-94 s301,87,418,60"
        />
        </svg>
    );
    };
    const FooterSection = () => {
    const handleClick = (sectionName) => {
        alert(`Clicked on ${sectionName}`);
    };

    return (
        <div className="container">
        <div className="footer-container">
            <DynamicSVGAnimation />
            <div className="footer-text">
            <div
                className="footer-section"
                onClick={() => handleClick("About Wavy Lines")}
            >
                <h2>About Wavy Lines</h2>
                <p>
                Discover the elegance and innovation behind every design at Wavy
                Lines. The SVG is not designed for larger screens greater than
                full HD. needs more lines for mobile
                </p>
            </div>
            <div
                className="footer-section"
                onClick={() => handleClick("Our Services")}
            >
                <h2>Our Services</h2>
                <p>
                Experience unparalleled service in web design, development, and
                digital marketing.
                </p>
            </div>
            <div
                className="footer-section"
                onClick={() => handleClick("Contact Us")}
            >
                <h2>Contact Us</h2>
                <p>
                Reach out to Wavy Lines for bespoke solutions and dedicated
                support.
                </p>
            </div>
            </div>
        </div>
        </div>
    );
};

ReactDOM.render(<FooterSection />, document.getElementById("root"));
