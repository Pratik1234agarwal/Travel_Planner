import { setDaysLeft } from "../src/Client/js/helper";



test("Testing the setDaysLeft function ", () => {
    expect(setDaysLeft("07/18/2020")).toBe(1);
    expect(setDaysLeft("07/20/2020")).toBe(3);
});
