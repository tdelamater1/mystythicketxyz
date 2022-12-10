import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators'
import { HttpHeaders } from '@angular/common/http'
import { environment } from '../../environments/environment';
import { EmailMessage } from '../EmailMessage';



@Injectable({
  providedIn: 'root'
})
export class MessagingService {
  private mailApi = environment.apiUrl;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }; 
  constructor(private http: HttpClient) { 
  }

/*
  curl -X POST http://localhost:3000/sendmail -H 'Content-Type: application/json' -d '{"email":"tdelamater@gmail.com","name":"Tyler D", "message":"Hello coder due."}'
 */

  postMessage(input: EmailMessage): Observable<any> {
    const body = JSON.stringify(input);
    const url = `${this.mailApi}/sendmail`;
    console.log(body);
    console.log(url);
    console.log(environment.production);

    return this.http.post(url, body, this.httpOptions)
      .pipe(
        tap(_ => console.log('email posted')),
        catchError(this.handleError<EmailMessage[]>('postMessage', []))
      );
  }

  // getEvent(id: string): Observable<TMEvent> {
  //   const url = `${this.eventUrl}/${id}`;
  //   return this.http.get<TMEvent>(url).pipe(
  //     tap(_ => this.log(`fetched event id=${id}`)),
  //     catchError(this.handleError<TMEvent>(`getEvent id=${id}`))
  //   );
  // }

  testMessage(){
    const url = `${this.mailApi}/test`;
    console.log('test message');
    console.log(url);
    console.log(environment.production);
    return this.http.get(url)
      .pipe(
        tap(_ => console.log('test made')),
        catchError(this.handleError<EmailMessage[]>('testMessage', []))
      );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
   private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  
}
