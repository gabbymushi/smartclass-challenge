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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateExcel = void 0;
const exceljs_1 = __importDefault(require("exceljs"));
const generateExcel = (columns, data, fileName, response) => __awaiter(void 0, void 0, void 0, function* () {
    // Create Excel workbook and worksheet
    const workbook = new exceljs_1.default.Workbook();
    const worksheet = workbook.addWorksheet('data');
    // Define columns in the worksheet, these columns are identified using a key.
    worksheet.columns = columns;
    // Add rows from database to worksheet 
    for (const row of data) {
        worksheet.addRow(row);
    }
    // Add auto-filter on each column
    worksheet.autoFilter = 'A1:D1';
    // Finally save the worksheet into the folder from where we are running the code. 
    response.setHeader("Content-Type", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
    response.setHeader("Content-Disposition", "attachment; filename=" + fileName);
    yield workbook.xlsx.write(response);
    response.end();
});
exports.generateExcel = generateExcel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhjZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdXRpbHMvZXhjZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0RBQTRCO0FBRXJCLE1BQU0sYUFBYSxHQUFHLENBQU8sT0FBc0IsRUFBRSxJQUFtQixFQUFFLFFBQWdCLEVBQUUsUUFBYSxFQUFFLEVBQUU7SUFDaEgsc0NBQXNDO0lBQ3RDLE1BQU0sUUFBUSxHQUFHLElBQUksaUJBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUN0QyxNQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBRWhELDZFQUE2RTtJQUM3RSxTQUFTLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztJQUU1Qix1Q0FBdUM7SUFDdkMsS0FBSyxNQUFNLEdBQUcsSUFBSSxJQUFJLEVBQUU7UUFDcEIsU0FBUyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUN6QjtJQUVELGlDQUFpQztJQUNqQyxTQUFTLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQztJQUMvQixrRkFBa0Y7SUFDbEYsUUFBUSxDQUFDLFNBQVMsQ0FDZCxjQUFjLEVBQ2QsbUVBQW1FLENBQ3RFLENBQUM7SUFFRixRQUFRLENBQUMsU0FBUyxDQUNkLHFCQUFxQixFQUNyQix1QkFBdUIsR0FBRyxRQUFRLENBQ3JDLENBQUM7SUFFRixNQUFNLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBRXBDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUNuQixDQUFDLENBQUEsQ0FBQTtBQTdCWSxRQUFBLGFBQWEsaUJBNkJ6QiJ9