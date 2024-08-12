import { Component } from '@angular/core';
import { AuthResponseDto, LoginDto } from '../../core/model/Model';
import { ProductService } from '../../core/services/product.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterOutlet,ReactiveFormsModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;

      this.productService.login(username, password).subscribe({
        next: (response) => {
          if (response.success && response.token) {
            this.productService.saveToken(response.token); // Save the token
            this.router.navigate(['/products']); // Redirect to the dashboard
          } else {
            this.errorMessage = 'Invalid username or password';
          }
        },
        error: (err) => {
          console.error('Login error:', err);
          this.errorMessage = 'An error occurred. Please try again later.';
        }
      });
    } else {
      this.errorMessage = 'Please fill in all fields correctly';
    }
  }
}
