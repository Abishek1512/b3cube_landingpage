"use client"

import { useState, useEffect } from 'react'
import { cn } from "@/lib/utils"
import Image from 'next/image'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      if (offset > 0) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <nav
    className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled 
          ? "bg-background/80 backdrop-blur-md border-b" 
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className='flex'>
            <Image width={100} height={20} src="https://cdn.prod.website-files.com/66d9977e72e7dfd970c9e964/66d9977e72e7dfd970c9e9eb_logo.svg" alt=""/>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="">Features</a>
              <a href="#" className="">Benefits</a>
              <a href="#" className="">Reward program</a>
              <a href="#" className="">Roadmap</a>
              <a href="#" className="">FAQ</a>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-4">
              <a href="#" className="">Coin Sale</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}