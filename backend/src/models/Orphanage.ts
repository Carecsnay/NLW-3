import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn } from 'typeorm';
import Image from './Image'

@Entity('orphanages')
export default class Orphanage {
    @PrimaryGeneratedColumn('increment')
    id: number;
    
    @Column()
    name: string;

    @Column()
    latitude: number;
    
    @Column()
    longitude: number;

    @Column()
    about: string;

    @Column()
    instructions: string;
    
    @Column()
    opening_hours: string;

    @Column()
    open_on_weekends: boolean;

    @OneToMany(() => Image, image => image.orphanage, {
        cascade: ['insert', 'update']       //se eu criar um orfa.. e preencher as imgs ele vai automaticamente cadastrar ou atualizar imagens relacionada com aquele orfanato
    })
    @JoinColumn ({name: ' orphanage_id' })      // relacionamento de 1 orfa para muitas imgs
    images: Image[

    ]
}