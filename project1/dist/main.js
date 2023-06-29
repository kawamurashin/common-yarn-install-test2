"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Main = void 0;
const utility_1 = require("common/util/utility");
class Main {
    static start() {
        console.log("project1 start " + new Date().toLocaleString());
        new utility_1.Utility();
    }
}
exports.Main = Main;
Main.start();
//# sourceMappingURL=main.js.map