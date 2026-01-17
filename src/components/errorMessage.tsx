import Image from "next/image";


interface ErrorMessageProps {
  pros: string;
}

export default function ErrorMessage({ pros }: ErrorMessageProps) {
  return (
    <div className="w-60 h-60 mx-auto my-10 bg-amber-50 rounded-2xl">
      <Image
        src="https://i.postimg.cc/TPpVjpDk/image.png"
        width={160}
        height={160}
        alt=""
        className="mx-auto "
      />

      <p className="text-center text-black text-2xl py-10">{pros}!</p>
    </div>
  );
}
