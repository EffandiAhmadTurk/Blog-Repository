"use client"
import Image from "next/image";
import { useState } from "react";
import About3 from "../../../components/About/AboutHero";
import Navbar from "../../../components/common/navbar";
import FAQ from "../../../components/common/faq";
import Footer from "../../../components/common/footer";
import Content from "../../../components/About/content";
import ContactForm from "../../../components/Contact/contact-form"
import "../globals.css";
export default function ContactUs() {
  return (
   <div>
    <Navbar/>
   <ContactForm />
<FAQ />
<Footer/>
   </div>
  );
}