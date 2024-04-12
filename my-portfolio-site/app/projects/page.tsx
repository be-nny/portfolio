'use client';

import React from "react";
import {Menu} from "@/app/components/Menu";
import {Projects} from "@/app/components/Projects";

export default function Home() {
    return (
    <div>
        <Menu/>
        <div className={"main-container"}>
            <Projects/>
        </div>
    </div>
  );
}