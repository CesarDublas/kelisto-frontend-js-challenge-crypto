import response from "../../../../app/data/response.json";
import updated from "../../../../app/data/updated.json";
import { Crypto } from "./Crypto";

export const getCryptoList: () => Crypto[] = () => response;
export const refreshCryptoList: () => Crypto[] = () => updated;
