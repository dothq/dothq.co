import { Injectable, NotFoundException } from '@nestjs/common';

interface User {
    id: number,
    username: string,
    email: string,
    password: string
}

@Injectable()
export class IdService {
    public users: User[] = [
        {
            id: 0,
            username: "God",
            email: "god@heaven.com",
            password: "Test"
        },
        {
            id: 1,
            username: "Kieran",
            email: "kieran@dothq.co",
            password: "KieranPassword"
        }
    ];

    public get(id: number) {
        const user = this.users.find(u => u.id == id);

        if(!user) throw new NotFoundException();
        return user;
    }

    public create(user: User) {
        this.users.push(user);
        return user;
    }

    public update(id: number, data: Partial<User>) {
        const index = this.users.findIndex(u => u.id == id);
        if(!index) return false;
        
        this.users[index] = { ...this.users[index], ...data }

        return this.users[index];
    }
}
