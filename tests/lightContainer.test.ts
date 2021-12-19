import {LightContainer} from "../src/lightContainer";

describe("testing lightContainer", function(){
    test("destination, cargoWeight set from constructor", function(){
        const container = new LightContainer("Tokyo", 20000);
        expect(container.destination).toEqual("Tokyo");
        expect(container.cargoWeight).toEqual(20000);
    });
    test("cargoWeight defaults to 0 when 2nd param omitted", function(){
        const container = new LightContainer("China");
        expect(container.cargoWeight).toEqual(0);
    });
    test("getGrossWeight returns cargoWeight", function(){
        const container = new LightContainer("China", 25000);
        let cargoWeight = container.getGrossWeight();
        expect(cargoWeight).toEqual(25000);
    });
    test("getGrossWeight returns cargoWeight", function(){
        const container = new LightContainer("Guam", 10000);
        let cargoWeight = container.getGrossWeight();
        expect(cargoWeight).toEqual(10000);
    });
})