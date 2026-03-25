"use server";

import DiscogsConnector from "@/utils/discogs-connector";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { query, type = "general" } = body;

        if (!query || typeof query !== "string") {
            return NextResponse.json(
                { error: "Query parameter is required and must be a string" },
                { status: 400 }
            );
        }

        const connector = DiscogsConnector.getInstance();

        let results;
        if (type === "artist") {
            results = await connector.searchArtists(query);
        } else if (type === "album") {
            results = await connector.searchAlbums(query);
        } else {
            results = await connector.search(query);
        }

        return NextResponse.json(results);

    } catch (error) {
        //TODO may want to... 
        // -add more specific error handling
        // -log the error to an external service for monitoring
        // -add more details to the error response
        console.error("Discogs API error:", error);
        return NextResponse.json(
            { error: "Failed to search Discogs database" },
            { status: 500 }
        );
    }
}