'use strict';
import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class User extends Model {
  @Column
  account!: string;

  @Column
  password!: string;
}
