import { CreateDateColumn, UpdateDateColumn } from 'typeorm';

//SELECT TIMESTAMP '2020-08-06 12:00:00' AT TIME ZONE 'Australia/Melbourne';
export abstract class Base {
  @CreateDateColumn({
    name: 'created_at',
    // type: 'timestamptz',
    type: 'timestamp', // TIMESTAMP WITH TIME ZONE
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  public created_at: Date;

  @UpdateDateColumn({
    name: 'updated_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
  })
  public updated_at: Date;
}

/*
refrence:
entity == datbase 
createAt (X) -> crearte_at (0)
*/
