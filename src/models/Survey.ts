import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity("surveys")

class Survey {
  @PrimaryGeneratedColumn('increment')
  public id: number;

  @Column()
  public title: string;

  @Column()
  public description: string;

  @Column('datetime')
  create_at: Date;


}

export { Survey };
