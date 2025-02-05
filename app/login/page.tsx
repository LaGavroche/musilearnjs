import LoginForm from '@/app/ui/login-form';
import { Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';
 
export default function LoginPage() {
  return (
    <div className="grid grid-cols-2 h-screen">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
        <div className="flex h-20 w-full items-end rounded-lg bg-blue-500 p-3 md:h-36">
          <div className="w-32 text-white md:w-36">
        
          </div>
        </div>
        <Suspense>
          <LoginForm />
        </Suspense>
        <div className="text-center">
          <Link 
            href="/signup" 
            className="text-indigo-600 hover:text-indigo-800 underline"
          >
            Créer un compte
          </Link>
        </div>
      </div>
      <div className="relative w-full h-full">
        <Image 
          src="/musilearn.png" 
          alt="MusiLearn Background" 
          fill
          style={{objectFit: "cover"}}
        />
      </div>
    </div>
  );
}