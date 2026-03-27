"use client";
import { Panel } from "react-resizable-panels"; //TODO implement resizable panels for search and collection views
import SearchController from "@/components/non-shadcn-ui/search-controller";
import CollectionController from "@/components/non-shadcn-ui/collection-controller";
import { useState, useEffect } from "react";
import { Album } from "@/lib/types";

const COLLECTION_STORAGE_KEY = "vinyl-collection";

export default function Home() {
    const [collection, setCollection] = useState<Album[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    //load collection from localStorage on initial render
    useEffect(() => {
        try {
            const saved = localStorage.getItem(COLLECTION_STORAGE_KEY);
            if (saved) {
                const parsed = JSON.parse(saved);
                setCollection(parsed);
            }
        } catch (error) {
            console.error("Error loading collection from localStorage:", error);
        } finally {
            setIsLoading(false);
        }
    }, []); //no dependencies, only run on render

    // Save collection to localStorage
    useEffect(() => {
        if (!isLoading) {
            try {
                localStorage.setItem(COLLECTION_STORAGE_KEY, JSON.stringify(collection));
            } catch (error) {
                console.error("Error saving collection to localStorage:", error);
            }
        }
    }, [collection]); //run whenever collection changes

    function handleAddToCollection(album: Album) {
        setCollection([...collection, album]);
    }

    if (isLoading) {
        return (
            <div className="flex h-screen items-center justify-center bg-zinc-50 dark:bg-black">
                <p className="text-lg text-zinc-600 dark:text-zinc-400">
                    Loading your collection...
                </p>
            </div>
        );
    }

    return (
        <div className="flex h-screen bg-zinc-50 font-sans dark:bg-black">
            {/* Left half - Search */}
            <div className="flex-1 flex flex-col items-center justify-start overflow-y-auto border-r border-gray-300 dark:border-gray-700 p-8">
                <h1 className="text-3xl font-bold mb-8">Search</h1>
                <SearchController onAddToCollection={handleAddToCollection} />
            </div>

            {/* Right half - Collection */}
            <div className="flex-1 flex flex-col items-start justify-start overflow-y-auto p-8">
                <CollectionController collection={collection} />
            </div>
        </div>
    );
}
