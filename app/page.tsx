"use client";

import { signIn, useSession } from "next-auth/react";

export default function Home() {

  const {data:session} = useSession()

  if(session){
    console.log(session)
  }

  return (
    <>
      <div className="max-w-[1000px] h-screen mx-auto flex justify-center items-center flex-col gap-2">
        <h1 className="text-8xl uppercase font-black text-center mb-4">Musilearn</h1>
        {session && <p className="mb-4">Bienvenue{session?.user?.name}</p>}
        <div className="flex items-center gap-2">
          {session && <p>Votre email: {session?.user?.email}</p>}
          <button onClick={() => signIn('github')} className="bg-gray-300 hover:bg-gray-400 rounded-md p-3">
            Se connecter avec Github
          </button>
        </div>
      </div>
    </>
  );
}
