type Props = {
  children: React.ReactNode;
};

export default function PageContainer({ children }: Props) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-200">{children}</div>
  );
}

export function PageSplit({ children }: Props) {
  return <div className="flex flex-row w-full">{children}</div>;
}

export function PageMain({ children }: Props) {
  return <div className="flex-1 flex justify-between">{children}</div>;
}

export function PageAside({ children }: Props) {
  return (
    <div className="sticky top-17.5 h-[calc(100vh-4.375rem)] overflow-y-scroll -mr-10 pr-10">
      {children}
    </div>
  );
}
