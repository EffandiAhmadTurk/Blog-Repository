"use client"
import Image from "next/image";
import { useState } from "react";
import Navbar from "../../../components/common/navbar";
import BlogComponent from "../../../components/Blog/blogComponent"
import Footer from "../../../components/common/footer";
import BlogFour from "../../../components/Blog/blogFour";
import BlogThree from "../../../components/Blog/blogThree"
export default function Blog() {
  return (
   <div>
    <Navbar />
    <div className="mt-8">
    <BlogThree />
    </div>
    <BlogFour />
    <BlogComponent />
    <Footer />
   </div>
  );
}
