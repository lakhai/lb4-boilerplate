import {DefaultCrudRepository} from '@loopback/repository';
import {User} from '../models';
import {MongoDbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class UserRepository extends DefaultCrudRepository<
  User,
  typeof User.prototype.id
> {
  constructor(
    @inject('datasources.MongoDB') dataSource: MongoDbDataSource,
  ) {
    super(User, dataSource);
  }
}
