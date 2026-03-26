"use client"
import { useState, useRef } from "react";
import Search from "@/components/non-shadcn-ui/search";
import { searchDiscogs } from "@/utils/discogs-actions";
import { Button } from "@/components/ui/button";
import { NativeSelect, NativeSelectOption } from "../ui/native-select";
import type { SearchQuery, SearchResults } from "@/lib/types";
import SearchResultList from "@/components/non-shadcn-ui/search-result-list";

export default function SearchController() {
    const [results, setResults] = useState<SearchResults | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const artistInputRef = useRef<HTMLInputElement>(null);
    const albumInputRef = useRef<HTMLInputElement>(null);
    const countrySelectRef = useRef<HTMLSelectElement>(null);

    async function handleSearch() {
        //set loading state to true to show a loading indicator while we wait for the API response
        setIsLoading(true);
        const searchPayload: SearchQuery = {};
        const artistQuery = artistInputRef.current?.value || "";
        const albumQuery = albumInputRef.current?.value || "";
        const countryQuery = countrySelectRef.current?.value || "";
        if(artistQuery) searchPayload.artist = artistQuery;
        if(albumQuery) searchPayload.release_title = albumQuery;
        if(countryQuery) searchPayload.country = countryQuery;
        //we only want vinyl records in our search results, maybe later we can let users choose other formats like CD or cassette
        searchPayload.format = "vinyl"; 
        
        try {
            const searchResults : SearchResults = await searchDiscogs(searchPayload);
            searchResults && console.log("Discogs Search Results:", searchResults);
            setResults(searchResults);
            setIsLoading(false);
        } catch (error) {
            console.error(error);
            setIsLoading(false);
        }
    }
    return (
        <div className="flex flex-col gap-4">
            <Search searchType="artist" ref={artistInputRef} />
            <Search searchType="album" ref={albumInputRef} />
            <NativeSelect ref={countrySelectRef}>
                <NativeSelectOption value="">Select release region</NativeSelectOption>
                <NativeSelectOption value="worldwide">Worldwide</NativeSelectOption>
                <NativeSelectOption value="us">US</NativeSelectOption>
                <NativeSelectOption value="">All Regions</NativeSelectOption>
            </NativeSelect>
            <Button onClick={handleSearch}>Search For Records</Button>
            {isLoading && <p>Loading...</p>}
            {results && <SearchResultList results={results.results} />}
        </div>
    );
}