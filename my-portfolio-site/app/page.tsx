'use client';

import React from "react";
import {Menu} from "@/app/components/Menu";
import {LandingPage} from "@/app/components/LandingPage";
import {MyParticles} from "@/app/components/particles";

export default function Home() {
    return (
    <div>
        <MyParticles/>
        <Menu/>
        <div className={"main-container"}>
            <LandingPage/>
        </div>
    </div>

    );
}