"use client";
import { forwardRef } from "react";
import { ButtonGroup } from "@/components/ui/button-group";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

const Search = forwardRef<HTMLInputElement, { searchType: string, id: string }>(
    function Search({ searchType, id }, ref) {
        return (
            <Field>
                <FieldLabel htmlFor={id}>
                    {searchType === "artist" ? "Artist" : "Album Title"}
                </FieldLabel>
                <ButtonGroup>
                    <Input
                        ref={ref}
                        id={id}
                        placeholder="Type to search..."
                    />
                </ButtonGroup>
            </Field>
        );
    },
);

export default Search;
