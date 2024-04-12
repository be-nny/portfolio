'use client';

import React from "react";
import {Menu} from "@/app/components/Menu";
import {LandingPage} from "@/app/components/LandingPage";

export default function Home() {
    return (
    <div>
        <Menu/>
        <div className={"main-container"}>
            <LandingPage/>
        </div>
    </div>
  );
}