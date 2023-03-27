'use strict';
import { Table, Column, Model, HasMany, BelongsToMany } from 'sequelize-typescript';
import { Classroom } from './classroom';
import { SchoolTeacher } from './school_teacher';
import { Teacher } from './teacher';

@Table
export class School extends Model {
  @Column
  name!: string;

  @Column
  address!: string;

  @HasMany(() => Classroom)
  classrooms?: Classroom[];

  @BelongsToMany(() => Teacher, () => SchoolTeacher)
  teachers?: Teacher[];
}
