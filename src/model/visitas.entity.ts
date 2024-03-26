import { Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity('visitas')
export class Visita{
    @PrimaryGeneratedColumn()
    id:String;
    @Column()
    direccionIP:String;
    @Column()
    dispositivo:String;
    @Column()
    sistema_operativo:String;
    @Column()
    token:String;
    @Column()
    visitasRepetidas:Number
}