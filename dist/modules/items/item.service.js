"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteItem = exports.updateItem = exports.getItemById = exports.getItems = exports.createItem = void 0;
const itemRepository = __importStar(require("./item.repositroy"));
const createItem = (body) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const item = yield itemRepository.createItem(body);
        return item;
    }
    catch (e) {
        throw new Error(e.message);
    }
});
exports.createItem = createItem;
const getItems = (name) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const items = yield itemRepository.getItems(name);
        return items;
    }
    catch (e) {
        throw new Error(e.message);
    }
});
exports.getItems = getItems;
const getItemById = (itemId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const item = yield itemRepository.getItemById(itemId);
        return item;
    }
    catch (e) {
        throw new Error(e.message);
    }
});
exports.getItemById = getItemById;
const updateItem = (itemId, body) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const item = yield itemRepository.updateItem(itemId, body);
        return item;
    }
    catch (e) {
        throw new Error(e.message);
    }
});
exports.updateItem = updateItem;
const deleteItem = (itemId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const item = yield itemRepository.deleteItem(itemId);
        return item;
    }
    catch (e) {
        throw new Error(e.message);
    }
});
exports.deleteItem = deleteItem;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL21vZHVsZXMvaXRlbXMvaXRlbS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxrRUFBb0Q7QUFHN0MsTUFBTSxVQUFVLEdBQUcsQ0FBTyxJQUFXLEVBQUUsRUFBRTtJQUM1QyxJQUFJO1FBQ0EsTUFBTSxJQUFJLEdBQUcsTUFBTSxjQUFjLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRW5ELE9BQU8sSUFBSSxDQUFDO0tBQ2Y7SUFBQyxPQUFPLENBQUMsRUFBRTtRQUNSLE1BQU0sSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0tBQzlCO0FBQ0wsQ0FBQyxDQUFBLENBQUE7QUFSWSxRQUFBLFVBQVUsY0FRdEI7QUFFTSxNQUFNLFFBQVEsR0FBRyxDQUFPLElBQVksRUFBRSxFQUFFO0lBQzNDLElBQUk7UUFDQSxNQUFNLEtBQUssR0FBRyxNQUFNLGNBQWMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFbEQsT0FBTyxLQUFLLENBQUM7S0FDaEI7SUFBQyxPQUFPLENBQUMsRUFBRTtRQUNSLE1BQU0sSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0tBQzlCO0FBQ0wsQ0FBQyxDQUFBLENBQUE7QUFSWSxRQUFBLFFBQVEsWUFRcEI7QUFFTSxNQUFNLFdBQVcsR0FBRyxDQUFPLE1BQWMsRUFBRSxFQUFFO0lBQ2hELElBQUk7UUFDQSxNQUFNLElBQUksR0FBRyxNQUFNLGNBQWMsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFdEQsT0FBTyxJQUFJLENBQUM7S0FDZjtJQUFDLE9BQU8sQ0FBQyxFQUFFO1FBQ1IsTUFBTSxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7S0FDOUI7QUFDTCxDQUFDLENBQUEsQ0FBQTtBQVJZLFFBQUEsV0FBVyxlQVF2QjtBQUVNLE1BQU0sVUFBVSxHQUFHLENBQU8sTUFBYyxFQUFFLElBQVcsRUFBRSxFQUFFO0lBQzVELElBQUk7UUFDQSxNQUFNLElBQUksR0FBRyxNQUFNLGNBQWMsQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRTNELE9BQU8sSUFBSSxDQUFDO0tBQ2Y7SUFBQyxPQUFPLENBQUMsRUFBRTtRQUNSLE1BQU0sSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0tBQzlCO0FBQ0wsQ0FBQyxDQUFBLENBQUE7QUFSWSxRQUFBLFVBQVUsY0FRdEI7QUFFTSxNQUFNLFVBQVUsR0FBRyxDQUFPLE1BQWMsRUFBRSxFQUFFO0lBQy9DLElBQUk7UUFDQSxNQUFNLElBQUksR0FBRyxNQUFNLGNBQWMsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFckQsT0FBTyxJQUFJLENBQUM7S0FDZjtJQUFDLE9BQU8sQ0FBQyxFQUFFO1FBQ1IsTUFBTSxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7S0FDOUI7QUFDTCxDQUFDLENBQUEsQ0FBQTtBQVJZLFFBQUEsVUFBVSxjQVF0QiJ9