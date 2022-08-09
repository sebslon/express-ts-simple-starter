import { Response } from 'express';

import { TRequestQueryP } from '../../types';

import { sampleService } from './sample.service';

export class SampleController {
  static async sayHello(req: TRequestQueryP<{ name: string }>, res: Response) {
    const result = await sampleService.sayHelloFromUser(req.query.name);

    res.status(200).send(result);
  }
}
