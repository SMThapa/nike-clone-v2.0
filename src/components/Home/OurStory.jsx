import { useState, useRef, useEffect } from 'react'
import video from '../../assets/videos/00.mp4'
import { Button } from '../Button'

export const OurStory = () => {
    const [mute, setMute] = useState(true)
    const videoRef = useRef(null)

    useEffect(() => {
        const videoEl = videoRef.current
        if (!videoEl) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    videoEl.play()
                } else {
                    videoEl.pause()
                }
            },
            {
                threshold: 0.4, // 👈 play when ~40% visible
            }
        )

        observer.observe(videoEl)

        return () => observer.disconnect()
    }, [])

    return (
        <div className="our-story container">
            <div className="text-content">
                <div className="section-title">
                    wear the movement, break the mold.
                </div>
                <p>
                    Born from the pulse of the streets, our brand is a tribute
                    to the rebels, the dreamers, and the rule-breakers who shape
                    the culture...
                </p>
                <Button title={'know more'} />
            </div>

            <div className="video-content">
                <div
                    className="mute-float-btn"
                    onClick={() => setMute(!mute)}
                >
                    {mute ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-volume-off-icon lucide-volume-off"><path d="M16 9a5 5 0 0 1 .95 2.293" /><path d="M19.364 5.636a9 9 0 0 1 1.889 9.96" /><path d="m2 2 20 20" /><path d="m7 7-.587.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298V11" /><path d="M9.828 4.172A.686.686 0 0 1 11 4.657v.686" /></svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-volume2-icon lucide-volume-2"><path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z" /><path d="M16 9a5 5 0 0 1 0 6" /><path d="M19.364 18.364a9 9 0 0 0 0-12.728" /></svg>
                    )}
                </div>

                <video
                    ref={videoRef}
                    src={video}
                    muted={mute}
                    loop
                    playsInline
                    preload="metadata"
                />
            </div>
        </div>
    )
}
