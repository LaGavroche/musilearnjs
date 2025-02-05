'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SignupPage() {
 const router = useRouter();
 const [formData, setFormData] = useState({
   email: '',
   password: '',
   name: '',
   role: 'student'
 });
 const [error, setError] = useState('');

 const handleSubmit = async (e: React.FormEvent) => {
   e.preventDefault();
   setError('');

   try {
     // Replace with your actual signup logic
     const response = await fetch('/api/signup', {
       method: 'POST',
       headers: { 'Content-Type': 'application/json' },
       body: JSON.stringify(formData)
     });

     if (response.ok) {
       router.push('/login');
     } else {
       const errorData = await response.json();
       setError(errorData.error || 'Signup failed');
     }
   } catch (err: any) {
     setError('Network error. Please try again.');
   }
 };

 return (
   <div className="min-h-screen flex items-center justify-center bg-gray-50">
     <div className="w-full max-w-md">
       <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
         <h2 className="text-2xl text-center mb-6">Inscription</h2>
         
         {error && (
           <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4">
             {error}
           </div>
         )}

         <div className="mb-4">
           <label className="block text-gray-700 text-sm font-bold mb-2">
             Nom
             <input
               type="text"
               value={formData.name}
               onChange={(e) => setFormData({...formData, name: e.target.value})}
               required
               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
             />
           </label>
         </div>

         <div className="mb-4">
           <label className="block text-gray-700 text-sm font-bold mb-2">
             Email
             <input
               type="email"
               value={formData.email}
               onChange={(e) => setFormData({...formData, email: e.target.value})}
               required
               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
             />
           </label>
         </div>

         <div className="mb-4">
           <label className="block text-gray-700 text-sm font-bold mb-2">
             Mot de passe
             <input
               type="password"
               value={formData.password}
               onChange={(e) => setFormData({...formData, password: e.target.value})}
               required
               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
             />
           </label>
         </div>

         <div className="mb-6">
           <label className="block text-gray-700 text-sm font-bold mb-2">
             Rôle
             <select
               value={formData.role}
               onChange={(e) => setFormData({...formData, role: e.target.value})}
               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
             >
               <option value="student">Étudiant</option>
               <option value="teacher">Professeur</option>
               <option value="admin">Administrateur</option>
             </select>
           </label>
         </div>

         <div className="flex items-center justify-center">
           <button
             type="submit"
             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
           >
             S'inscrire
           </button>
         </div>
       </form>
     </div>
   </div>
 );
}