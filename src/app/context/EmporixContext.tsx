// src/app/context/EmporixContext.tsx
'use client'

import { createContext, useContext, useState, ReactNode } from 'react'
import { EmporixState } from '@/app/emporix.model'

type EmporixContextType = {
  state: EmporixState
  setState: (state: EmporixState) => void
}

const EmporixContext = createContext<EmporixContextType | undefined>(undefined)

export function EmporixProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<EmporixState>({ isLoggedIn: false })

  return (
    <EmporixContext.Provider value={{ state, setState }}>
      {children}
    </EmporixContext.Provider>
  )
}

export function useEmporix() {
  const context = useContext(EmporixContext)
  if (!context) {
    throw new Error('useEmporix must be used within an EmporixProvider')
  }
  return context
}
