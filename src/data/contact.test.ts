import { describe, expect, it } from "bun:test";
import { CONTACT_POSTAL_CODE } from "./contact";

describe("PROJETAJ contact address", () => {
  it("uses the current postal code supplied by the user", () => {
    expect(CONTACT_POSTAL_CODE).toBe("44820-003");
  });
});