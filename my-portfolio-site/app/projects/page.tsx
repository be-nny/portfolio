'use client';

import React from "react";
import {Menu} from "@/app/components/Menu";
import {Projects} from "@/app/components/Projects";
import {MyParticles} from "@/app/components/particles";

export default function Home() {
    return (
    <div>
        <MyParticles/>
        <Menu/>
        <div className={"main-container"}>
            <Projects/>
        </div>
    </div>
  );
}