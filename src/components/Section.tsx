import { cn } from "@/src/lib/utils";
import Heading from "./Heading";
import Container from "./Container";

type SectionProps = {
  eyebrow?: React.ReactNode;
  title?: React.ReactNode;
  description?: React.ReactNode;
  padding?: "none" | "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
  titleAlign?: "center" | "left";
};

export default function Section({
  children,
  eyebrow,
  title,
  description,
  padding = "lg",
  className,
  titleAlign = "center",
}: SectionProps) {
  return (
    <section
      className={cn(
        {
          "py-6 md:py-8 lg:py-10 space-y-6 lg:space-y-10": padding === "lg",
          "": padding === "md",
          "": padding === "sm",
          "": padding === "none",
        },
        className
      )}
    >
      {(eyebrow || title || description) && (
        <Container className="space-y-4 text-center mb-4  lg:pt-12 md:pt-6 pt-0">
          {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
          {title && <Title align={titleAlign}>{title}</Title>}
          {description && <Description>{description}</Description>}
        </Container>
      )}
      <>{children}</>
    </section>
  );
}

function Eyebrow({ children }: React.PropsWithChildren) {
  return (
    <Heading
      as="h2"
      className="text-primary-500 pt-12"
      size="h6"
      align="center"
    >
      {children}
    </Heading>
  );
}

function Title({
  children,
  align,
}: { align: "center" | "left" } & React.PropsWithChildren) {
  return (
    <Heading
      as="h2"
      size={align && align === "left" ? "h2" : "h3"}
      align={align}
      className="text-gray-800 tracking-tight"
    >
      {children}
    </Heading>
  );
}

function Description({ children }: React.PropsWithChildren) {
  return <p>{children}</p>;
}
