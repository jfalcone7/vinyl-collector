export default function SearchResultList({ results }: { results: any[] }) {
    //TODO: add sorting and pagination
    // -sort by release year, album name (aphabetical), etc
    return (
        <div className="w-full max-w-4xl mt-8">
            <h2 className="text-2xl font-bold mb-4">Search Results</h2>
            {results.length === 0 ? (
                <p>No results found.</p>
            ) : (
                <ul className="space-y-4">
                    {results.map((result) => (
                        <li key={result.id} className="border border-gray-300 rounded-lg p-4">
                            <img src={result.cover_image} alt={result.title} className="w-full h-auto object-cover rounded-md" />
                            <h3 className="text-xl font-bold">{result.title}</h3>
                            <p className="text-gray-600">{result.artist}</p>
                            {result.year && <p className="text-gray-600">{result.year}</p>}
                            {result.genre && <p className="text-gray-600">{result.genre.join(", ")}</p>}
                            {result.country && <p className="text-gray-600">{result.country}</p>}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}