import { Request, RestBindings, get, ResponseObject } from '@loopback/rest';
import { inject } from '@loopback/core';

/**
 * OpenAPI response for ping()
 */
const DATE_RESPONSE: ResponseObject = {
  description: 'Return the current date',
  content: {
    'application/json': {
      schema: {
        type: 'object',
        title: 'DateResponse',
        properties: {
          date: { type: 'string' }
        },
      },
    },
  },
};

export class DateController {
  constructor(@inject(RestBindings.Http.REQUEST) private req: Request) {}

  @get('/date', {
    responses: {
      '200': DATE_RESPONSE,
    },
  })

  date(): object {
    return {
      date: new Date(),
    };
  }
}
