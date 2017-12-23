import { expect } from "chai";

import Grail from "../../../src/models/grail";
import { getGrail, postGrail } from "../../../src/lib/grails/service";

describe("Grail Service", () => {
    describe("getGrail", () => {
        context("provided valid grail id", () => {
            it("returns found grail", async() => {
                const testGrail = {
                    name: "test grail",
                };
                const {
                    id: testGrailId,
                    name: testGrailName,
                } = await Grail.query()
                    .insert(testGrail);

                const {
                    id: grailId,
                    name: grailName,
                } = await getGrail(testGrailId);
                expect(grailId).to.eql(testGrailId);
                expect(grailName).to.eql(testGrailName);
            });
        });
    });
    describe("postGrail", () => {
        context("provided a name", () => {
            it("returns inserted grail", async() => {
                const testGrail = "test grail";
                const {
                    id: testGrailId,
                    name: testGrailName,
                } = await postGrail(testGrail);

                const {
                    id: grailId,
                    name:grailName,
                } = await Grail.query()
                    .findOne({ id: testGrailId });
                expect(grailId).to.eql(testGrailId);
                expect(grailName).to.eql(testGrailName);
            });
        });
    });
});
