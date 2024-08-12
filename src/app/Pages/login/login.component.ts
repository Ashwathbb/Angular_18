import { Component } from '@angular/core';
import { AuthResponseDto, LoginDto } from '../../core/model/Model';
import { ProductService } from '../../core/services/product.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterLink,RouterOutlet,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
  loginForm: FormGroup;
  errorMessage: string | null = null;
  router: any;

  constructor(private fb: FormBuilder, private authService: ProductService) {
    this.loginForm = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const loginDto = this.loginForm.value;
  
      this.authService.onLogin(loginDto).subscribe({
        next: (response) => {
          console.log('Login response:', response); // Log response for debugging
  
          alert("Successfully logged in!");
  
          localStorage.setItem('userName', response.userName || '');
  
          this.router.navigate(['/home']);
        },
        error: (err) => {
          console.error('Login error:', err); // Log error for debugging
          this.errorMessage = 'Invalid username or password';
          alert(this.errorMessage);
        }
      });
    }
  }
  
}
