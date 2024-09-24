import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { PaginatedResponse } from '../model/paginatedresponse.model';
import { Student } from '../model/student.model';

@Injectable({
  providedIn: 'root'
})
export class PaginationDummyService {

  private apiUrl = 'http://localhost:8080/api/student'; // URL da API

  constructor(private http: HttpClient) {}

  // Método para buscar os estudantes com paginação
  getStudents(page: number, size: number): Observable<PaginatedResponse<Student>> {
    return this.http.get<PaginatedResponse<Student>>(`${this.apiUrl}?page=${page}&size=${size}`).pipe(delay(500));
  }

}