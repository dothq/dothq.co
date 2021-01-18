import {DefaultCrudRepository} from '@loopback/repository';
import {DotId, DotIdRelations} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class DotIdRepository extends DefaultCrudRepository<
  DotId,
  typeof DotId.prototype.id,
  DotIdRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(DotId, dataSource);
  }
}
