import {LightContainer} from "../src/lightContainer";

describe("testing lightContainer", function(){
    test("destination, cargoWeight set from constructor", function(){
        const container = new LightContainer("Tokyo", 20000);
        expect(container.destination).toEqual("Tokyo");
        expect(container.cargoWeight).toEqual(20000);
    })
})