import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { leadershipMembers } from "@/data/leadershipData";
import { observeElements } from "@/utils/animations";
import {
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  Briefcase
} from "lucide-react";

const Leadership = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    // Add animation to the leadership section
    observeElements(".leadership-animate", "animate-slideUp", 0.1);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section
      id="leadership"
      className="py-20 bg-gradient-subtle relative overflow-hidden"
    >
      <div className="absolute top-0 left-1/4 blurred-bg bg-primary/10"></div>

      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16 leadership-animate">
          <h2 className="heading-lg mb-4 text-balance">Our Leadership Team</h2>
          <p className="text-muted-foreground text-lg">
            Meet the experienced professionals leading our mission to protect
            and support overseas workers.
          </p>
        </div>

        <div className="leadership-animate">
          <Carousel
            opts={{
              align: "start",
              loop: true
            }}
            className="w-full"
          >
            <CarouselContent className="px-4">
              {leadershipMembers.map((member) => (
                <CarouselItem
                  key={member.id}
                  className={isMobile ? "basis-full" : "basis-1/2 lg:basis-1/3"}
                >
                  <div className="glass-card p-6 h-full flex flex-col items-center text-center">
                    {/* Avatar Image - Centered and Larger */}
                    <Avatar className="h-32 w-32 border-4 border-primary/20 mb-6">
                      <AvatarImage src={member.imageUrl} alt={member.name} />
                      <AvatarFallback>
                        {member.name.substring(0, 2)}
                      </AvatarFallback>
                    </Avatar>

                    {/* Name and Role */}
                    <div className="mb-4">
                      <h3 className="font-semibold text-xl">{member.name}</h3>
                      <div className="flex items-center justify-center gap-1 text-primary">
                        <Briefcase className="h-5 w-5" />
                        <span className="text-sm">{member.role}</span>
                      </div>
                    </div>

                    {/* Bio */}
                    <p className="text-muted-foreground text-sm mb-4 text-clip">
                      {member.bio}
                    </p>

                    {/* Leadership Badge */}
                    <div className="flex items-center gap-2 text-sm">
                      <GraduationCap className="h-4 w-4 text-primary" />
                      <span className="badge badge-primary">Leadership</span>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8 gap-2">
              <CarouselPrevious className="relative static transform-none" />
              <CarouselNext className="relative static transform-none" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
