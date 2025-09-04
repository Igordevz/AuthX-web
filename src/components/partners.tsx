"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const technologies = [
  {
    name: "React",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "React Native",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  { name: "Expo", logo: "https://cdn.worldvectorlogo.com/logos/expo-1.svg" },
  {
    name: "Python",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "Java",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  {
    name: "C++",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  },
  {
    name: "JavaScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "TypeScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "Next.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "Vue.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
  },
  {
    name: "Angular",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
  },
  {
    name: "Swift",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg",
  },
  {
    name: "Kotlin",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg",
  },
  {
    name: "Go",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg",
  },
  {
    name: "Ruby",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg",
  },
  {
    name: "PHP",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
  },
];

export function Partners() {
  useEffect(() => {
    // Adiciona a keyframe animation no documento
    const style = document.createElement("style");
    style.textContent = `
      @keyframes scroll {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(-50%);
        }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <section className="w-full  px-4 bg-primary-foreground/5   shadow-[0_10px_15px_-3px_rgba(139,92,246,0.5),0_4px_6px_-2px_rgba(139,92,246,0.3)]">
      <div className="container mx-auto w-full">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Compatible with Your Stack
          </h2>
          <p className="text-xl text-muted-foreground">
            Integrate with any programming language or framework
          </p>
        </div>

        <div className="relative  overflow-hidden w-full rounded-2xl">
          <div
            className="flex gap-8 py-8"
            style={{
              width: "fit-content",
              animation: "scroll 40s linear infinite",
            }}
          >
            {/* Original set */}
            {technologies.map((tech, index) => (
              <div
                key={tech.name + index}
                className="inline-flex flex-col items-center justify-center p-6  border-none    hover:shadow-md transition-shadow"
                style={{ minWidth: "180px" }}
              >
                <Image
                  src={tech.logo}
                  alt={tech.name}
                  width={80}
                  height={80}
                  className=" hover:opacity-15 grayscale transition-opacity mb-3 r"
                />
                <span className="text-sm font-medium   text-muted-foreground">
                  {tech.name}
                </span>
              </div>
            ))}
            {technologies.map((tech, index) => (
              <div
                key={`${tech.name}-duplicate-${index}`}
                className="inline-flex flex-col items-center  border-none   justify-center p-6    hover:shadow-md transition-shadow"
                style={{ minWidth: "180px" }}
              >
                <Image
                  src={tech.logo}
                  alt={tech.name}
                  width={80}
                  height={80}
                  className="hover:opacity-15 transition-opacity grayscale mb-3 rounded-xl co"
                />
                <span className="text-sm font-medium text-muted-foreground">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
