'use client'

import { useEffect, useState } from "react";
import {EmporixState} from "@/app/emporix.model";

export default function Home() {

    const [state, setState] = useState<EmporixState>({isLoggedIn: false});

    useEffect(() => {
        (async () => {
            const { registerClient, registerCallback } = await import('md-ext/lib');
            registerClient();
            registerCallback('callbackId', (ctx: unknown) => {
                setState({ ...ctx as EmporixState, isLoggedIn: true });
            });
        })();
    }, []);

    return (
        <>
            {state.isLoggedIn && (
                <p>Logged in</p>
            )}
            {!state.isLoggedIn && (
                <p>Not logged in</p>
            )}
        </>
    );
}
