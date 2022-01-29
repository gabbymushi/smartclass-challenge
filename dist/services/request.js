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
exports._delete = exports.post = exports.get = void 0;
const axios_1 = __importDefault(require("axios"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
//const { TIGER_GATEWAY_BASE_URL, TIGER_API_SECRET } = constants;
const TIGER_GATEWAY_BASE_URL = '';
const TIGER_API_SECRET = '';
const get = (uri, queryParam) => __awaiter(void 0, void 0, void 0, function* () {
    const requestOptions = {
        headers: {
            'Content-Type': 'application/json',
            'accept': 'application/json',
            'jwt-token': jsonwebtoken_1.default.sign(queryParam, TIGER_API_SECRET)
        }
    };
    const response = yield axios_1.default.get(`${TIGER_GATEWAY_BASE_URL}/${uri}`, requestOptions);
    return response.data;
});
exports.get = get;
const post = (uri, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const requestOptions = {
        headers: {
            'Content-Type': 'application/json',
            'accept': 'application/json',
            'jwt-token': jsonwebtoken_1.default.sign(payload, TIGER_API_SECRET)
        }
    };
    const response = yield axios_1.default.post(`${TIGER_GATEWAY_BASE_URL}/${uri}`, payload, requestOptions);
    console.log(`${TIGER_GATEWAY_BASE_URL}/${uri}`);
    console.log(response.data);
    return response.data;
});
exports.post = post;
const _delete = (uri, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const requestOptions = {
        headers: {
            'Content-Type': 'application/json',
            'accept': 'application/json',
            'jwt-token': jsonwebtoken_1.default.sign(payload, TIGER_API_SECRET)
        },
        data: payload
    };
    const response = yield axios_1.default.delete(`${TIGER_GATEWAY_BASE_URL}/${uri}`, requestOptions);
    return response.data;
});
exports._delete = _delete;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVxdWVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZXJ2aWNlcy9yZXF1ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGtEQUEwQjtBQUMxQixnRUFBK0I7QUFHL0IsaUVBQWlFO0FBQ2pFLE1BQU0sc0JBQXNCLEdBQUMsRUFBRSxDQUFDO0FBQ2hDLE1BQU0sZ0JBQWdCLEdBQUMsRUFBRSxDQUFDO0FBRW5CLE1BQU0sR0FBRyxHQUFHLENBQU8sR0FBVyxFQUFFLFVBQWtCLEVBQUUsRUFBRTtJQUN6RCxNQUFNLGNBQWMsR0FBRztRQUNuQixPQUFPLEVBQUU7WUFDTCxjQUFjLEVBQUUsa0JBQWtCO1lBQ2xDLFFBQVEsRUFBRSxrQkFBa0I7WUFDNUIsV0FBVyxFQUFFLHNCQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxnQkFBZ0IsQ0FBQztTQUN0RDtLQUNKLENBQUM7SUFFRixNQUFNLFFBQVEsR0FBRyxNQUFNLGVBQUssQ0FBQyxHQUFHLENBQzVCLEdBQUcsc0JBQXNCLElBQUksR0FBRyxFQUFFLEVBQ2xDLGNBQWMsQ0FDakIsQ0FBQztJQUVGLE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQztBQUN6QixDQUFDLENBQUEsQ0FBQTtBQWZZLFFBQUEsR0FBRyxPQWVmO0FBRU0sTUFBTSxJQUFJLEdBQUcsQ0FBTyxHQUFXLEVBQUUsT0FBWSxFQUFFLEVBQUU7SUFDcEQsTUFBTSxjQUFjLEdBQUc7UUFDbkIsT0FBTyxFQUFFO1lBQ0wsY0FBYyxFQUFFLGtCQUFrQjtZQUNsQyxRQUFRLEVBQUUsa0JBQWtCO1lBQzVCLFdBQVcsRUFBRSxzQkFBRyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsZ0JBQWdCLENBQUM7U0FDbkQ7S0FDSixDQUFDO0lBRUYsTUFBTSxRQUFRLEdBQUcsTUFBTSxlQUFLLENBQUMsSUFBSSxDQUM3QixHQUFHLHNCQUFzQixJQUFJLEdBQUcsRUFBRSxFQUNsQyxPQUFPLEVBQ1AsY0FBYyxDQUNqQixDQUFDO0lBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLHNCQUFzQixJQUFJLEdBQUcsRUFBRSxDQUFDLENBQUM7SUFDaEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0IsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUFDO0FBQ3pCLENBQUMsQ0FBQSxDQUFBO0FBakJZLFFBQUEsSUFBSSxRQWlCaEI7QUFFTSxNQUFNLE9BQU8sR0FBRyxDQUFPLEdBQVcsRUFBRSxPQUFZLEVBQUUsRUFBRTtJQUN2RCxNQUFNLGNBQWMsR0FBRztRQUNuQixPQUFPLEVBQUU7WUFDTCxjQUFjLEVBQUUsa0JBQWtCO1lBQ2xDLFFBQVEsRUFBRSxrQkFBa0I7WUFDNUIsV0FBVyxFQUFFLHNCQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxnQkFBZ0IsQ0FBQztTQUNuRDtRQUNELElBQUksRUFBRSxPQUFPO0tBQ2hCLENBQUM7SUFFRixNQUFNLFFBQVEsR0FBRyxNQUFNLGVBQUssQ0FBQyxNQUFNLENBQy9CLEdBQUcsc0JBQXNCLElBQUksR0FBRyxFQUFFLEVBQ2xDLGNBQWMsQ0FDakIsQ0FBQztJQUVGLE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQztBQUN6QixDQUFDLENBQUEsQ0FBQTtBQWhCWSxRQUFBLE9BQU8sV0FnQm5CIn0=