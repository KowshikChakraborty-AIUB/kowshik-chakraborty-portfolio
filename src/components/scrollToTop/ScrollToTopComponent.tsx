"use client";
import { useState, useEffect } from "react";

const ScrollToTopComponent = () => {
    const [buttonDetect, setButtonDetect] = useState(false);

    const scrollButtonDetect = () => {
        if (window.scrollY > 300) {
            setButtonDetect(true);
        } else {
            setButtonDetect(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", scrollButtonDetect);
        return () => window.removeEventListener("scroll", scrollButtonDetect);
    }, []);

    return (
        <div className="fixed bottom-4 right-4">
            {buttonDetect && (
                <button
                    onClick={scrollToTop}
                    className="btn btn-circle bg-white text-[#8750F7] font-bold text-3xl px-6 py-6 pb-10 size-6 animate-bounce hover:bg-[#8750F7] hover:text-white"
                >
                    &#8593;
                </button>
            )}
        </div>
    );
};

export default ScrollToTopComponent;