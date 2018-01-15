import { greet } from "./greet";

describe("greet function", () =>{

	it("should include the name in the message", () =>{

		expect(greet("mosh")).toContain("mosh");
	});
});