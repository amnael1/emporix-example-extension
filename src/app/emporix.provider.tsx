'use client'

import { createContext, useState, useMemo } from "react";
import { EmporixState } from "./emporix.model";

interface EmporixContextProps {
    state: EmporixState;
    setState: (newState: EmporixState) => void;
}

const defaultState: EmporixState = {
    isLoggedIn: false,
};

export const EmporixContext = createContext<EmporixContextProps>({
    state: defaultState,
    setState: () => {}
});

export default function EmporixProvider({children}: { children: React.ReactNode })  {
    const [state, setState] = useState<EmporixState>(defaultState);

    const value = useMemo(() => ({ state, setState }), [state]);

    return (
        <EmporixContext.Provider value={value}>
            {children}
        </EmporixContext.Provider>
    );
}
