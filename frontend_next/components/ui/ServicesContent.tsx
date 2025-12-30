"use client";

import { useEffect, useRef } from "react";
import { Phone } from "lucide-react";

export default function ServicesContent({ service, activeSub }: any) {
    const refs = useRef<Record<string, HTMLElement | null>>({});

    useEffect(() => {
        if (activeSub && refs.current[activeSub]) {
            refs.current[activeSub]?.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    }, [activeSub]);

    return (
        <div className="space-y-16">
            {service.subs.map((sub: any) => (
                <section
                    key={sub.id}
                    ref={(el) => {
                        refs.current[sub.id] = el;
                    }}
                    id={sub.id}
                    className="scroll-mt-32"
                >
                    <h2 className="text-2xl fugaz font-semibold mb-2">{sub.name}</h2>
                    <p className="text-gray-600 mb-6">{sub.description}</p>

                    {sub.images?.length > 0 && (
                        <div className="grid md:grid-cols-3 gap-6">
                            {sub.images.map((img: any, i: number) => (
                                <div key={i} className="bg-white shadow rounded-lg p-4">
                                    <img
                                        src={img.url}
                                        alt={img.title || sub.name}
                                        className="w-full h-48 object-cover rounded"
                                    />
                                    <p className="text-sm text-gray-500 mt-2">
                                        {img.description || "A beautiful example of our work."}
                                    </p>
                                    <div className="flex justify-between items-center mt-2">
                                        <p className="font-semibold">{img.title || `Image ${i + 1}`}</p>
                                        <a href="tel:+250783728119" className="text-primary">
                                            <Phone size={16} />
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </section>
            ))}
        </div>
    );
}
