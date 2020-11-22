import { Injectable, NotFoundException, UnprocessableEntityException } from '@nestjs/common';

import { compare } from '../../../lib/tools/encrypt';

import { UsersRepository } from './users.repository';
import { RegisterRequest } from 'requests';

import { EMAIL_ALREADY_IN_USE } from 'statuses';

interface User {
    name: string,
    email: string,
    password: string
}

@Injectable()
export class UsersService {
    private readonly users: UsersRepository

    public constructor (users: UsersRepository) {
      this.users = users
    }

    public get(id: string) {
        return this.users.findById(id);
    }

    public create({ name, email, password }: User) {
        return this.users.create(name, email, password);
    }

    public async validateCredentials(user: User, password: string): Promise<boolean> {
        return compare(password, user.password);
    }
    
    public async createFromRequest(request: RegisterRequest): Promise<User> {
        const { email } = request;

        const emailInUse = await this.users.findBy("email", email);

        if (emailInUse) throw new UnprocessableEntityException(EMAIL_ALREADY_IN_USE);

        return this.create(request);
    }
}
