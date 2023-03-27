'use strict';
import {
  Table,
  Column,
  Model,
  ForeignKey,
  BelongsTo
} from 'sequelize-typescript';
import { School } from './school';
import { Teacher } from './teacher';

@Table
export class SchoolTeacher extends Model {
  @ForeignKey(() => School)
  @Column
  schoolId!: number;

  @BelongsTo(() => School)
  school!: School;

  @ForeignKey(() => Teacher)
  @Column
  teacherId!: number;

  @BelongsTo(() => Teacher)
  teacher!: Teacher;
}
