'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'

export default function VideoSection() {
    const [isPlaying, setIsPlaying] = useState(false)
    const videoRef = useRef<HTMLVideoElement>(null)

    const handlePlay = () => {
        setIsPlaying(true)
        if (videoRef.current) {
            videoRef.current.play()
        }
    }

    return (
        <section className="py-20 bg-emerald-900 text-white overflow-hidden relative">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-emerald-500 rounded-full blur-[100px]"></div>
                <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-pink-500 rounded-full blur-[100px]"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Text Content */}
                    <div className="space-y-6 text-center lg:text-right order-2 lg:order-1">
                        <div className="inline-block px-4 py-1.5 bg-emerald-800/50 rounded-full border border-emerald-700/50 backdrop-blur-sm">
                            <span className="text-emerald-300 text-sm font-semibold">🎥 شوف الطعم بعينك</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                            لحظات من <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">السعادة</span> في كل قطعة
                        </h2>
                        <p className="text-emerald-100/80 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
                            نختار لك أجود أنواع الشوكولاتة والحلويات العالمية بعناية فائقة. شاهد كيف نهتم بكل التفاصيل لتصلك السعادة مغلفة.
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4">
                            <div className="flex items-center gap-2">
                                <div className="w-10 h-10 rounded-full bg-emerald-800 flex items-center justify-center text-emerald-400">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                </div>
                                <span className="font-medium">أعلى معايير الجودة</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-10 h-10 rounded-full bg-emerald-800 flex items-center justify-center text-emerald-400">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                </div>
                                <span className="font-medium">توصيل سريع ومبرد</span>
                            </div>
                        </div>
                    </div>

                    {/* Video Player */}
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-emerald-700/50 aspect-video group order-1 lg:order-2">
                        {!isPlaying ? (
                            <div className="absolute inset-0 bg-black/50 flex items-center justify-center z-20 transition hover:bg-black/40 cursor-pointer" onClick={handlePlay}>
                                {/* Thumbnail Image (Placeholder) */}
                                <Image
                                    src="https://images.pexels.com/photos/4109961/pexels-photo-4109961.jpeg"
                                    alt="Video Thumbnail"
                                    fill
                                    className="object-cover opacity-60 hover:scale-105 transition duration-700"
                                />

                                {/* Play Button */}
                                <div className="relative w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 transition duration-300 z-30">
                                    <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg">
                                        <svg className="w-6 h-6 text-emerald-600 ml-1" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                    </div>
                                    {/* Pulse Effect */}
                                    <div className="absolute inset-0 rounded-full border-2 border-white/50 animate-ping"></div>
                                </div>
                            </div>
                        ) : (
                            // Using an iframe for YouTube as a safe fallback/example. 
                            // In a real scenario, use video tag for self-hosted or iframe for YT.
                            // Here using a generic pleasant candy video from Pexels (Direct link if possible) or just a YouTube embed.
                            // Using a satisfying chocolate video ID from YouTube as placeholder.
                            <iframe
                                className="w-full h-full"
                                src="https://www.youtube.com/embed/S_8b6r_c57s?autoplay=1&rel=0"
                                title="Cinematic Chocolate"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}
