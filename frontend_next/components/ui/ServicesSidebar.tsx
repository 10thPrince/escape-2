"use client";

import Link from "next/link";
import { servicesData } from "@/data/serviceData";

export default function ServicesSidebar({ activeSub }: { activeSub?: string }) {
  return (
    <div className="space-y-4 sticky top-24">
      {Object.entries(servicesData).map(([key, value]) => (
        <div key={key}>
          <p className="font-semibold mb-2">{value.title}</p>
          <ul className="ml-3 space-y-1">
            {value.subs.map((sub) => (
              <li key={sub.id}>
                <Link
                  href={`/services/${key}/${sub.id}`}
                  className={`block underline ${
                    activeSub === sub.id ? "font-bold text-white" : "text-gray-200"
                  }`}
                >
                  {sub.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
