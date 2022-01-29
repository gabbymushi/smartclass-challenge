"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatCurrency = exports.parseTill = exports.getDateDiffInDays = exports.generateOTP = void 0;
const generateOTP = () => {
    const otp = Math.floor(1000 + Math.random() * 9000);
    return otp;
};
exports.generateOTP = generateOTP;
const getDateDiffInDays = (lowerDate, upperDate) => {
    lowerDate = new Date(lowerDate);
    upperDate = new Date(upperDate);
    const differenceInTime = upperDate.getTime() - lowerDate.getTime();
    const differenceInDays = differenceInTime / (1000 * 3600 * 24);
    return Math.floor(differenceInDays);
};
exports.getDateDiffInDays = getDateDiffInDays;
const parseTill = (till) => {
    let parsedTill = {};
    const tills = till.split('-');
    const length = tills.length;
    parsedTill.count = length;
    if (length === 3) {
        parsedTill.staffTill = tills[2];
    }
    if (length >= 2) {
        parsedTill.vendorBranchTill = `${tills[0]}-${tills[1]}`;
    }
    return parsedTill;
};
exports.parseTill = parseTill;
const formatCurrency = (amount) => {
    return new Intl.NumberFormat().format(amount);
};
exports.formatCurrency = formatCurrency;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdXRpbHMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ08sTUFBTSxXQUFXLEdBQUcsR0FBRyxFQUFFO0lBQzVCLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQztJQUNwRCxPQUFPLEdBQUcsQ0FBQztBQUNmLENBQUMsQ0FBQTtBQUhZLFFBQUEsV0FBVyxlQUd2QjtBQUVNLE1BQU0saUJBQWlCLEdBQUcsQ0FBQyxTQUFlLEVBQUUsU0FBZSxFQUFFLEVBQUU7SUFDbEUsU0FBUyxHQUFHLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ2hDLFNBQVMsR0FBRyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUVoQyxNQUFNLGdCQUFnQixHQUFHLFNBQVMsQ0FBQyxPQUFPLEVBQUUsR0FBRyxTQUFTLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDbkUsTUFBTSxnQkFBZ0IsR0FBRyxnQkFBZ0IsR0FBRyxDQUFDLElBQUksR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDLENBQUM7SUFFL0QsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLENBQUM7QUFDeEMsQ0FBQyxDQUFBO0FBUlksUUFBQSxpQkFBaUIscUJBUTdCO0FBRU0sTUFBTSxTQUFTLEdBQUcsQ0FBQyxJQUFZLEVBQUUsRUFBRTtJQUN0QyxJQUFJLFVBQVUsR0FBUSxFQUFFLENBQUM7SUFFekIsTUFBTSxLQUFLLEdBQWtCLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDN0MsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQztJQUM1QixVQUFVLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQztJQUUxQixJQUFJLE1BQU0sS0FBSyxDQUFDLEVBQUU7UUFDZCxVQUFVLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUNuQztJQUNELElBQUksTUFBTSxJQUFJLENBQUMsRUFBRTtRQUNiLFVBQVUsQ0FBQyxnQkFBZ0IsR0FBRyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztLQUMzRDtJQUVELE9BQU8sVUFBVSxDQUFDO0FBQ3RCLENBQUMsQ0FBQTtBQWZZLFFBQUEsU0FBUyxhQWVyQjtBQUVNLE1BQU0sY0FBYyxHQUFHLENBQUMsTUFBYyxFQUFFLEVBQUU7SUFDN0MsT0FBTyxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUE7QUFDakQsQ0FBQyxDQUFBO0FBRlksUUFBQSxjQUFjLGtCQUUxQiJ9