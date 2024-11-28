"use client"
import Image from "next/image";
import styles from "./page.module.css";
import { Header } from "./components/header";

import { Question } from "./components/question";
import Footer from "./components/footer/footer";
export default function Home() {
  return (
   <div>
   <Header/>
   <Question/>
   <Footer/>
   </div>
  );
}
