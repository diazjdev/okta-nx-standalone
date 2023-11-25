import { Observable } from 'rxjs';

export abstract class ProducService {
  abstract all<T>(): Observable<Array<T>>;
  abstract update<T>(item: T): Observable<T>;
  abstract delete<T>(item: T): Observable<void>;
}
