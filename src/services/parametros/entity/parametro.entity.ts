import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('parametros_globales')
export class ParametroEntity {

    @PrimaryGeneratedColumn()
    id?: number;

    @Column({ type: 'varchar', length: 50, unique: true })
    descripcion: string;

    @Column({ type: 'boolean', default: false })
    valor: boolean;

    @CreateDateColumn({ name: 'fecha_creacion', default: new Date() })
    fechaCreacion?: Date;
}