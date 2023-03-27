'use strict';
import { UUID } from 'crypto';
import {
  Table,
  Column,
  Model,
  ForeignKey,
  BelongsTo,
  DataType,
  Default
} from 'sequelize-typescript';
import { School } from './school';
import { Teacher } from './teacher';

@Table
export class Classroom extends Model {
  @Column
  name!: string;

  @Default(0)
  @Column
  capacity!: number;

  @Default(false)
  @Column(DataType.BOOLEAN)
  closed!: boolean;

  @ForeignKey(() => School)
  @Column
  schoolId!: UUID;

  @BelongsTo(() => School)
  school!: School;

  @ForeignKey(() => Teacher)
  @Column
  teacherId?: UUID;

  @BelongsTo(() => Teacher)
  teacher?: Teacher;
}
