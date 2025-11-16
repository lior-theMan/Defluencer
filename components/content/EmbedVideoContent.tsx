import React, { useState } from 'react'
import styles from './VideoContent.module.css'
import { useRef } from "react";

export interface VideoContentProps {
    src: string
    title?: string
    width?: number | string
    height?: number | string
    className?: string
    style?: React.CSSProperties
    controls?: boolean
    autoplay?: boolean
    loop?: boolean
    muted?: boolean
}


export function EmbedVideoContent({
     src,
     title,
     width = 'auto',
     height = 'auto',
     className = '',
     style,
     controls = false,
     autoplay = true,
     loop = true,
     muted = true,
 }: VideoContentProps) {
    const iframeRef = useRef(null);
    const [isMuted, setIsMuted] = useState(true);
    if (!src) return null
    let videoId = src.split("embed/")[1]
    let params = paramsToString(controls, autoplay, loop, muted)


    const toggleSound = () => {
        const iframe = iframeRef.current as HTMLIFrameElement | null;
        if (!iframe) return;

        if (isMuted) {
            // Unmute
            iframe!!.contentWindow!!.postMessage(
                JSON.stringify({ event: "command", func: "unMute", args: [] }),
                "*"
            );
        } else {
            // Mute
            iframe!!.contentWindow!!.postMessage(
                JSON.stringify({ event: "command", func: "mute", args: [] }),
                "*"
            );
        }

        setIsMuted(!isMuted);
    };
    return (
        <div className={`${styles.videoWrapper}`}>
            <iframe
                className={`${style} ${styles.container} ${className} ${styles.video}`}
                ref={iframeRef}
                width={width}
                height={height}
                src={`${src}?${params}&playsinline=1&enablejsapi=1&playlist=${videoId}`}
                title={title}
                allow="autoplay; encrypted-media"
                frameBorder="0"
            />

            <button
                onClick={toggleSound}
                style={{
                    position: "absolute",
                    bottom: 20,
                    left: 20,
                    padding: "10px 16px",
                    background: "rgba(0,0,0,0.6)",
                    color: "white",
                    border: "none",
                    borderRadius: 6,
                    cursor: "pointer",
                    fontSize: 16,
                    zIndex: 10,
                }}
            >
                {isMuted ? "Enable Sound 🔊" : "Mute 🔇"}
            </button>
        </div>
    )
}

function paramsToString(
    controls: boolean,
    autoplay: boolean,
    loop: boolean,
    muted: boolean
): string {
    let params = ""
    params += `controls=${controls ? 1 : 0}&`
    params += `autoplay=${autoplay ? 1 : 0}&`
    params += `loop=${loop ? 1 : 0}&`
    params += `mute=${muted ? 1 : 0}`
    return params
}
