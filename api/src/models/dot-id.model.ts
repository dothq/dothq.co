import {Entity, model, property} from '@loopback/repository';

import { makeId } from '../../../lib/tools/id'

@model({
  settings: {
    postgresql: { table: 'users' },
  }
})
export class DotId extends Entity {
  @property({
    type: 'string',
    id: true,
    default: () => makeId(),
  })
  id: string;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
    required: true,
    jsonSchema: {
      format: 'email',
      minLength: 7,
      maxLength: 64,
      transform: ['toLowerCase'],
      errorMessage: {
        format: 'Email must be valid.',
        minLength: 'Email should be at least 7 characters.',
        maxLength: 'Email should not exceed 64 characters.',
      }
    },
  })
  email: string;

  @property({
    type: 'string',
    required: true,
    hidden: true
  })
  password: string;

  @property({
    type: 'date',
  })
  lastSync?: string;

  @property({
    type: 'object',
  })
  sync?: object;

  @property({
    type: 'array',
    itemType: 'object',
  })
  devices?: object[];

  @property({
    type: 'string',
  })
  avatar?: string;

  constructor(data?: Partial<DotId>) {
    super(data);
  }
}

export interface DotIdRelations {
  // describe navigational properties here
}

export type DotIdWithRelations = DotId & DotIdRelations;
