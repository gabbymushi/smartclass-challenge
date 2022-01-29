"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OTP = void 0;
const mongoose_1 = require("mongoose");
const OtpSchema = new mongoose_1.Schema({
    otp: {
        type: Number,
        required: [true, 'OTP  is required!'],
        index: true
    },
    username: {
        type: String,
        required: [true, 'Username is required!'],
        unique: true,
        index: true
    },
    varifiedAt: {
        type: Date
    },
}, { timestamps: true });
exports.OTP = (0, mongoose_1.model)('OTP', OtpSchema);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3RwLm1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL21vZHVsZXMvb3RwL290cC5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx1Q0FBbUQ7QUFRbkQsTUFBTSxTQUFTLEdBQUcsSUFBSSxpQkFBTSxDQUFDO0lBQ3pCLEdBQUcsRUFBRTtRQUNELElBQUksRUFBRSxNQUFNO1FBQ1osUUFBUSxFQUFFLENBQUMsSUFBSSxFQUFFLG1CQUFtQixDQUFDO1FBQ3JDLEtBQUssRUFBRSxJQUFJO0tBQ2Q7SUFDRCxRQUFRLEVBQUU7UUFDTixJQUFJLEVBQUUsTUFBTTtRQUNaLFFBQVEsRUFBRSxDQUFDLElBQUksRUFBRSx1QkFBdUIsQ0FBQztRQUN6QyxNQUFNLEVBQUUsSUFBSTtRQUNaLEtBQUssRUFBRSxJQUFJO0tBQ2Q7SUFDRCxVQUFVLEVBQUU7UUFDUixJQUFJLEVBQUUsSUFBSTtLQUNiO0NBQ0osRUFDRyxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsQ0FDdkIsQ0FBQztBQUVXLFFBQUEsR0FBRyxHQUFHLElBQUEsZ0JBQUssRUFBTyxLQUFLLEVBQUUsU0FBUyxDQUFDLENBQUMifQ==