"use client"
import { useState, useRef } from "react";
import Search from "@/components/non-shadcn-ui/search";
import { Button } from "@/components/ui/button";

export default function SearchGroup() {
    const [results, setResults] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const artistInputRef = useRef<HTMLInputElement>(null);
    const albumInputRef = useRef<HTMLInputElement>(null);

    interface SearchQuery {
        artist?: string;
        album?: string;
    }

    async function handleSearch() {
        setIsLoading(true);
        const searchPayload: SearchQuery = {};
        const artistQuery = artistInputRef.current?.value || "";
        const albumQuery = albumInputRef.current?.value || "";
        if(artistQuery) searchPayload.artist = artistQuery;
        if(albumQuery) searchPayload.album = albumQuery;

        try {
            const response = await fetch('/api/discogs-search', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(searchPayload)
            });
            const data = await response.json();
            setResults(data);
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    }
    return (
        <>
            <Search searchType="artist" />
            <Search searchType="album" />
            <Button onClick={handleSearch}>Search For Records</Button>
            {isLoading && <p>Loading...</p>}
        </>
    );
}