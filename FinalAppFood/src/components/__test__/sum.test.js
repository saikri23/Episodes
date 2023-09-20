import { sum } from "../sum"

test("sum funct calc sum ogf 2 numbers",()=>{
    const result = sum(3,6);

    expect(result).toBe(9);
});