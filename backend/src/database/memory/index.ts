// separate per use case - for example purposes only

import { AppError } from "../../helpers/error";

export class inMemoryRepository {
  private users = ["Sebastian"];

  getUser(name: string) {
    return this.users.find((user) => user === name);
  }
}
