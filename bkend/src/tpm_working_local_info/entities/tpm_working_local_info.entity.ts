import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class TpmWorkingLocalInfo {
    @PrimaryColumn()
    id: number
    @Column()
    working_local_number: string

    @Column()
    working_local_name: string

    @Column()
    working_local_desc: string

    @Column()
    physical_station: number

    @Column()
    working_local_ip: string

    @Column("tinyint")
    working_local_state

    @Column()
    busy: number
    remarks: string
    create_by: number

    @Column('datetime')
    create_time

    @Column()
    update_by: number

    @Column('datetime')
    update_time

    @Column('tinyint')
    delete_flag: number

}
