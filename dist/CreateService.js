"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CreateService {
    execute({ duration = 8, educator, name }) {
        console.log(name, duration, educator);
    }
}
exports.default = new CreateService();
