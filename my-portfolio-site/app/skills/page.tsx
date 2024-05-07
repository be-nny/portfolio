'use client';

import React from "react";
import {Menu} from "@/app/components/Menu";
import {Skills} from "@/app/components/Skills";
import {MyParticles} from "@/app/components/particles";

export default function Home() {
    return (
    <div>
        <MyParticles/>
        <Menu/>
        <div className={"main-container"}>
            <Skills/>
        </div>
    </div>
  );
}