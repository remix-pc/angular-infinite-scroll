import { Component, OnInit } from '@angular/core';
import { PaginationDummyService } from '../../services/pagination-dummy.service';
import { Student } from '../../model/student.model';

@Component({
  selector: 'app-ngx-infinite-scroll',
  templateUrl: './ngx-infinite-scroll.component.html',
  styleUrl: './ngx-infinite-scroll.component.scss'
})
export class NgxInfiniteScrollComponent implements OnInit{


  students: any[] = [];
  page: number = 0;
  size: number = 10;
  isLoading: boolean = false;

  constructor(private studentService: PaginationDummyService) {} // Injeta o serviço

  ngOnInit() {
    this.loadStudents(); // Carrega a primeira página de estudantes
  }

  loadStudents() {
    if (this.isLoading) {
      return;
    }
    this.isLoading = true;
    this.studentService.getStudents(this.page, this.size).subscribe((data) => {
      this.students = [...this.students, ...data.content]; // Adiciona os novos estudantes
      this.page++; // Incrementa a página
      this.isLoading = false;
    });
    console.log(this.students);
    
  }

  onScroll() {
    this.loadStudents(); // Carrega a próxima página ao scrollar
  }
}

