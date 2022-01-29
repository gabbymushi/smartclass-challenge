"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Config = void 0;
const mongoose_1 = require("mongoose");
const ConfigSchema = new mongoose_1.Schema({
    module: {
        type: String,
        required: [true, 'module is required'],
    },
    name: {
        type: String,
        required: [true, 'Config name is required'],
        index: true,
        trim: true
    },
    displayName: {
        type: String,
        required: [true, 'Display name is required'],
    },
    type: {
        type: String,
        required: [true, 'Type is required'],
        trim: true
    },
    value: {
        type: String,
        trim: true
    },
    country: {
        type: String,
        required: [true, 'Display name is required'],
        default: 'TZ',
        index: true
    },
}, { timestamps: true });
exports.Config = (0, mongoose_1.model)('Config', ConfigSchema);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLm1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL21vZHVsZXMvY29uZmlndXJhdGlvbnMvY29uZmlnLm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHVDQUFtRDtBQW9CbkQsTUFBTSxZQUFZLEdBQUcsSUFBSSxpQkFBTSxDQUMzQjtJQUNJLE1BQU0sRUFBRTtRQUNKLElBQUksRUFBRSxNQUFNO1FBQ1osUUFBUSxFQUFFLENBQUMsSUFBSSxFQUFFLG9CQUFvQixDQUFDO0tBQ3pDO0lBQ0QsSUFBSSxFQUFFO1FBQ0YsSUFBSSxFQUFFLE1BQU07UUFDWixRQUFRLEVBQUUsQ0FBQyxJQUFJLEVBQUUseUJBQXlCLENBQUM7UUFDM0MsS0FBSyxFQUFFLElBQUk7UUFDWCxJQUFJLEVBQUUsSUFBSTtLQUNiO0lBQ0QsV0FBVyxFQUFFO1FBQ1QsSUFBSSxFQUFFLE1BQU07UUFDWixRQUFRLEVBQUUsQ0FBQyxJQUFJLEVBQUUsMEJBQTBCLENBQUM7S0FDL0M7SUFDRCxJQUFJLEVBQUU7UUFDRixJQUFJLEVBQUUsTUFBTTtRQUNaLFFBQVEsRUFBRSxDQUFDLElBQUksRUFBRSxrQkFBa0IsQ0FBQztRQUNwQyxJQUFJLEVBQUUsSUFBSTtLQUNiO0lBQ0QsS0FBSyxFQUFFO1FBQ0gsSUFBSSxFQUFFLE1BQU07UUFDWixJQUFJLEVBQUUsSUFBSTtLQUNiO0lBQ0QsT0FBTyxFQUFFO1FBQ0wsSUFBSSxFQUFFLE1BQU07UUFDWixRQUFRLEVBQUUsQ0FBQyxJQUFJLEVBQUUsMEJBQTBCLENBQUM7UUFDNUMsT0FBTyxFQUFFLElBQUk7UUFDYixLQUFLLEVBQUUsSUFBSTtLQUNkO0NBQ0osRUFDRCxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsQ0FDdkIsQ0FBQztBQUVXLFFBQUEsTUFBTSxHQUFHLElBQUEsZ0JBQUssRUFBVSxRQUFRLEVBQUUsWUFBWSxDQUFDLENBQUMifQ==