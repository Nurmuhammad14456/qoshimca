import React from "react";

const Xodimlar = () => {
   const people = [
      {
         name: "Leslie Alexander",
         email: "leslie.alexander@example.com",
         role: "Co-Founder / CEO",
         imageUrl:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
         lastSeen: "3h ago",
         lastSeenDateTime: "2023-01-23T13:23Z",
      },
      {
         name: "Michael Foster",
         email: "michael.foster@example.com",
         role: "Co-Founder / CTO",
         imageUrl:
            "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
         lastSeen: "3h ago",
         lastSeenDateTime: "2023-01-23T13:23Z",
      },
      {
         name: "Dries Vincent",
         email: "dries.vincent@example.com",
         role: "Business Relations",
         imageUrl:
            "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
         lastSeen: null,
      },
      {
         name: "Michael Foster",
         email: "michael.foster@example.com",
         role: "Co-Founder / CTO",
         imageUrl:
            "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
         lastSeen: "3h ago",
         lastSeenDateTime: "2023-01-23T13:23Z",
      },
      {
         name: "Dries Vincent",
         email: "dries.vincent@example.com",
         role: "Business Relations",
         imageUrl:
            "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
         lastSeen: null,
      }, {
         name: "Michael Foster",
         email: "michael.foster@example.com",
         role: "Co-Founder / CTO",
         imageUrl:
            "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
         lastSeen: "3h ago",
         lastSeenDateTime: "2023-01-23T13:23Z",
      },
      {
         name: "Dries Vincent",
         email: "dries.vincent@example.com",
         role: "Business Relations",
         imageUrl:
            "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
         lastSeen: null,
      }, {
         name: "Michael Foster",
         email: "michael.foster@example.com",
         role: "Co-Founder / CTO",
         imageUrl:
            "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
         lastSeen: "3h ago",
         lastSeenDateTime: "2023-01-23T13:23Z",
      },
      {
         name: "Dries Vincent",
         email: "dries.vincent@example.com",
         role: "Business Relations",
         imageUrl:
            "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
         lastSeen: null,
      }, {
         name: "Michael Foster",
         email: "michael.foster@example.com",
         role: "Co-Founder / CTO",
         imageUrl:
            "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
         lastSeen: "3h ago",
         lastSeenDateTime: "2023-01-23T13:23Z",
      },
      {
         name: "Dries Vincent",
         email: "dries.vincent@example.com",
         role: "Business Relations",
         imageUrl:
            "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
         lastSeen: null,
      },
   ];

   return (
      <div className="max-w-[1200px] mx-auto p-4">
         <ul role="list" className="divide-y divide-white/5">
            {people.map((person) => (
               <li key={person.email} className="flex justify-between gap-x-6 py-5">
                  <div className="flex min-w-0 gap-x-4">
                     <img
                        alt={person.name}
                        src={person.imageUrl}
                        className="h-12 w-12 flex-none rounded-full bg-gray-800  outline-1 outline-white/10"
                     />
                     <div className="min-w-0 flex-auto">
                        <p className="text-sm font-semibold text-white">{person.name}</p>
                        <p className="mt-1 truncate text-xs text-gray-400">{person.email}</p>
                     </div>
                  </div>
                  <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                     <p className="text-sm text-white">{person.role}</p>
                     {person.lastSeen ? (
                        <p className="mt-1 text-xs text-gray-400">
                           Last seen{" "}
                           <time dateTime={person.lastSeenDateTime}>{person.lastSeen}</time>
                        </p>
                     ) : (
                        <div className="mt-1 flex items-center gap-x-1.5">
                           <div className="flex-none rounded-full bg-emerald-500/30 p-1">
                              <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                           </div>
                           <p className="text-xs text-gray-400">Online</p>
                        </div>
                     )}
                  </div>
               </li>
            ))}
         </ul>
      </div>
   );
};

export default Xodimlar;
