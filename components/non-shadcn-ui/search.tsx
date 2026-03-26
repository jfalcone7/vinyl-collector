"use client"
import { forwardRef } from "react";
import { ButtonGroup } from "@/components/ui/button-group"
import { Field, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

const Search = forwardRef<HTMLInputElement, { searchType: string }>(function Search(
  { searchType }
  , ref
) {
  return (
    <Field>
      <FieldLabel htmlFor="input-button-group">{searchType === 'artist' ? 'Artist' : 'Album Title'}</FieldLabel>
      <ButtonGroup>
        <Input ref={ref} id="input-button-group" placeholder="Type to search..." />
      </ButtonGroup>
    </Field>
  );
});

export default Search;