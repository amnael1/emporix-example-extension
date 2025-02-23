'use client'

import { useEffect } from "react"
import { useEmporix } from "./context/EmporixContext"
import { EmporixState } from "@/app/emporix.model";
import { Button, Field, Input, SimpleGrid } from "@chakra-ui/react";

export default function Home() {
    const { state, setState } = useEmporix()

    useEffect(() => {
        (async () => {
            const { registerClient, registerCallback } = await import('md-ext/lib')
            registerClient()
            registerCallback('callbackId', (ctx: unknown) => {
                setState({ ...ctx as EmporixState, isLoggedIn: true })
            })
        })()
    }, [setState])

    function handleSubmit(formData: FormData) {
        console.log(formData.get('query'))
    }

    return (
        <>
            <SimpleGrid>
                <form action={handleSubmit}>
                    <Field.Root required>
                        <Field.Label>
                            Query
                            <Field.RequiredIndicator />
                        </Field.Label>
                        <Input name="query" placeholder="customer.email:exapmple@domain.com" />
                    </Field.Root>
                    <Button type="submit">Search</Button>
                </form>
            </SimpleGrid>


            {state.isLoggedIn && <p>Logged in</p>}
            {!state.isLoggedIn && <p>Not logged in</p>}
        </>
    )
}
