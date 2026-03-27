"use server";
import DiscogsConnector from "@/utils/discogs-connector";
import type { SearchResults } from "@/lib/types";

export async function searchDiscogs(query: {
    artist?: string;
    release_title?: string;
    format?: string;
}): Promise<SearchResults> {
    try {
        const connector = DiscogsConnector.getInstance();
        const results: SearchResults = await connector.search(query);
        return results;
    } catch (error: any) {
        console.error("Discogs API error:", error);
        throw new Error("Failed to search Discogs database: " + error.message);
    }
}
