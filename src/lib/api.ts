const BASE_URL = "http://localhost:3000";

export interface Painting {}

const get = async <T>(url: string) => {};

const post = async <T>(url: string, data: T) => {};

export const getPaintings = async () =>
  get<Painting[]>("/paintings");

export const addPainting = async (data: Painting) =>
  post<Painting>("/paintings", data);