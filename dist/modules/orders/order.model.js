"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = exports.ORDER_STATUSES = void 0;
const mongoose_1 = require("mongoose");
var ORDER_STATUSES;
(function (ORDER_STATUSES) {
    ORDER_STATUSES[ORDER_STATUSES["ACTIVE"] = 1] = "ACTIVE";
    ORDER_STATUSES[ORDER_STATUSES["COMPLETED"] = 2] = "COMPLETED";
})(ORDER_STATUSES = exports.ORDER_STATUSES || (exports.ORDER_STATUSES = {}));
const OrderSchema = new mongoose_1.Schema({
    item: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Item',
        index: true,
        required: true
    },
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User',
        index: true,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    paidAmount: {
        type: Number,
        default: 0
    },
    status: {
        type: Number,
        enum: [ORDER_STATUSES],
        default: ORDER_STATUSES.ACTIVE
    }
}, { timestamps: true });
exports.Order = (0, mongoose_1.model)('Order', OrderSchema);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXIubW9kZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbW9kdWxlcy9vcmRlcnMvb3JkZXIubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsdUNBQW1EO0FBSW5ELElBQVksY0FHWDtBQUhELFdBQVksY0FBYztJQUN0Qix1REFBVSxDQUFBO0lBQ1YsNkRBQWEsQ0FBQTtBQUNqQixDQUFDLEVBSFcsY0FBYyxHQUFkLHNCQUFjLEtBQWQsc0JBQWMsUUFHekI7QUFXRCxNQUFNLFdBQVcsR0FBRyxJQUFJLGlCQUFNLENBQVM7SUFDbkMsSUFBSSxFQUFFO1FBQ0YsSUFBSSxFQUFFLGlCQUFNLENBQUMsS0FBSyxDQUFDLFFBQVE7UUFDM0IsR0FBRyxFQUFFLE1BQU07UUFDWCxLQUFLLEVBQUUsSUFBSTtRQUNYLFFBQVEsRUFBRSxJQUFJO0tBQ2pCO0lBQ0QsSUFBSSxFQUFFO1FBQ0YsSUFBSSxFQUFFLGlCQUFNLENBQUMsS0FBSyxDQUFDLFFBQVE7UUFDM0IsR0FBRyxFQUFFLE1BQU07UUFDWCxLQUFLLEVBQUUsSUFBSTtRQUNYLFFBQVEsRUFBRSxJQUFJO0tBQ2pCO0lBQ0QsTUFBTSxFQUFFO1FBQ0osSUFBSSxFQUFFLE1BQU07UUFDWixRQUFRLEVBQUUsSUFBSTtLQUNqQjtJQUNELFVBQVUsRUFBRTtRQUNSLElBQUksRUFBRSxNQUFNO1FBQ1osT0FBTyxFQUFFLENBQUM7S0FDYjtJQUNELE1BQU0sRUFBRTtRQUNKLElBQUksRUFBRSxNQUFNO1FBQ1osSUFBSSxFQUFFLENBQUMsY0FBYyxDQUFDO1FBQ3RCLE9BQU8sRUFBRSxjQUFjLENBQUMsTUFBTTtLQUNqQztDQUNKLEVBQ0csRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLENBQ3ZCLENBQUM7QUFFVyxRQUFBLEtBQUssR0FBRyxJQUFBLGdCQUFLLEVBQVMsT0FBTyxFQUFFLFdBQVcsQ0FBQyxDQUFDIn0=