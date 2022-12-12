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

  postMessage(input: EmailMessage): Observable<any> {
    const body = JSON.stringify(input);
    const url = `${this.mailApi}/sendmail`;
    console.log(body);
    console.log(url);
    console.log(`prod: ${environment.production}`);

    return this.http.post(url, body, this.httpOptions)
      .pipe(
        tap(_ => console.log('email posted')),
        catchError(this.handleError<EmailMessage[]>('postMessage', []))
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
