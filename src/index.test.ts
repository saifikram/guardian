import { myConst } from ".";

describe("Pairing test", () => {
  it("runs", () => {
    console.log(`${myConst} == false`);
    expect(myConst).toBe(false );
  });
});
