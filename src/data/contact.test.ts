import { describe, it } from "node:test";
import { strict as assert } from "node:assert";
import { CONTACT_POSTAL_CODE } from "./contact";

describe("PROJETAJ contact address", () => {
  it("uses the current postal code supplied by the user", () => {
    assert.equal(CONTACT_POSTAL_CODE, "44820-003");
  });
});