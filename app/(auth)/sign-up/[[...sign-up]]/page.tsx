import { SignUp } from '@clerk/nextjs';
import Image from 'next/image';

export default function Page() {
  return (
    <div className="grid grid-cols-2">
      <div>
        <Image
          className="w-full"
          src={'/login.png'}
          alt="Bedstory photo"
          height={700}
          width={1000}
        />
      </div>
      <div className="flex justify-center items-center h-screen">
        <SignUp />
      </div>
    </div>
  );
}
