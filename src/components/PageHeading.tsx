type Props = {
  title: string;
  query: string;
  placeholder?: string | undefined;
  showSearchBar?: boolean;
};

export default function PageHeading({ title }: Props) {
  return (
    <div className="flex items-center justify-between print:hidden pt-4">
      <h1 className="text-xl md:text-2xl lg:text-[32px] font-medium text-dark-800">
        {title}
      </h1>
    </div>
  );
}
