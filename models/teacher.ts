'use strict';
import {
  Table,
  Column,
  Model,
  HasMany,
  BelongsToMany
} from 'sequelize-typescript';
import { Classroom } from './classroom';
import { School } from './school';
import { SchoolTeacher } from './school_teacher';

@Table
export class Teacher extends Model {
  @Column
  name!: string;

  @BelongsToMany(() => School, () => SchoolTeacher)
  schools?: School[];

  @HasMany(() => Classroom)
  classrooms?: Classroom[];
}
