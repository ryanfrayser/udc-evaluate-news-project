//Import file
import { validURL } from "../src/client/js/checkURL.js";

//Describe Test

describe ("testing if the URL is valid", () => {

    test("testing the regex function for a valid url", () => {

        expect(validURL).toBeDefined();
    })
});