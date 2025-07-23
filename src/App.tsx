import MainContent from "@/components/custom/mainContent/MainContent";
import Footer from "@/components/custom/footer/Footer";
import Banner from "@/components/custom/banner/Banner";
import { Dock, DockIcon } from "./components/ui/dock";
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "./components/ui/tooltip";
import { Separator } from "./components/ui/separator";
import { ModeToggle } from "./components/ui/mode-toggle";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./components/ui/button";
import { HomeIcon, PencilIcon, MailIcon, CalendarIcon } from "lucide-react";
import { ThemeProvider } from "./components/ui/theme-provider";

const App = () => {
  const DATA = {
  navbar: [
    { href: "#", icon: HomeIcon, label: "Home" },
    { href: "#", icon: PencilIcon, label: "Blog" },
  ],
  contact: {
    social: {
      GitHub: {
        name: "GitHub",
        url: "#",
        icon: "G",
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "#",
        icon: "LI",
      },
      X: {
        name: "X",
        url: "#",
        icon: "X",
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: "E",
      },
    },
  },
};

  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <div className="flex flex-col min-h-screen bg-background text-text-primary font-montserrat">
      <Banner />
      <MainContent />
      <Footer />
      <TooltipProvider>
        <Dock direction="bottom">
          {DATA.navbar.map((item) => (
            <DockIcon key={item.label}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href={item.href}
                    aria-label={item.label}
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "size-12 rounded-full",
                    )}
                  >
                    <item.icon className="size-4" />
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{item.label}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}
          <Separator orientation="vertical" className="h-full" />
          {Object.entries(DATA.contact.social).map(([name, social]) => (
            <DockIcon key={name}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href={social.url}
                    aria-label={social.name}
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "size-12 rounded-full",
                    )}
                  >
                    <social.icon />
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{name}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}
          <Separator orientation="vertical" className="h-full py-2" />
          <DockIcon>
            <Tooltip>
              <TooltipTrigger asChild>
                <ModeToggle className="rounded-full" />
              </TooltipTrigger>
              <TooltipContent>
                <p>Theme</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
        </Dock>
      </TooltipProvider>
    </div>
    </ThemeProvider>
  );
};

export default App;
