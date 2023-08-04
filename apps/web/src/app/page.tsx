import ThemeToggle from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import Logo from "@/components/Logo";
import { CopyCode } from "@/components/CopyCode";
import { Animarker } from "react-animarker";
import { SideMenu } from "@/components/SideMenu";
import Footer from "@/components/Footer";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Home() {
  return (
    <main>
      <ThemeToggle />
      <SideMenu />
      <Logo className="py-10" />
      <div className="container lg:max-w-3xl">
        <h1 className="font-bold text-2xl text-center">React Animarker</h1>
        <p className="my-10 text-xl font-semibold text-center">
          An animated &lt;mark&gt; tag which highlights once it&apos;s in the
          viewport!
        </p>
        <div className="rounded-md border flex justify-between items-center p-4">
          <code className="lg:text-base text-sm">
            npm install react-animarker
          </code>
          <Button size="icon" variant="outline">
            <CopyCode pkg="react-animarker" />
          </Button>
        </div>
        <p className="text-sm py-10 text-center">
          Check out what people are saying about it
        </p>
        <div className="p-10 border rounded-md text-sm lg:text-lg mb-10">
          <p className="mb-5">
            I recently had the pleasure of using React Animarker in one of my
            web development projects, and I must say, it&apos;s an absolute
            game-changer! This package has taken my user experience to a whole
            new level, and I&apos;m thrilled to share my positive experience
            with others
          </p>
          <p className="mb-5">
            One of the standout features of{" "}
            <Animarker color="pink" className="px-2">
              React Animarker
            </Animarker>{" "}
            is its simplicity and ease of use. Integrating the package into my
            React project was a breeze, thanks to its well-documented API and
            clear examples. Within minutes, I had the Animarker component up and
            running, highlighting essential content as it came into the
            viewport. The intuitive setup allowed me to focus on the creative
            aspect of my project, without getting bogged down in complicated
            animations or code.
          </p>
          <p className="mb-5">
            The ability to customize the animations to suit my design needs was
            another major win. React Animarker offers a variety of animation
            styles, and I was able to fine-tune the duration and easing
            functions to match the overall vibe of my website. Whether I needed
            subtle fade-ins for a sleek look or playful bounces for a more
            dynamic feel, React Animarker had me covered.
          </p>
          <p className="mb-5">
            Performance is always a concern when implementing animations, but I
            was pleasantly surprised by{" "}
            <Animarker>
              how lightweight and efficient React Animarker proved to be
            </Animarker>
            . The package utilizes the intersection observer API intelligently,
            ensuring that animations were triggered only when necessary. Even
            with multiple elements marked for animation, my website remained
            snappy and responsive, leaving a positive impression on my users.
          </p>
          <p className="mb-5">
            The React Animarker package truly shines when it comes to enhancing
            the user experience. The animations drew my visitors&apos; attention
            to important content, creating a delightful element of surprise. I
            noticed a significant increase in engagement and user interaction,
            which ultimately led to improved user satisfaction and longer time
            spent on my website.
          </p>
          <p className="mb-5">
            What also impressed me was the fantastic community support around
            the package. The developers behind React Animarker were highly
            responsive to questions and issues, providing timely assistance and
            continuously improving the package based on user feedback. It&apos;s
            clear that they are dedicated to delivering a top-notch product and
            helping developers create exceptional web experiences.
          </p>
          <p className="mb-5">
            In conclusion, I can&apos;t recommend React Animarker enough to
            fellow developers looking to elevate their user experience.
            It&apos;s a versatile, user-friendly, and performant package that
            effortlessly adds eye-catching animations to web pages. With React
            Animarker in your toolkit, you can take your web projects to the
            next level, leaving a lasting impact on your audience.{" "}
            <Animarker color="lightgreen">
              Kudos to the developers for creating such a fantastic tool!
            </Animarker>
          </p>
          <p className="items-center text-sm mt-10 flex justify-end gap-4">
            <Avatar>
              <AvatarFallback>GPT</AvatarFallback>
              <AvatarImage src="https://chat.openai.com/apple-touch-icon.png" />
            </Avatar>
            GPT, Chad / {new Date().toDateString()}
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
