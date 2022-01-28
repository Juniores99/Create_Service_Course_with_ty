"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCourse = void 0;
const CreateService_1 = __importDefault(require("./CreateService"));
function CreateCourse(request, response) {
    CreateService_1.default.execute({
        name: "Nodejs",
        educator: "Juniores",
        duration: 10
    });
    CreateService_1.default.execute({
        name: "React",
        educator: "Pimp",
    });
    return response.send();
}
exports.CreateCourse = CreateCourse;
