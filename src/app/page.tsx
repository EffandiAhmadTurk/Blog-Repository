"use client"
import Image from "next/image";
import { useState } from "react";
import Navbar from "../../components/common/navbar";
import Hero8 from "../../components/Home/hero";
import Blog1 from "../../components/Home/blog";
import Feature15 from "../../components/Home/featured";
import NewsLetter from "../../components/Home/newsletter";
import BlogFooter from "../../components/Home/blog2";
import FeaturedSection from '../../components/Home/featuredsection'
import FAQ from "../../components/common/faq";
import Footer from "../../components/common/footer";
export default function Home() {


  return (
   <div>
    <Navbar />
    <Hero8 />
    <Blog1/> 
    <Feature15 />
    <NewsLetter />
    <BlogFooter />
    <FeaturedSection />
    <FAQ />
    <Footer />
   </div>
  );
}
