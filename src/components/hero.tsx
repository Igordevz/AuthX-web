import { Button } from "@/components/ui/button";
import { ArrowRight, Blocks, Code, Users, Zap } from "lucide-react";
import Image from "next/image";
import logo from "../../public/logo.png";

export function Hero() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto text-center">
        <div className="mx-auto max-w-4xl relative">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 flex flex-col items-center justify-center ">
            <Image
              src={logo}
              width={200}
              height={200}
              alt="logo"
              className=" shadow-violet-500 right-1 shadow-2xl rounded-xl -rotate-10 pb-2 mb-10"
            />
            Simple Authentication
            <span className="block text-violet-400 z-10">
              {["No", "Backend", "Required"].map((word, wordIndex) => (
                <span key={wordIndex} className="inline-flex gap-1">
                  {word.split('').map((letter, letterIndex) => (
                    <span
                      key={letterIndex}
                      className="animate-pulse"
                      style={{
                        animationDelay: `${(wordIndex * word.length + letterIndex) * 0.1}s`,
                      }}
                    >
                      {letter}
                    </span>
                  ))}
                  {wordIndex < 2 && <span>&nbsp;</span>}
                </span>
              ))}
            </span>
          </h1>

          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            The world's easiest authentication API. Connect your frontend to our secure
            authentication system in minutes - we handle all the backend for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-violet-400 text-black hover:bg-violet-500"
            >
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              View Demo
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">5-Minute Setup</h3>
              <p className="text-sm text-muted-foreground">
                Configure complete authentication in just a few clicks
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Easy Integration</h3>
              <p className="text-sm text-muted-foreground">
                Simple API integration with any frontend framework
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Thousands of Users</h3>
              <p className="text-sm text-muted-foreground">
                Manage unlimited users with ease
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
