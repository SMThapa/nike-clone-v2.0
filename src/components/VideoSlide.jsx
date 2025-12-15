import { useRef, useEffect, useState } from "react";

function VideoSlide({ src, isActive, onComplete, mute }) {
    const videoRef = useRef(null);
    const [inView, setInView] = useState(true);

    useEffect(() => {
        const videoEl = videoRef.current;
        if (!videoEl) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setInView(entry.isIntersecting);
            },
            {
                threshold: 0.5,
            }
        );

        observer.observe(videoEl);

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!videoRef.current) return;

        if (isActive && inView) {
            videoRef.current.play();
        } else {
            videoRef.current.pause();
        }
    }, [isActive, inView]);

    return (
        <video
            ref={videoRef}
            src={src}
            playsInline
            muted={mute}
            preload="auto"
            style={{ width: "100%" }}
            onEnded={onComplete}
        />
    );
}

export default VideoSlide;
