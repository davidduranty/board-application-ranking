'use client';

import { FormEvent } from "react"
import { Button } from "~/src/components/form/Bouton"
import { Input } from "~/src/components/form/Input"

export const BoardForm = () => {
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => { 
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const title = String(formData.get("title"))
        fetch(`/pages/api/boards`, {
            method: "POST",
            body: JSON.stringify({
                title
            })
        })
    }
    return <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <h1 className="text-2xl">Create a new board</h1>
        <Input label="Title" type="title" />
        <Button type="submit">Create board</Button>
    </form>
}