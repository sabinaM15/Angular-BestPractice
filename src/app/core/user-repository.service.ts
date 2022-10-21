import { Injectable } from '@angular/core';
import { Observable, Subject, EMPTY, throwError } from 'rxjs';
import { map, delay } from 'rxjs/operators';
// import "rxjs/observable/empty";


@Injectable()
export class UserRepositoryService {
  currentUser:any;

  constructor() {}

  saveUser(user): Observable<any> {
    user.classes = user.classes || [];
    this.currentUser = user;

    return EMPTY.pipe(delay(3000));
  }

  enroll(classId): Observable<any> {
    if (!this.currentUser)
      return throwError(() => new Error('User not signed in'));

    if (this.currentUser.classes.includes(classId))
      return throwError(() => new Error('Already enrolled'));

    this.currentUser = Object.assign({}, this.currentUser, {classes: this.currentUser.classes.concat([classId])});

    return EMPTY.pipe(delay(1000));
  }

  drop(classId): Observable<any> {
    if (!this.currentUser)
      return throwError(() => new Error('User not signed in'));

    if (!this.currentUser.classes.includes(classId))
      return throwError(() => new Error('Not enrolled'));

    this.currentUser.classes = this.currentUser.classes.filter(c => c !== classId);

    return EMPTY.pipe(delay(1000));
  }

  signIn(credentials): Observable<any> {
    //Never, ever check credentials in client-side code.
    //This code is only here to supply a fake endpoint for signing in.
    if (credentials.email !== 'me@whitebeards.edu' || credentials.password !== 'super-secret')
      return throwError(() => new Error('Invalid login'));

    this.currentUser = {
      userId: 'e61aebed-dbc5-437a-b514-02b8380d8efc',
      firstName: 'Jim',
      lastName: 'Cooper',
      email: 'me@whitebeards.edu',
      classes: ['24ab7b14-f935-44c1-b91b-8598123ea54a']
    };

    return EMPTY.pipe(delay(1000));
  }
}

const users = [{
  userId: 'e61aebed-dbc5-437a-b514-02b8380d8efc',
  firstName: 'Jim',
  lastName: 'Cooper',
  email: 'someones-email@gmail.com',
  password: 'supersecret',
  classes: ['24ab7b14-f935-44c1-b91b-8598123ea54a']
}];
