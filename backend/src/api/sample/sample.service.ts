import { inMemoryRepository } from "../../database/memory";

import { AppError } from "../../helpers/error";

export class SampleService {
  private repository = new inMemoryRepository(); // TODO: Create generic interfaces

  sayHelloFromUser(name: string) {
    const user = this.repository.getUser(name);

    if (!user) throw new AppError(400, "User not found");

    return `Hello from ${user}!`;
  }
}
