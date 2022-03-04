import {Genre} from "./genre";
import {Platform} from "./platform";
import {Category} from "./category";

export interface Game {
  id: number;
  title: string;
  description: string;
  coverPicture: string;
  picture: string;
  genres: Array<Genre>;
  platforms: Array<Platform>;
  categories: Array<Category>;
  createdAt: Date;
  releaseDate: Date;
}
