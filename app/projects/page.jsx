"use client"

import ProjectCard from "./ProjectCard"
import { SimpleGrid } from '@mantine/core';

export default function page() {
    return (
        <SimpleGrid
            cols={4}
            spacing='1rem'
            verticalSpacing='2rem'
            breakpoints={[
                { maxWidth: 'md', cols: 3, spacing: '1rem' },
                { maxWidth: 'sm', cols: 2, spacing: '1rem' },
                { maxWidth: 'xs', cols: 1, spacing: '1rem' },
            ]}
            sx={{margin: '1rem'}}
        >
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </SimpleGrid>
    )
}

function Card() {return(<ProjectCard
    image="https://i.imgur.com/Cij5vdL.png"
    link="https://mantine.dev/"
    title="Resident Evil Village review"
    rating="outstanding"
    description="Resident Evil Village is a direct sequel to 2017’s Resident Evil 7, but takes a very different direction to its predecessor, namely the fact that this time round instead of fighting against various mutated zombies, you’re now dealing with more occult enemies like werewolves and vampires."
    authorName='Bill Wormeater'
    authorImage="https://images.unsplash.com/photo-1593229874334-90d965f27c42?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
/>)}
