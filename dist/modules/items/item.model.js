"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Item = void 0;
const mongoose_1 = require("mongoose");
const ItemSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, 'Name  is required!'],
    },
    amount: {
        type: Number
    },
    pictureUrl: {
        type: String
    }
}, { timestamps: true });
exports.Item = (0, mongoose_1.model)('Item', ItemSchema);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVzL2l0ZW1zL2l0ZW0ubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsdUNBQW1EO0FBUW5ELE1BQU0sVUFBVSxHQUFHLElBQUksaUJBQU0sQ0FBQztJQUMxQixJQUFJLEVBQUU7UUFDRixJQUFJLEVBQUUsTUFBTTtRQUNaLFFBQVEsRUFBRSxDQUFDLElBQUksRUFBRSxvQkFBb0IsQ0FBQztLQUN6QztJQUNELE1BQU0sRUFBRTtRQUNKLElBQUksRUFBRSxNQUFNO0tBQ2Y7SUFDRCxVQUFVLEVBQUU7UUFDUixJQUFJLEVBQUUsTUFBTTtLQUNmO0NBRUosRUFDRyxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsQ0FDdkIsQ0FBQztBQUVXLFFBQUEsSUFBSSxHQUFHLElBQUEsZ0JBQUssRUFBUSxNQUFNLEVBQUUsVUFBVSxDQUFDLENBQUMifQ==