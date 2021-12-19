import { HeavyContainer } from "../src/heavyContainer";

describe("tests for HeavyContainer class", function(){
    test("properties set from constructor", function(){
        const heavyContainer = new HeavyContainer(2000, "Japan", 23000);
        expect(heavyContainer.tareWeight).toEqual(2000);
        expect(heavyContainer.destination).toEqual("Japan");
        expect(heavyContainer.cargoWeight).toEqual(23000);
    });
    test("cargoWeight defaults to 0 when left out", function(){
        const heavyContainer = new HeavyContainer(2000, "Japan");
        expect(heavyContainer.tareWeight).toEqual(2000);
        expect(heavyContainer.destination).toEqual("Japan");
        expect(heavyContainer.cargoWeight).toEqual(0);
    });
    test("getGrossWeight returns tareWeight + cargoWeight", function(){
        const heavyContainer = new HeavyContainer(2000, "Japan", 15000);
        let grossWeight = heavyContainer.getGrossWeight();
        expect(grossWeight).toEqual(17000);
    });
    test("getGrossWeight returns tareWeight + cargoWeight", function(){
        const heavyContainer = new HeavyContainer(500, "Japan", 7000);
        let grossWeight = heavyContainer.getGrossWeight();
        expect(grossWeight).toEqual(7500);
    });
});