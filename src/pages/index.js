import React from "react";
import Link from 'next/link'

const Index = () => (
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
);

export default Index