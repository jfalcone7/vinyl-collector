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
import { Album } from "@/lib/types";

interface CollectionControllerProps {
    collection: any[];
}

export default function CollectionController({
    collection,
}: CollectionControllerProps) {
    function removeFromCollection(album: Album) {
        //todo
    }
    function clearCollection() {
        //todo
    }

    return (
        <div className="w-full">
            <h1 className="text-3xl font-bold mb-8 text-center">
                My Collection
            </h1>
            {collection.length === 0 ? (
                <p className="text-lg text-zinc-600 dark:text-zinc-400 text-center">
                    Your record collection will appear here once you start
                    adding albums from your search results.
                </p>
            ) : (
                <ItemGroup className="gap-4">
                    {collection.map((album) => (
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
                                            onClick={() =>
                                                removeFromCollection(album)
                                            }
                                        >
                                            Remove from Collection
                                        </Button>
                                    </ItemActions>
                                </a>
                            }
                        />
                    ))}
                </ItemGroup>
            )}
        </div>
    );
}
