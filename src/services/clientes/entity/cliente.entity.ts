import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('cliente')
export class ClienteEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 30 })
    tipo_documento: string;

    @Column({ type: 'varchar', length: 20, unique: true })
    numero_documento: string;

    @Column({ type: 'varchar', length: 20 })
    nombre: string;

    @Column({ type: 'varchar', length: 20 })
    apellido: string;

    @Column({ type: 'date' })
    fecha_nacimiento: Date;

    @Column({ type: 'varchar', length: 50 })
    lugar_residencia: string;

    @Column({ type: 'varchar', length: 15 })
    telefono: string;

    @Column({ type: 'varchar', length: 50, unique: true })
    correo: string;

    @Column({ name: "contraseña", type: 'varchar', length: 15 })
    password: string;

    @Column({ type: 'varchar', length: 10 })
    genero: string;

    @Column({ type: 'decimal' })
    bono_bienvenida: number;

    @Column({ type: 'date', default: new Date() })
    fecha_registro: Date;    
    }