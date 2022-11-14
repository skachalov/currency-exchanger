import axios from "axios";

export const fetchGetGoerliEtherscan = async (page: string) => await axios.get(page)