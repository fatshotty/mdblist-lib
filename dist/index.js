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
exports.MDBList = void 0;
const got_1 = __importDefault(require("got"));
const BASE_URL = 'https://mdblist.com/api/';
function getProviderKey(p) {
    switch (p) {
        case 'imdb': return 'i';
        case 'tmdb': return 'tm';
        case 'tvdb': return 'tv';
        case 'trakt': return 't';
    }
    throw 'invalid provider';
}
class MDBList {
    constructor(apikey) {
        this.apikey = null;
        this.apikey = apikey;
    }
    search(title, year, type) {
        return __awaiter(this, void 0, void 0, function* () {
            const params = [
                `apikey=${this.apikey}`,
                `s=${title}`
            ];
            if (year) {
                params.push(`y=${year}`);
            }
            if (type) {
                params.push(`m=${type}`);
            }
            return yield (0, got_1.default)(`${BASE_URL}?${params.join('&')}`).json();
        });
    }
    byID(provider, id) {
        return __awaiter(this, void 0, void 0, function* () {
            const providerKey = getProviderKey(provider);
            const params = [
                `apikey=${this.apikey}`,
                `${providerKey}=${id}`
            ];
            return yield (0, got_1.default)(`${BASE_URL}?${params.join('&')}`).json();
        });
    }
    byImdbID(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.byID('imdb', id);
        });
    }
    byTmdbID(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.byID('tmdb', id);
        });
    }
    byTvdbID(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.byID('tvdb', id);
        });
    }
    byTraktID(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.byID('trakt', id);
        });
    }
}
exports.MDBList = MDBList;
