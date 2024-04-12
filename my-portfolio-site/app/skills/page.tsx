'use client';

import { TypeAnimation } from 'react-type-animation';
import React, {useEffect, useState} from "react";
import {Menu} from "@/app/components/Menu";
import {Socials} from "@/app/components/Socials";
import {Projects} from "@/app/components/Projects";
import {Skills} from "@/app/components/Skills";
import {LandingPage} from "@/app/components/LandingPage";
import {MyProvider, useMyContext} from '@/app/components/MyContext';
import Script from "next/script";


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