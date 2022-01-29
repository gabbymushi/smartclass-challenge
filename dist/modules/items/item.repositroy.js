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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteItem = exports.updateItem = exports.getItemById = exports.getItems = exports.createItem = void 0;
const item_model_1 = require("./item.model");
const createItem = (body) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const item = yield item_model_1.Item.create(body);
        return item;
    }
    catch (e) {
        throw new Error(e.message);
    }
});
exports.createItem = createItem;
const getItems = (keyword) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const search = new RegExp('.*' + keyword + '.*', 'i');
        const items = yield item_model_1.Item.find({ name: { $regex: search } });
        return items;
    }
    catch (e) {
        throw new Error(e.message);
    }
});
exports.getItems = getItems;
const getItemById = (itemId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const item = yield item_model_1.Item.findOne({ _id: itemId });
        return item;
    }
    catch (e) {
        throw new Error(e.message);
    }
});
exports.getItemById = getItemById;
const updateItem = (itemId, body) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const item = yield item_model_1.Item.findOneAndUpdate({ _id: itemId }, Object.assign({}, body), { new: true });
        return item;
    }
    catch (e) {
        throw new Error(e.message);
    }
});
exports.updateItem = updateItem;
const deleteItem = (itemId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const item = yield item_model_1.Item.deleteOne({ _id: itemId });
        return item;
    }
    catch (e) {
        throw new Error(e.message);
    }
});
exports.deleteItem = deleteItem;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS5yZXBvc2l0cm95LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL21vZHVsZXMvaXRlbXMvaXRlbS5yZXBvc2l0cm95LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLDZDQUEyQztBQUVwQyxNQUFNLFVBQVUsR0FBRyxDQUFPLElBQVcsRUFBRSxFQUFFO0lBQzVDLElBQUk7UUFDQSxNQUFNLElBQUksR0FBRyxNQUFNLGlCQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXJDLE9BQU8sSUFBSSxDQUFDO0tBQ2Y7SUFBQyxPQUFPLENBQUMsRUFBRTtRQUNSLE1BQU0sSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0tBQzlCO0FBQ0wsQ0FBQyxDQUFBLENBQUE7QUFSWSxRQUFBLFVBQVUsY0FRdEI7QUFFTSxNQUFNLFFBQVEsR0FBRyxDQUFPLE9BQWUsRUFBRSxFQUFFO0lBQzlDLElBQUk7UUFDQSxNQUFNLE1BQU0sR0FBRyxJQUFJLE1BQU0sQ0FBQyxJQUFJLEdBQUcsT0FBTyxHQUFHLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztRQUV0RCxNQUFNLEtBQUssR0FBRyxNQUFNLGlCQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQztRQUU1RCxPQUFPLEtBQUssQ0FBQztLQUNoQjtJQUFDLE9BQU8sQ0FBQyxFQUFFO1FBQ1IsTUFBTSxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7S0FDOUI7QUFDTCxDQUFDLENBQUEsQ0FBQTtBQVZZLFFBQUEsUUFBUSxZQVVwQjtBQUVNLE1BQU0sV0FBVyxHQUFHLENBQU8sTUFBYyxFQUFFLEVBQUU7SUFDaEQsSUFBSTtRQUNBLE1BQU0sSUFBSSxHQUFHLE1BQU0saUJBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztRQUVqRCxPQUFPLElBQUksQ0FBQztLQUNmO0lBQUMsT0FBTyxDQUFDLEVBQUU7UUFDUixNQUFNLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztLQUM5QjtBQUNMLENBQUMsQ0FBQSxDQUFBO0FBUlksUUFBQSxXQUFXLGVBUXZCO0FBRU0sTUFBTSxVQUFVLEdBQUcsQ0FBTyxNQUFjLEVBQUUsSUFBVyxFQUFFLEVBQUU7SUFDNUQsSUFBSTtRQUNBLE1BQU0sSUFBSSxHQUFHLE1BQU0saUJBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsb0JBQU8sSUFBSSxHQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7UUFFdEYsT0FBTyxJQUFJLENBQUM7S0FDZjtJQUFDLE9BQU8sQ0FBQyxFQUFFO1FBQ1IsTUFBTSxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7S0FDOUI7QUFDTCxDQUFDLENBQUEsQ0FBQTtBQVJZLFFBQUEsVUFBVSxjQVF0QjtBQUVNLE1BQU0sVUFBVSxHQUFHLENBQU8sTUFBYyxFQUFFLEVBQUU7SUFDL0MsSUFBSTtRQUNBLE1BQU0sSUFBSSxHQUFHLE1BQU0saUJBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztRQUVuRCxPQUFPLElBQUksQ0FBQztLQUNmO0lBQUMsT0FBTyxDQUFDLEVBQUU7UUFDUixNQUFNLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztLQUM5QjtBQUNMLENBQUMsQ0FBQSxDQUFBO0FBUlksUUFBQSxVQUFVLGNBUXRCIn0=