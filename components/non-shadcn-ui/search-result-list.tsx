import {
    Item,
    ItemActions,
    ItemGroup,
    ItemContent,
    ItemDescription,
    ItemMedia,
    ItemTitle,
    ItemHeader,
} from "@/components/ui/item";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface SearchResultListProps {
    results: any[];
    onAddToCollection: (album: any) => void;
}

export default function SearchResultList({
    results,
    onAddToCollection,
}: SearchResultListProps) {
    //TODO: add sorting and pagination
    // -sort by release year, album name (aphabetical), etc
    function addToCollection(album: any) {
        onAddToCollection(album);
    }

    return (
        <div className="w-full max-w-4xl mt-8">
            <h2 className="text-2xl font-bold mb-4">Search Results</h2>
            <ItemGroup className="gap-4">
                {results.map((album) => (
                    <Item
                        key={album.id}
                        className="flex gap-4 border border-gray-300 rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
                        variant="outline"
                        role="listitem"
                        render={
                            <a href="#">
                                <ItemMedia
                                    variant="image"
                                    className="w-32 h-32"
                                >
                                    <img
                                        src={album.thumb || null}
                                        alt={album.title}
                                        className="object-cover rounded-md"
                                    />
                                </ItemMedia>
                                <ItemContent>
                                    <ItemTitle className="line-clamp-1 font-bold">
                                        {album.title}
                                    </ItemTitle>
                                    <ItemDescription>
                                        {album.genre.join(", ")}
                                    </ItemDescription>
                                    <ItemDescription>
                                        {album.year}
                                    </ItemDescription>
                                    <ItemDescription>
                                        {album.country}
                                    </ItemDescription>
                                </ItemContent>
                                <ItemActions>
                                    <Button
                                        onClick={() => addToCollection(album)}
                                    >
                                        Add to Collection
                                    </Button>
                                </ItemActions>
                            </a>
                        }
                    />
                ))}
            </ItemGroup>
        </div>
    );
}
