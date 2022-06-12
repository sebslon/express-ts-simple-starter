import { Response } from "express";
import { TRequestQueryP } from "../../types";

import { SampleService } from "./sample.service";

export class SampleController {
  private sampleService: SampleService = new SampleService(); // or again use static methods

  sayHello(req: TRequestQueryP<{ name: string }>, res: Response) {
    const result = this.sampleService.sayHelloFromUser(req.query.name);

    res.status(200).send(result);
  }
}
