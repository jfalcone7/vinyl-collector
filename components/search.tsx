"use client"
import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import { Field, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export default function Search() {
  async function handleSearch(searchValue: string) {
    //TODO implement search functionality
    // -get the value from the input field
    // -make a POST request to the /api/discogs-search endpoint with the query
    // -handle the response and display results to the user
    const response = await fetch('/api/discogs-search', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: searchValue, type: 'artist' })
    });
  }
  return (
    <Field>
      <FieldLabel htmlFor="input-button-group">Search for Artists</FieldLabel>
      <ButtonGroup>
        <Input id="input-button-group" placeholder="Type to search..." />
        <Button variant="outline" onClick={() => handleSearch((document.getElementById("input-button-group") as HTMLInputElement).value)}>
          Search
        </Button>
      </ButtonGroup>
    </Field>
  );
}