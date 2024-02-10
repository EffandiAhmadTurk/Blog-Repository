"use client"
import Image from "next/image";
import { useState } from "react";
import About3 from "../../../components/About/aboutHero";
import Navbar from "../../../components/common/navbar";
import FAQ from "../../../components/common/faq";
import Footer from "../../../components/common/footer";
import Content from "../../../components/About/content";

export default function About() {
  return (
   <div>
    <Navbar/>
  
<About3 />
<div className="max-w-[1300px] mx-auto">
    <Content />
    </div>
<FAQ />
<Footer/>
   </div>
  );
}