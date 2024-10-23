'use client'
import React, { useState } from 'react'

type Props = {}

const FooterEmail = (props: Props) => {

    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle subscription logic here
        console.log("Submitted email:", email);
    };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center gap-2 p-2 bg-[#1a1a1a] rounded-xl max-w-md w-full border border-gray-800"
    >
      <div className="flex items-center flex-1 gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="icon icon-tabler icons-tabler-outline icon-tabler-mail"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
          <path d="M3 7l9 6l9 -6" />
        </svg>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email"
          className="w-full bg-transparent text-gray-300 placeholder-gray-400 focus:outline-none text-sm"
          required
        />
      </div>

      <button
        type="submit"
        className="px-6 py-2 bg-[#c2f84d] text-black font-semibold rounded-lg text-sm hover:bg-[#b3e747] transition-colors"
      >
        Subscribe
      </button>
    </form>
  );
}

export default FooterEmail