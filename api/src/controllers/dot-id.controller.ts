import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {DotId} from '../models';
import {DotIdRepository} from '../repositories';
import { EmailUsed, InvalidPassword } from '../errors';

import * as argon from 'argon2';

export class DotIdController {
  constructor(
    @repository(DotIdRepository)
    public dotIdRepository : DotIdRepository,
  ) {}

  @post('/idauth/', {
    responses: {
      '200': {
        description: 'DotId model instance',
        content: {'application/json': {schema: getModelSchemaRef(DotId)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(DotId, {
            title: 'dotID',
            exclude: ['id'],
          }),
        },
      },
    })
    dotId: Omit<DotId, 'id'>,
  ): Promise<DotId> {
    const { name, email, password } = dotId;

    return argon.verify(password, "").then(async _ => {
      const exists = await this.dotIdRepository.find({ where: { email } });

      if(exists.length >= 1) throw new InvalidPassword("Email is already in use.");

      return this.dotIdRepository.create({ name, email, password });
    }).catch(_ => {
      throw new InvalidPassword("Password is not the expected type.");
    });
  }

  @get('/idauth', {
    responses: {
      '200': {
        description: 'Array of DotId model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(DotId, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(DotId) filter?: Filter<DotId>,
  ): Promise<DotId[]> {
    return this.dotIdRepository.find(filter);
  }
}
