'use client';

import React from "react";
import {Menu} from "@/app/components/Menu";
import {Skills} from "@/app/components/Skills";


export default function Home() {
    return (
    <div>
        <Menu/>
        <div className={"main-container"}>
            <Skills/>
        </div>
    </div>
  );
}