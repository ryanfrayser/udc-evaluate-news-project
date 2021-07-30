//Import file
import { validURL } from "../src/client/js/checkURL.js";

//Describe Test

describe ("testing if the URL is valid", () => {

    test("testing the validURL() function", () => {

        expect(validURL).toBeDefined();
    })
});