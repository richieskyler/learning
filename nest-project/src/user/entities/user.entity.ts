import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name:string;
    @Column()
    age:number;
    @Column()
    password:string;
    @Column()
    email:string;

    shouting(){
        console.log(`${this.name} is shouting`)
    }
}
