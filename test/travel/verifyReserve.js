"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReserveFly = ReserveFly;
var readline = require("readline");
var flys = [
    {
        n: 1,
        start: "Belém",
        destiny: "São Paulo",
        date: "01/06/2025",
        time: "11:20:00-AM",
        assents: [1, 5, 8, 10, 26, 32],
        price: "R$ 1050.00",
    },
    {
        n: 2,
        start: "Belém",
        destiny: "São Paulo",
        date: "02/06/2025",
        time: "01:40:00-PM",
        assents: [5, 6, 7, 14, 30, 31, 33],
        price: "R$ 950.00",
    },
    {
        n: 3,
        start: "Belém",
        destiny: "Maranhão",
        date: "04/10/2025",
        time: "10:30:00-PM",
        assents: [5, 6, 15, 17, 22, 27, 30, 34],
        price: "R$ 1200.00",
    },
    {
        n: 4,
        start: "Belém",
        destiny: "Maranhão",
        date: "04/10/2025",
        time: "8:30:00-PM",
        assents: [1, 17, 30],
        price: "R$ 800.00",
    },
    {
        n: 5,
        start: "Belém",
        destiny: "Brasília",
        date: "15/07/2025",
        time: "04:15:00-AM",
        assents: [6, 14, 15, 16, 17, 20, 25, 27, 28, 30, 32, 33],
        price: "R$ 1560.00",
    },
    {
        n: 6,
        start: "Belém",
        destiny: "Brasília",
        date: "14/07/2025",
        time: "09:45:00-AM",
        assents: [],
        price: "R$ 1000.00",
    },
];
function Ask(question) {
    var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    return new Promise(function (resolve) {
        rl.question(question, function (response) {
            rl.close();
            resolve(response.trim());
        });
    });
}
function sendEmail(name, email) {
    console.log("\n--- Email Confirmation ---\n" +
        "From: flyenterprise@mail.com\n" +
        "To: ".concat(email, "\n\n") +
        "Hello, ".concat(name, "! We are happy to say that your reservation has been completed!\n"));
}
function ReserveFly(start, destiny) {
    return __awaiter(this, void 0, void 0, function () {
        var result, flightChoice, _a, chosenFly, chosenAssent, _b, name, email;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    result = flys.filter(function (f) { return f.start === start && f.destiny === destiny; });
                    if (result.length === 0) {
                        return [2 /*return*/, "There are no available flights for these locations."];
                    }
                    console.log("\nAvailable flights:");
                    result.forEach(function (f) {
                        console.log("Flight Number: ".concat(f.n, " | Date: ").concat(f.date, " | Time: ").concat(f.time, " | Price: ").concat(f.price));
                    });
                    _a = Number;
                    return [4 /*yield*/, Ask("Choose a flight by number: ")];
                case 1:
                    flightChoice = _a.apply(void 0, [_c.sent()]);
                    chosenFly = result.find(function (f) { return f.n === flightChoice; });
                    if (!chosenFly) {
                        return [2 /*return*/, "Invalid flight number selected."];
                    }
                    if (chosenFly.assents.length === 0) {
                        return [2 /*return*/, "No available seats on this flight."];
                    }
                    console.log("\nAvailable seats: ".concat(chosenFly.assents.join(', ')));
                    _b = Number;
                    return [4 /*yield*/, Ask("Choose your seat number: ")];
                case 2:
                    chosenAssent = _b.apply(void 0, [_c.sent()]);
                    if (!chosenFly.assents.includes(chosenAssent)) {
                        return [2 /*return*/, "This seat is not available."];
                    }
                    return [4 /*yield*/, Ask("Your Name: ")];
                case 3:
                    name = _c.sent();
                    return [4 /*yield*/, Ask("Your Email: ")];
                case 4:
                    email = _c.sent();
                    sendEmail(name, email);
                    return [2 /*return*/, "Seat ".concat(chosenAssent, " reserved on flight ").concat(chosenFly.n, "!")];
            }
        });
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var startPoint, destinyPoint, resultMessage, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 4, , 5]);
                    return [4 /*yield*/, Ask("Your start point: ")];
                case 1:
                    startPoint = _a.sent();
                    return [4 /*yield*/, Ask("Your destiny point: ")];
                case 2:
                    destinyPoint = _a.sent();
                    return [4 /*yield*/, ReserveFly(startPoint, destinyPoint)];
                case 3:
                    resultMessage = _a.sent();
                    console.log("\n" + resultMessage);
                    return [3 /*break*/, 5];
                case 4:
                    error_1 = _a.sent();
                    console.error("An unexpected error occurred:", error_1.message);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
main();
