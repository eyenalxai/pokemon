import { Autocomplete, styled } from "@mui/material";

export const AutocompleteStyled = styled(Autocomplete)(() => ({
    '& fieldset': {
        borderRadius: '0.6em',
    },
}));