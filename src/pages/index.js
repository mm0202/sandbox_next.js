import React from "react";
import Link from 'next/link'
import Header from "../components/Header";

const Index = () => (
    <div>
        <Header/>
        <ul>
            <li>
                <p>Hello Next.js</p>
            </li>
            <li>
                <Link href={"/about"}>
                    <a>About Page</a>
                </Link>
            </li>
            <li>
                <Link href={"/about"}>
                    <a style={{fontSize: 20}}>About Page</a>
                </Link>
            </li>
            <li>
                <Link href={"/about"}>
                    <button>Go to About Page</button>
                </Link>
            </li>
        </ul>
    </div>
);

export default Index