import * as Icons from "lucide-react";

type IconName = keyof typeof Icons;
// Get Icon

export function Icon({ name }: { name?: IconName | string }) {
  const LucideIcon = Icons[name as IconName] as React.FC<
    React.SVGProps<SVGSVGElement>
  >;

  if (!LucideIcon) return null;

  return <LucideIcon className="w-4 h-4" />;
}
